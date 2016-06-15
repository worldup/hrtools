package com.hr.tools.gui;

import com.hr.tools.core.spider.Log;
import com.hr.tools.core.spider.RunStatus;
import com.hr.tools.core.spider.liepin.ApplicationMetrics;
import com.hr.tools.core.spider.linkedin.LinkedinSearchMain;

import javax.swing.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.Observable;
import java.util.Observer;

/**
 * Created by administrator on 16/5/22.
 */
public class TabMainForm  implements Observer {
    private JTabbedPane tabbedPane1;
    private JPanel panel1;
    private JTextArea consoleTextArea;
    private JTextField searchPageUrl;
    private JTextArea textHead;
    private JTextField pageCount;
    private JTextField intervalMinField;
    private JTextField intervalMaxField;
    private JButton btnExe;
    private JButton btnClose;
    private JLabel msgLabel;
    private LinkedinSearchMain application;
    static TabMainForm mainForm;
    static  Log log;
    public static void main(String[] args) {
        JFrame frame = new JFrame("领英简历小助手");
        mainForm=new TabMainForm(frame);

        frame.setContentPane(mainForm.tabbedPane1);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.pack();
        log=new Log();
        log.addObserver(mainForm);
        log.info("系统启动");
        frame.setVisible(true);
    }
    public TabMainForm(final JFrame frame) {
        btnClose.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                frame.dispose();
                System.exit(-1);
            }
        });
        btnExe.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                long minSleepSecond=30000;
                long maxSleepSecond=60000;
                int count=0;
                msgLabel.setText(".");
                try{
                    minSleepSecond=Long.parseLong(intervalMinField.getText())*1000;
                    maxSleepSecond=Long.parseLong(intervalMaxField.getText())*1000;
                    if(maxSleepSecond<minSleepSecond){
                        msgLabel.setText("时间区间最大值应>=最小值");
                        return;
                    }

                }catch(Exception e1){
                    msgLabel.setText("请确定时间区间格式设置正确");
                    return;
                }
                try{
                    count= Integer.parseInt(pageCount.getText());
                }catch(Exception e2){
                    msgLabel.setText("请设置正确的页码数");
                    return;
                }
                application=new LinkedinSearchMain(log,minSleepSecond,maxSleepSecond,textHead.getText(),searchPageUrl.getText(),count);
                application.addObserver(mainForm);

                new Thread(application).start();
                log.info("任务线程初始化完毕开始执行");
                btnExe.setEnabled(false);
            }
        });
    }

    public void update(Observable o, Object arg) {
        if(o instanceof LinkedinSearchMain){
            if(arg instanceof ApplicationMetrics){
                ApplicationMetrics metrics=(ApplicationMetrics)arg;
                metrics.getTotalResumeCount();
                String info=String.format("总共找到简历 %d 份,已完成下载简历 %d 份,出错 %d 份",metrics.getTotalResumeCount().get(),metrics.getFinishedResumeCount().get(),metrics.getErrorResumeCount().get());
                RunStatus runStatus=metrics.getRunStatus();
                if(runStatus.equals(RunStatus.finished)){
                    info+="任务执行结束";
                    btnExe.setEnabled(true);
                }
                msgLabel.setText(info);
            }
            else if(arg instanceof  String){
                msgLabel.setText(arg.toString());
            }
        }else if(o instanceof Log){
            Log log= (Log) o;
            consoleTextArea.setText(log.info());
        }
    }
}

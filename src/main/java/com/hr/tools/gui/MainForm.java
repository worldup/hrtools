package com.hr.tools.gui;

import com.hr.tools.core.spider.RunStatus;
import com.hr.tools.core.spider.liepin.Application;
import com.hr.tools.core.spider.liepin.ApplicationMetrics;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.net.URLDecoder;
import java.util.Map;
import java.util.Observable;
import java.util.Observer;

/**
 * Created by administrator on 16/5/21.
 */
public class MainForm implements Observer{
    private JButton actionButton;
    private JButton closeButton;
    private JTextField intervalMinField;
    private JTextField catalogField;
    private JTextArea headTextArea;
    private JPanel mainPanel;
    private JTextArea dataTextArea;
    private JLabel loginLabel;
    private JLabel userNameLabel;
    private JLabel userNameValueLabel;
    private JLabel resumesInfoLabel;
    private JTextField intervalMaxField;
    private JLabel splitLabel;
    private JLabel errMsgLabel;
    private Application application;
    static MainForm mainForm;
    public static void main(String[] args) {
        JFrame frame = new JFrame("猎聘简历小助手");
          mainForm=new MainForm(frame);
        frame.setContentPane(mainForm.mainPanel);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.pack();
        frame.setVisible(true);
    }




    public MainForm(final JFrame frame) {

        actionButton.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                String header=headTextArea.getText();
                if(header!=null && header.trim().length()>0){
                    try {
                        Map<String,String> cookieMap= GuiHelper.parseCookie(header);
                        String user_name=cookieMap.get("user_name");

                        userNameValueLabel.setText(URLDecoder.decode(user_name, "utf-8"));
                        long minSleepSecond=30000;
                        long maxSleepSecond=60000;
                        errMsgLabel.setText("");
                        try{
                              minSleepSecond=Long.parseLong(intervalMinField.getText())*1000;
                              maxSleepSecond=Long.parseLong(intervalMaxField.getText())*1000;
                              if(maxSleepSecond<minSleepSecond){
                                  errMsgLabel.setText("请确定时间区间格式设置正确");
                                  return;
                              }
                        }catch(Exception e1){
                            errMsgLabel.setText("请确定时间区间格式设置正确");

                            return;
                        }
                         application=new Application(catalogField.getText(),minSleepSecond,maxSleepSecond,header,dataTextArea.getText());
                         application.addObserver(mainForm);
                         new Thread(application).start();
                        actionButton.setEnabled(false);
                    } catch (Exception exp) {
                        exp.printStackTrace();
                    }


                }

            }
        });
        closeButton.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                frame.dispose();
                 System.exit(-1);
            }
        });


    }

    public void update(Observable o, Object arg) {
        if(o instanceof Application){
            if(arg instanceof ApplicationMetrics){
                ApplicationMetrics metrics=(ApplicationMetrics)arg;
                  metrics.getTotalResumeCount();
                 String info=String.format("总共找到简历 %d 份,已完成下载简历 %d 份",metrics.getTotalResumeCount().get(),metrics.getFinishedResumeCount().get());
                RunStatus runStatus=metrics.getRunStatus();
                if(runStatus.equals(RunStatus.finished)){
                    actionButton.setEnabled(true);
                }
                resumesInfoLabel.setText(info);
            }
            else if(arg instanceof  String){
                resumesInfoLabel.setText(arg.toString());
            }
        }
    }
}

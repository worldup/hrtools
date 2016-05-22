package com.hr.tools.gui;

import com.hr.tools.core.spider.liepin.Application;
import com.hr.tools.core.spider.liepin.ApplicationMetrics;

import javax.swing.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.StringWriter;
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
    private JTextField intervalField;
    private JTextField catalogField;
    private JTextArea headTextArea;
    private JPanel mainPanel;
    private JTextArea dataTextArea;
    private JLabel loginLabel;
    private JLabel userNameLabel;
    private JLabel userNameValueLabel;
    private JLabel resumesInfoLabel;
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
                         application=new Application(catalogField.getText(),Long.parseLong(intervalField.getText())*1000,header,dataTextArea.getText());
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
        System.out.println(o);
        if(o instanceof Application){
            if(arg instanceof ApplicationMetrics){
                ApplicationMetrics metrics=(ApplicationMetrics)arg;
                  metrics.getTotalResumeCount();
                 String info=String.format("总共找到简历 %d 份,已完成下载简历 %d 份",metrics.getTotalResumeCount().get(),metrics.getFinishedResumeCount().get());
                resumesInfoLabel.setText(info);
            }
            else if(arg instanceof  String){
                resumesInfoLabel.setText(arg.toString());
            }
        }
    }
}

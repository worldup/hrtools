package com.hr.tools.gui;

import com.hr.tools.core.spider.liepin.Application;

import javax.swing.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.net.URLDecoder;
import java.util.Map;

/**
 * Created by administrator on 16/5/21.
 */
public class MainForm {
    private JButton actionButton;
    private JButton closeButton;
    private JTextField intervalField;
    private JTextField catalogField;
    private JProgressBar progressBar1;
    private JTextArea headTextArea;
    private JPanel mainPanel;
    private JButton suspendButton;
    private JTextArea dataTextArea;
    private JLabel loginLabel;
    private JLabel userNameLabel;
    private JLabel userNameValueLabel;

    public static void main(String[] args) {
        JFrame frame = new JFrame("猎聘简历小助手");
        frame.setContentPane(new MainForm().mainPanel);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.pack();
        frame.setVisible(true);
    }




    public MainForm() {
        actionButton.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                String header=headTextArea.getText();
                if(header!=null && header.trim().length()>0){
                    try {
                        Map<String,String> cookieMap= GuiHelper.parseCookie(header);
                        String user_name=cookieMap.get("user_name");

                        userNameValueLabel.setText(URLDecoder.decode(user_name, "utf-8"));
                        Application application=new Application(catalogField.getText(),Long.parseLong(intervalField.getText()),header,dataTextArea.getText());
                        new Thread(application).start();
                        suspendButton.setEnabled(true);
                        actionButton.setEnabled(false);
                    } catch (Exception exp) {
                        exp.printStackTrace();
                    }


                }

            }
        });
        closeButton.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {

            }
        });
        suspendButton.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                actionButton.setEnabled(true);
                suspendButton.setEnabled(false);
            }
        });


    }
}

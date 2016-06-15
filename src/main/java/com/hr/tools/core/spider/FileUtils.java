package com.hr.tools.core.spider;

import com.google.common.base.Charsets;
import com.google.common.io.Files;
import org.jsoup.nodes.Document;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.StringWriter;

/**
 * Created by administrator on 16/5/20.
 */
public class FileUtils {
    public static void saveAsFile(String fileName, Document document){

      saveAsFile(fileName,document.toString());

    }
    public static void saveAsFile(String fileName,String content){
        try {
            File file = new File(fileName);
            BufferedWriter  bw = Files.newWriter(file, Charsets.UTF_8);
            bw.write(content);
            bw.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    public static String pureSaveFile(String fileName,String content){
        String abFileName="";
        try {
            File file = new File(fileName);
            FileWriter fw=new FileWriter(file);
            fw.write(content);
            fw.close();
            abFileName=file.getAbsolutePath();
        } catch (Exception e) {
            e.printStackTrace();
        }
       return abFileName;
    }
    public static void mergeAsFile(String fileName,Document parent,Document child,String anchor){
        //anchor="<div class="resume-work" id="workexp_anchor">"
       StringBuilder parentSb=new StringBuilder() ;
        parentSb.append(parent.toString());
        int anchorIdx= parentSb.indexOf(anchor);
        anchorIdx+=anchor.length();
        parentSb.insert(anchorIdx,child.toString());
        saveAsFile(fileName,parentSb.toString());
    }
}

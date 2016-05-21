package com.hr.tools.core.spider.liepin;

import com.google.common.collect.Maps;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;

import java.util.Map;

/**
 * Created by administrator on 16/5/21.
 */
public class SearchResultPageParser {
    public static int parseCount(Document document){
       Elements additionElement= document.select("#findresume-result > div.wrap.resume-search > div.result-list > table > tfoot > tr > td.text-right > div > span.addition");
       if(additionElement!=null&&additionElement.hasText()){
          String innerText= additionElement.text();
           String beginText="共";
           String endText="页跳转到页GO";
           if(innerText.startsWith(beginText)&&innerText.endsWith(endText)){
              String resultTxt=  innerText.substring(beginText.length(),innerText.length()-endText.length());
               try{
                 return    Integer.parseInt(resultTxt);
               }catch (Exception e){
                   e.printStackTrace();
                   return 0;
               }
           }
       }
        return 0;
    }
    public static Map<String,String> genNextPagePostData(Map<String,String> curPagePostData){
            return  Maps.transformEntries(curPagePostData, new Maps.EntryTransformer<String, String, String>() {
                public String transformEntry(String key, String value) {
                    if("curPage".equals(key)){
                        if(value==null||value.length()==0)
                            return "0";
                        return String.valueOf(Integer.parseInt(value)+1);
                    }
                    return value;
                }
            });

    }
}

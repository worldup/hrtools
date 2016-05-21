package com.hr.tools.core.spider;

import com.google.common.base.Splitter;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by administrator on 16/5/19.
 */
public class SplitterUtils {
    public static void main(String[] args) {
        String  referUrl="https://h.liepin.com/resume/showresumedetail/?res_id_encode=4772273650y2680387946&hitkey=true&index=1&cur_page=0&pageSize=30&ck=2016052009332626874105&keys=E4BAA7E59381E8A784E588927CE4BAA7E593817CE8A784E588927CE4BAA7E59381E8AEA1E588927CE8AEA1E588927CE4BAA7E59381E7AEA1E790867CE7AEA1E790867CE8AEBEE8AEA17C64657369676E7CE5889BE696B07C";
        SplitterUtils.getUrlParams(referUrl);
    }
    public  static Map<String,String> trim(String str,String rowSplit,String colSplit){
        Map<String,String> results=new HashMap<String, String>();
       Iterable<String> iterable= Splitter.on(rowSplit).split(str);
        for(String row:iterable){
             String [] cols=row.split(colSplit,2);
             if(cols!=null && cols.length==2){
                 String key=cols[0].trim();
                 String val=cols[1].trim();
                 if(val.length()>0){
                     results.put(key,val);
                 }

             }
        }
        return results;
    }
    public static String join(Map<String,String> map,String rowSplit,String colSplit){
        StringBuilder stringBuilder=new StringBuilder();
        for(Map.Entry<String,String> entry:map.entrySet()){
            String k=entry.getKey();
            String v=entry.getValue();
            stringBuilder.append(k+colSplit+v).append(rowSplit);
        }
        return stringBuilder.toString();
    }
    public static Map<String,String> getUrlParams(String url){
        String[] parts= url.split("\\?",2);
        if(parts!=null&&parts.length==2){
           return  Splitter.on("&").trimResults().withKeyValueSeparator("=").split(parts[1]);
        }
        return new HashMap<String, String>();
    }
}

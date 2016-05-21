package com.hr.tools.core.spider.liepin;

import com.hr.tools.core.spider.SplitterUtils;

import java.util.Date;
import java.util.Map;
import java.util.Set;


/**
 * Created by administrator on 16/5/19.
 */
public class RequestBuilder {
    public static final String SESSION_SEQ = "__session_seq";
    public static final String UV_SEQ = "__uv_seq";
    public static final String COOKIE = "Cookie";
    public static final String HM_LPVT="Hm_lpvt";

    public static Map<String, String> buildHeader(String headers) {
        return SplitterUtils.trim(headers, "\n", ":");

    }
    public static Map<String,String> buildCookieFromHead(String headers){
        Map<String, String> headMaps= buildHeader(headers);
        String cookie = headMaps.get(COOKIE);
        return buildCookie(cookie);
    }
    public static Map<String, String> buildPostData(String datas) {
        return SplitterUtils.trim(datas, "\n", ":");
    }

    public static Map<String, String> buildCookie(String cookie) {
        return SplitterUtils.trim(cookie, ";", "=");
    }
    public static Map<String, String> reBuildHeader(Map<String,String> originHeaders, Map<String, String> cookies){
        String originCookie = originHeaders.get(COOKIE);
        Map<String, String> originCookieMap = buildCookie(originCookie);
        String _sseq = originCookieMap.get(SESSION_SEQ);
        if (_sseq != null) {
            try {
                originCookieMap.put(SESSION_SEQ, String.valueOf(Integer.parseInt(_sseq) + 1));
            } catch (Exception e) {

            }

        }
        String _useq = originCookieMap.get(UV_SEQ);
        if (_useq != null) {
            try {
                originCookieMap.put(UV_SEQ, String.valueOf(Integer.parseInt(_useq) + 1));
            } catch (Exception e) {

            }

        }
        Set<String> keys=originCookieMap.keySet();
        for(String key:keys){
            if(key.startsWith(HM_LPVT)){
                String str=String.valueOf(new Date().getTime()) ;
                String value=   str.substring(0,str.length()-3);
                originCookieMap.put(key,value);
            }
        }
        originCookieMap.putAll(cookies);
        originHeaders.put(COOKIE, SplitterUtils.join(originCookieMap, ";", "="));
        return originHeaders;
    }
    public static Map<String, String> reBuildHeader(String headers, Map<String, String> cookies) {
        Map<String, String> originHeaders = buildHeader(headers);
        return reBuildHeader(originHeaders,cookies);
    }

    public static void main(String[] args) {

    }

}

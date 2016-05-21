package com.hr.tools.core.spider.linkedin;

import com.google.common.base.Splitter;
import com.google.common.collect.Maps;
import org.jsoup.Connection;

import java.util.List;
import java.util.Map;

/**
 * Created by li_li on 2016/5/10.
 */
public class CookiesUtil {
    public static Map<String,String> parseCookie(String cookies){
        List<String> tempList=Splitter.on(";").splitToList(cookies);
        Map<String,String> result=Maps.newHashMap();
        for(String s:tempList){
           int idx= s.indexOf("=");
           String key= s.substring(0,idx);
           String value=  s.substring(idx+1);
            result.put(key,value);
        }
        return result;
    }
    public static  Map<String,String> makeFormData(String data){
        List<String> tempList=Splitter.on("\n").splitToList(data);
        Map<String,String> result=Maps.newHashMap();
        for(String s:tempList){
            int idx= s.indexOf(":");
            String key= s.substring(0,idx);
            String value=  s.substring(idx+1);
            result.put(key,value);
        }
        return result;

    }
    public static void wrapperConnection(Connection connection, Map<String,String> cookieMap){
        connection= connection.userAgent("Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36");
        connection.cookies(cookieMap);

    }
    public static void main(String[] args) {
        parseCookie("bcookie=\"v=2&cc88110a-8e87-4ac4-86b7-274efc516420\";VID=V_2016_03_17_23_371;visit=\"v=1&M\";bspNotice=1%7CMozilla%2F5.0%20(Windows%20NT%206.2%3B%20WOW64)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F27.0.1453.94%20Safari%2F537.36;li_at=AQEDARwizf4A57_lAAABVGERZt8AAAFUmMUPLEsAw3qEtx89DdTtnEhg7uEZkx_SonS1niF8c_eUCXEULVQspQwcbcYaCweFRvnSMjkJDewHDc7oB9UrxpIiVIaCkTrg7z2ezGTt1sl4ia3IZqHaGbPH;liap=true;JSESSIONID=\"ajax:5416721699545028287\";L1c=5fca4290;oz_props_fetch_size1_472043006=2;wutan=gOdlk3UvcFtUMT8/KmvguLPgwaknMPpuBeBgoDK1oh0=;L1e=14fdb04a;_ga=GA1.2.1349806950.1453371334;share_setting=PUBLIC;sdsc=1%3A1SZM1shxDNbLt36wZwCgPgvN58iw%3D;_leo_profile=\"\";_lipt=0_bD5pFOXP2pS9QzS0EZPiPfVBkV9YULPgw8j8XYpVT9NZzMMxxVW86MF-DhnPwkn2JLjii1KcgMoHZgtuplnR1VWHyYx5UxPOR_mOeACQ1MeANaV1V_SJe1_ltx8L5SzlM9hw9iXRakcJqa_k-JrSBolGyiTH3nhyLwX_Dt32XocFhbI9-C81BQgYhhHFZSHHP_xUkdT9zR_tjYCDllXV_sdItJMldGsZjLnJwNKCgNM;L1l=d2cfdf;lidc=\"b=SB06:g=2:u=14:i=1462845460:t=1462931131:s=AQGz48EQQDVjpRU2p1bmDWSOQdxWyuUn\";lang=\"v=2&lang=en-us&c=\"");
    }
}

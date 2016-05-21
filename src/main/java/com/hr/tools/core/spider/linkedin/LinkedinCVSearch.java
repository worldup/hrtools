package com.hr.tools.core.spider.linkedin;

import com.google.common.base.Charsets;
import com.google.common.io.Files;
import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;

import java.io.BufferedWriter;
import java.io.File;
import java.net.URLEncoder;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Created by li_li on 2016/5/10.
 */
public class LinkedinCVSearch {
    static final  String url="http://www.linkedin.com/vsearch/pj";
    static final String formData=
            "keywords:产品管理 \n" +
            "title:产品总监\n" +
            "openAdvancedForm:true\n" +
            "titleScope:CP\n" +
            "locationType:Y\n" +
            "f_G:cn:8909\n" +
            "f_I:6\n" +
            "rsid:4720430061462874276976\n" +
            "orig:ADVS\n" +
            "page_num:1\n" +
            "pt:people\n" +
            "rnd:1462845942896";
    static final String cookies="bcookie=\"v=2&cc88110a-8e87-4ac4-86b7-274efc516420\"; VID=V_2016_03_17_23_371; visit=\"v=1&M\"; bspNotice=1%7CMozilla%2F5.0%20(Windows%20NT%206.2%3B%20WOW64)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F27.0.1453.94%20Safari%2F537.36; li_at=AQEDARwizf4A57_lAAABVGERZt8AAAFUmMUPLEsAw3qEtx89DdTtnEhg7uEZkx_SonS1niF8c_eUCXEULVQspQwcbcYaCweFRvnSMjkJDewHDc7oB9UrxpIiVIaCkTrg7z2ezGTt1sl4ia3IZqHaGbPH; liap=true; JSESSIONID=\"ajax:5416721699545028287\"; L1c=5fca4290; oz_props_fetch_size1_472043006=2; wutan=gOdlk3UvcFtUMT8/KmvguLPgwaknMPpuBeBgoDK1oh0=; L1e=14fdb04a; _ga=GA1.2.1349806950.1453371334; share_setting=PUBLIC; sdsc=1%3A1SZM1shxDNbLt36wZwCgPgvN58iw%3D; _leo_profile=\"\"; _lipt=0_bD5pFOXP2pS9QzS0EZPiPfVBkV9YULPgw8j8XYpVT9NZzMMxxVW86MF-DhnPwkn2JLjii1KcgMoHZgtuplnR1VWHyYx5UxPOR_mOeACQ1MeANaV1V_SJe1_ltx8L5SzlM9hw9iXRakcJqa_k-JrSBolGyiTH3nhyLwX_Dt32XocFhbI9-C81BQgYhhHFZSHHP_xUkdT9zR_tjYCDllXV_sdItJMldGsZjLnJwNKCgNM; L1l=d2cfdf; lidc=\"b=SB06:g=2:u=14:i=1462845460:t=1462931131:s=AQGz48EQQDVjpRU2p1bmDWSOQdxWyuUn\"; lang=\"v=2&lang=en-us&c=\"";
    static final String     idx1="<script type=\"text/javascript\">(function(){var history=window.history,newUrlWithVanity;if(history&&history.replaceState){if(window.location.pathname.match(/^\\/profile\\/view/)){queryStr=(window.location.search||'').replace(/id=[^&]*[&]{0,1}/i,'');newUrlWithVanity=";
    static final String idx2="+queryStr+window.location.hash;history.replaceState({},'',newUrlWithVanity);}";
    public static String getContextUrl(String content){
         int i1=content.indexOf(idx1);
         int i2=content.indexOf(idx2);
        if(i1<0||i2<0){
            return "-1";
        }
        String unicode=content.substring(i1+idx1.length()+1,i2-1);
        return "/in/"+URLEncoder.encode(UnicodeToString(unicode.substring(4))) ;

          }
    public static String UnicodeToString(String str) {
        Pattern pattern = Pattern.compile("(\\\\u(\\p{XDigit}{4}))");
        Matcher matcher = pattern.matcher(str);
        char ch;
        while (matcher.find()) {
            ch = (char) Integer.parseInt(matcher.group(2), 16);
            str = str.replace(matcher.group(1), ch + "");
        }
        return str;
    }
    public static void main(String[] args) {
        Map<String,String> cookieMap=   CookiesUtil.parseCookie(cookies);
        Map<String,String> formDataMap=CookiesUtil.makeFormData(formData);
        Connection connection= Jsoup.connect(url);
        CookiesUtil.wrapperConnection(connection,cookieMap);
        try{
            Document document=  connection.header("Accept","text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8")
                      .header("Accept-Encoding","gzip, deflate, sdch")
                      .header("Accept-Language","zh-CN,zh;q=0.8,en-US;q=0.6,en;q=0.4")
                        .header("Cache-Control","max-age=0")
                    .header("Connection","keep-alive")
                    .header("Host","www.linkedin.com")
                    .header("User-Agent","Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36")
                    .header("Upgrade-Insecure-Requests","1").ignoreContentType(true).data(formDataMap).post();
           String resultJson=document.body().text();
            Gson gson=new Gson();
            JsonObject jsonObject= gson.fromJson(resultJson, JsonObject.class);
            JsonArray jsonArray=jsonObject.getAsJsonObject("content").getAsJsonObject("page").getAsJsonObject("voltron_unified_search_json").getAsJsonObject("search").getAsJsonArray("results");
            if(jsonArray!=null){

                for(JsonElement element:jsonArray){

                    JsonObject person= element.getAsJsonObject().getAsJsonObject("person");
                    JsonElement pE= person.get("link_nprofile_view_headless");
                    if(pE==null){
                        pE=person.get("link_nprofile_view_4");
                    }
                     String profileUrl= pE.getAsString();

                    Document doc= connection.url(profileUrl).get();
                    String contextUrl=getContextUrl(doc.toString());
                    if(!"-1".equals(contextUrl)){
                        String  profileNewUrl="http://www.linkedin.com"+contextUrl+"/?" +profileUrl.substring(profileUrl.indexOf("&authType")+1);
                        System.out.println(profileNewUrl);
                        doc= connection.url(profileNewUrl).get();
                    }
                   JsonElement fmtName=person.get("fmt_name");
                    String personName=System.currentTimeMillis()+"";
                    if(fmtName !=null){
                        personName=fmtName.getAsString();
                    }
                    File file=new File("linked"+personName+".html");
                    BufferedWriter bw= Files.newWriter(file, Charsets.UTF_8);
                    bw.write(doc.toString());
                    bw.close();
                    Thread.sleep(10000);
                }
            }

        }catch (Exception e){
            e.printStackTrace();
        }

    }
}

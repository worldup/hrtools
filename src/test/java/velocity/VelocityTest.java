package velocity;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.hr.tools.core.spider.*;
import com.hr.tools.core.spider.liepin.RequestBuilder;
import org.apache.commons.collections.MapUtils;
import org.apache.commons.lang.time.FastDateFormat;
import org.apache.velocity.Template;
import org.apache.velocity.VelocityContext;
import org.apache.velocity.app.Velocity;
import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;

import java.io.StringWriter;
import java.util.*;

/**
 * Created by administrator on 16/6/7.
 */
public class VelocityTest {
    public static final String pageHead = "Host: www.linkedin.com\n" +
            "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:46.0) Gecko/20100101 Firefox/46.0\n" +
            "Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8\n" +
            "Accept-Language: zh-CN,zh;q=0.8,en-US;q=0.5,en;q=0.3\n" +
            "Accept-Encoding: gzip, deflate\n" +
            "X-Requested-With: XMLHttpRequest\n" +
            "X-LinkedIn-traceDataContext: X-LI-ORIGIN-UUID=762xxGdrVRRQyUlbTysAAA==\n" +
            "X-IsAJAXForm: 1\n" +
            "Referer: http://www.linkedin.com\n" +
            "Cookie: lang=\"v=2&lang=en-us\"; JSESSIONID=\"ajax:2488950343934369266\"; bcookie=\"v=2&01b086e0-62a7-4238-8bbc-5ee3c4fef156\"; lidc=\"b=SB06:g=2:u=14:i=1465195546:t=1465281520:s=AQFFarDDgSN_ylO6Uqs6Q-ydozI4ozR5\"; visit=\"v=1&M\"; liap=true; li_at=AQEDARwizf4ATgOHAAABVSRvRekAAAFVJN0i6UsAIIItNq_uX6YwnTRtko97u_4RLAIJoFwKvp9u3Zp7ZT49ElqUDK9MYhlRH9aAAfIL49XwXrKubsycWJKQLmXznyREmZlOsuBFvRggxpYCTc6jMO71; oz_props_fetch_size1_472043006=3; wutan=5FFQIcxDR9fwtQd6TrDSnHmGMCFH0NKt/lB2vJUIFxI=; share_setting=PUBLIC; sdsc=1%3A1SZM1shxDNbLt36wZwCgPgvN58iw%3D; _lipt=0_2Zh6nDW7V7BoWYZzgTfPWr-k8zlzcAEmCgOXdGYfA6OzoJn5MqY3VlQToFImBZYBmIHCeZkyUCoI4bvr1u7LBPXy7nzb3KgL76X0vUYgaV56lzfTKM0xaoaTOkBtvPttntrpeO3PyKWNsBOfPocl_olGyiTH3nhyLwX_Dt32XocFhbI9-C81BQgYhhHFZSHHP_xUkdT9zR_tjYCDllXV_sdItJMldGsZjLnJwNKCgNM; _ga=GA1.2.1119067205.1465195287; _cb_ls=1; _chartbeat2=wn9fTBlJpcYCgFDp.1465195286976.1465195286987.1; _chartbeat4=t=DeWd7tCfVtcgCM26gAC5yq6kB226-9&E=2&x=0&c=0.04&y=21738&w=548\n" +
            "Connection: keep-alive";
    static final String detailHead = "Host: www.linkedin.com\n" +
            "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:46.0) Gecko/20100101 Firefox/46.0\n" +
            "Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8\n" +
            "Accept-Language: zh-CN,zh;q=0.8,en-US;q=0.5,en;q=0.3\n" +
            "Accept-Encoding: gzip, deflate, br\n" +
            "Connection: keep-alive";
    static Map<String, String> detailHeadMap = RequestBuilder.buildHeader(detailHead);
    static Map<String, String> pageHeadMap = RequestBuilder.buildHeader(pageHead);
    public static void searchDetail(JsonArray jsonArray,String preFileName,long minSleepSecond,long maxSleepSecond){

        if (jsonArray != null) {

            for (JsonElement element : jsonArray) {
                try{
                    JsonObject person = element.getAsJsonObject().getAsJsonObject("person");
                    JsonElement pE = person.get("link_nprofile_view_headless");
                    if (pE == null) {
                        pE = person.get("link_nprofile_view_4");
                    }
                    String profileUrl = pE.getAsString();
                    Connection connection = Jsoup.connect(profileUrl);


                    for (Map.Entry<String, String> entry : detailHeadMap.entrySet()) {
                        if (!"Cookie".equals(entry.getKey())) {
                            connection.header(entry.getKey(), entry.getValue());
                        }
                    }
                    connection.header("Cookie", pageHeadMap.get("Cookie"));
                    Document document = connection.get();
                    FileUtils.saveAsFile(preFileName+"_person_"+person.get("fmt_name")+".html",document.toString());
                    Thread.sleep(Utils.genRandomSleep(minSleepSecond,maxSleepSecond));
                }catch (Exception e){
                    e.printStackTrace();
                }
            }

        }
    }
    public static JsonArray searchPage(String searchPageUrl) throws Exception {


        RequestResult requestResult = RequestUtils.execute(searchPageUrl, null, "GET", pageHeadMap, null, true);
        Connection.Response response = requestResult.getResponse();

        String resultJson = response.parse().body().text();
        Gson gson = new Gson();
        JsonObject jsonObject = gson.fromJson(resultJson, JsonObject.class);
        JsonArray jsonArray = jsonObject.getAsJsonObject("content").getAsJsonObject("page").getAsJsonObject("voltron_unified_search_json").getAsJsonObject("search").getAsJsonArray("results");
        return jsonArray;
    }

    public static void main(String[] args) throws Exception {
        long minSleepSecond=10000;
        long maxSleepSecond=20000;
        Properties p = new Properties();
        p.put("file.resource.loader.class", "org.apache.velocity.runtime.resource.loader.ClasspathResourceLoader");
        Velocity.init(p);
        VelocityContext context = new VelocityContext();
        String searchPageUrl = "http://www.linkedin.com/vsearch/pj?type=people&keywords=产品总监&orig=FCTD&rsid=4720430061465210394796&pageKey=voltron_people_search_internal_jsp&search=Search&openFacets=N,G,CC&f_G=cn:0&rnd=1465210440506";
        Map<String, String> map = new HashMap<String, String>();
        Map<String,String> params=SplitterUtils.getUrlParams(searchPageUrl);
        String keywords= MapUtils.getString(params,"keywords","未指定关键字");
        String  dateFormatStr=FastDateFormat.getInstance("yyyyMMddHHmm").format(new Date());
        for (int i = 1; i < 20; i++) {
            try {
                map.put("page_num", "" + i);
                searchPageUrl = SplitterUtils.replaceUrl(searchPageUrl, map);
                JsonArray jsonArray = searchPage(searchPageUrl);
                context.put("resumes", jsonArray);
                Template template = Velocity.getTemplate("ResumeList.vm", "UTF-8");
                StringWriter stringWriter = new StringWriter();
                template.merge(context, stringWriter);
                String preFileName=dateFormatStr+keywords+"_page"+i;
                FileUtils.saveAsFile(preFileName+".html",stringWriter.toString());
                Thread.sleep(Utils.genRandomSleep(minSleepSecond,maxSleepSecond));
                searchDetail(jsonArray,preFileName,minSleepSecond,maxSleepSecond);
            }catch (Exception e){
                e.printStackTrace();
            }

        }

    }
}

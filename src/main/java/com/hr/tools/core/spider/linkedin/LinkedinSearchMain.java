package com.hr.tools.core.spider.linkedin;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.hr.tools.core.spider.*;
import com.hr.tools.core.spider.liepin.ApplicationMetrics;
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
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.*;
import java.util.concurrent.atomic.AtomicInteger;

/**
 * Created by administrator on 16/6/7.
 */
public class LinkedinSearchMain extends Observable implements   Runnable {

    //设置执行标识,便于在界面启动和停止
    public  RunStatus runStatus = RunStatus.init;
    public AtomicInteger totalPageCount=new AtomicInteger(0);
    public AtomicInteger finishedPageCount=new AtomicInteger(0);
    public AtomicInteger totalResumeCount=new AtomicInteger(0);
    public AtomicInteger finishedResumeCount=new AtomicInteger(0);
    public AtomicInteger errorResumeCount=new AtomicInteger(0);
    private long minSleepSecond;
    private long maxSleepSecond;
    private String pageHead;
    private String searchPageUrl;



    private int resultCount;
     private Log log;
    static final String  fixedPageHead="Host: www.linkedin.com\n" +
            "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:46.0) Gecko/20100101 Firefox/46.0\n" +
            "Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8\n" +
            "Accept-Language: zh-CN,zh;q=0.8,en-US;q=0.5,en;q=0.3\n" +
            "Accept-Encoding: gzip, deflate, br\n" +
            "X-Requested-With: XMLHttpRequest\n" +
            "X-LinkedIn-traceDataContext: X-LI-ORIGIN-UUID=ovmxm0JBVxQwu0ROTisAAA==\n" +
            "X-IsAJAXForm: 1\n" +
            "Referer: https://www.linkedin.com\n" +
            "Connection: keep-alive";
    static final String detailHead = "Host: www.linkedin.com\n" +
            "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:46.0) Gecko/20100101 Firefox/46.0\n" +
            "Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8\n" +
            "Accept-Language: zh-CN,zh;q=0.8,en-US;q=0.5,en;q=0.3\n" +
            "Accept-Encoding: gzip, deflate, br\n" +
            "Connection: keep-alive";
    static Map<String, String> detailHeadMap = RequestBuilder.buildHeader(detailHead);
    static Map<String, String> fixedPageHeadMap = RequestBuilder.buildHeader(fixedPageHead);

    public   void searchDetail(int pageNum,JsonArray jsonArray,String preFileName,long minSleepSecond,long maxSleepSecond,String headCookie){

        if (jsonArray != null) {
            int j=0;
            for (JsonElement element : jsonArray) {
                j++;
                log.info("开始执行第"+pageNum+"页,第"+j+"条");
                try{
                    JsonObject person = element.getAsJsonObject().getAsJsonObject("person");
                    if(person==null){
                        this.setChanged();
                        errorResumeCount.addAndGet(1);
                        log.info("工具执行出错,获取候选人信息失败");
                        continue;
                    }
                    JsonElement pE = person.get("link_nprofile_view_headless");
                    if (pE == null) {
                        pE = person.get("link_nprofile_view_4");
                    }
                    if(pE==null){
                        this.setChanged();
                        errorResumeCount.addAndGet(1);
                        log.info("工具执行出错,获取候选人信息失败");
                        continue;
                    }
                    String profileUrl = pE.getAsString();
                    Connection connection = Jsoup.connect(profileUrl);


                    for (Map.Entry<String, String> entry : detailHeadMap.entrySet()) {
                        if (!"Cookie".equals(entry.getKey())) {
                            connection.header(entry.getKey(), entry.getValue());
                        }
                    }
                    connection.header("Cookie", headCookie);
                    Document document = connection.get();

                    String fileName=preFileName+"_person_"+person.get("fmt_name").hashCode()+".html";
                    log.info("开始生成文件"+fileName);
                    String fname=FileUtils.pureSaveFile(fileName,document.toString());
                   // FileUtils.saveAsFile(preFileName+"_person_"+person.get("fmt_name")+".html",document.toString());
                    long stime=Utils.genRandomSleep(minSleepSecond,maxSleepSecond);
                    log.info("文件生成完毕,休息"+stime+"毫秒,文件绝对路径"+fname);
                    Thread.sleep(stime);
                }catch (Exception e){
                    errorResumeCount.addAndGet(1);
                    e.printStackTrace();
                   log.info(e.getMessage());
                }
                finishedResumeCount.addAndGet(1);
                notifyMetricsChange();
            }

        }
    }
    public static JsonArray searchPage(String searchPageUrl,Map<String,String> pageHeadMap) throws Exception {


        RequestResult requestResult = RequestUtils.execute(searchPageUrl, null, "GET", pageHeadMap, null, true);
        Connection.Response response = requestResult.getResponse();

        String resultJson = response.parse().body().text();
        Gson gson = new Gson();
        JsonObject jsonObject = gson.fromJson(resultJson, JsonObject.class);
        JsonArray jsonArray = jsonObject.getAsJsonObject("content").getAsJsonObject("page").getAsJsonObject("voltron_unified_search_json").getAsJsonObject("search").getAsJsonArray("results");
        return jsonArray;
    }
    public LinkedinSearchMain(Log log,long minSleepSecond,long maxSleepSecond,String pageHead,String searchPageUrl,int resultCount){
        this.minSleepSecond=minSleepSecond;
        this.maxSleepSecond=maxSleepSecond;
        this.pageHead=pageHead;
        this.searchPageUrl=searchPageUrl;
        this.resultCount=resultCount;
        this.log=log;
    }
    public   void go(){
        Properties p = new Properties();
        Map<String,String> headMap=RequestBuilder.buildHeader(pageHead);
        String headCookie=headMap.get("Cookie")==null?headMap.get("cookie"):headMap.get("Cookie");
        fixedPageHeadMap.put("Cookie",headCookie);
        Map<String, String> pageHeadMap = fixedPageHeadMap;
        p.put("file.resource.loader.class", "org.apache.velocity.runtime.resource.loader.ClasspathResourceLoader");
        Velocity.init(p);
        VelocityContext context = new VelocityContext();
          Map<String, String> map = new HashMap<String, String>();
        Map<String,String> params=SplitterUtils.getUrlParams(searchPageUrl);
        String keywords= MapUtils.getString(params,"keywords","未指定关键字");
        try {
            keywords= URLDecoder.decode(keywords,"UTF-8");
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
        totalResumeCount.set(resultCount*10);
        String  dateFormatStr=FastDateFormat.getInstance("yyyyMMddHHmm").format(new Date());
        log.info("任务开始执行");
        for (int i = 1; i <= resultCount; i++) {
            try {
                log.info("开始执行第"+i+"页");
                map.put("page_num", "" + i);
                searchPageUrl = SplitterUtils.replaceUrl(searchPageUrl, map);
                JsonArray jsonArray = searchPage(searchPageUrl,pageHeadMap);
                context.put("resumes", jsonArray);
                Template template = Velocity.getTemplate("ResumeList.vm", "UTF-8");
                StringWriter stringWriter = new StringWriter();
                template.merge(context, stringWriter);
                String preFileName=dateFormatStr+keywords+"_page"+i;
                FileUtils.saveAsFile(preFileName+".html",stringWriter.toString());
                Thread.sleep(Utils.genRandomSleep(minSleepSecond,maxSleepSecond));
                searchDetail(i,jsonArray,preFileName,minSleepSecond,maxSleepSecond,headCookie);
                log.info("第"+i+"页执行完毕");
            }catch (Exception e){
                log.info("工具执行出错,查询达到限制->"+e.getMessage());
                e.printStackTrace();
            }
            finishedPageCount.addAndGet(1);

            notifyMetricsChange();
        }
        runStatus = RunStatus.finished;
        notifyMetricsChange();
    }
    public void notifyMetricsChange(){
        ApplicationMetrics applicationMetrics=new ApplicationMetrics();
        applicationMetrics.setFinishedPageCount(finishedPageCount);
        applicationMetrics.setFinishedResumeCount(finishedResumeCount);
        applicationMetrics.setRunStatus(runStatus);
        applicationMetrics.setTotalPageCount(totalPageCount);
        applicationMetrics.setTotalResumeCount(totalResumeCount);
        applicationMetrics.setErrorResumeCount(errorResumeCount);
        this.setChanged();
        this.notifyObservers(applicationMetrics);
    }
    public static void main(String[] args) throws Exception {
        long minSleepSecond=10000;
        long maxSleepSecond=20000;
        final String pageHead = "Host: www.linkedin.com\n" +
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
        String searchPageUrl = "http://www.linkedin.com/vsearch/pj?type=people&keywords=产品总监&orig=FCTD&rsid=4720430061465210394796&pageKey=voltron_people_search_internal_jsp&search=Search&openFacets=N,G,CC&f_G=cn:0&rnd=1465210440506";
        int pageCount=10;
        Log log=new Log();
        LinkedinSearchMain main=new LinkedinSearchMain(log,minSleepSecond, maxSleepSecond, pageHead, searchPageUrl, pageCount);
         main.go();
    }

    public void run() {
        go();
    }
}

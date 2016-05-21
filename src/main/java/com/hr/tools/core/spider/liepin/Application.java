package com.hr.tools.core.spider.liepin;

import com.google.common.collect.Maps;
import com.hr.tools.core.spider.*;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import static com.hr.tools.core.spider.liepin.RequestBuilder.*;

/**
 * Created by administrator on 16/5/20.
 */
public class Application implements   Runnable{
    //设置执行标识,便于在界面启动和停止
    public static RunStatus runStatus = RunStatus.init;
    private String catalog;
    private String heads;
    private String postDatas;
    private long sleepSecond;
    public Application(String catalog, long sleepSecond, String heads, String postDatas){
        this.catalog=catalog;
        this.sleepSecond=sleepSecond;
        this.heads=heads;
        this.postDatas=postDatas;
    }
    public   void go( ) {
        runStatus = RunStatus.started;
        //把head 和post转换成Map
        Map<String, String> headersMap = buildHeader(heads);
        Map<String, String> dataMap = buildPostData(postDatas);
        //获取用户userId
        Map<String, String> originalCookieMap = buildCookie(headersMap.get(COOKIE));
        String user_id = originalCookieMap.get("user_id");
        //保存文件名称
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyyMMddHHmmss");
        String fileSearchName = String.format("%s_%s", catalog, simpleDateFormat.format(new Date()));
        //执行查询,获取结果列表,首先获取有多少条数据
        RequestResult requestResult = RequestUtils.execute(Constants.SEARCH_URL, null, Constants.POST_METHOD, headersMap, dataMap);

        try {
            //解析有多少页结果
            Document document = requestResult.getResponse().parse();
            int pageCount = SearchResultPageParser.parseCount(document);
            //进行翻页操作
            for (int i = 0; i < pageCount; i++) {
                //获取模拟点击页的post参数
                dataMap = SearchResultPageParser.genNextPagePostData(dataMap);
                //进行查询requestResult.getHeaderMap(),headMap每次更新
                requestResult = RequestUtils.execute(Constants.SEARCH_URL, Constants.SEARCH_URL, "POST", requestResult.getHeaderMap(), dataMap);
                //得到查询结果Document
                Document searchResultPageIDocument = requestResult.getResponse().parse();
                //保存查询结果第i页到文件
                FileUtils.saveAsFile(fileSearchName + "_page" + (i + 1) + ".html", searchResultPageIDocument);
                //查询当前页所有的简历信息,遍历简历
                Elements elements = searchResultPageIDocument.select("a[data-selector=\"link-resume\"]");
                if (elements != null && elements.size() > 0) {
                    for (Element element : elements) {
                        try {
                            Thread.sleep(sleepSecond);
                            // String dataId = element.attr("data-id");
                            //获取简历链接
                            String href = element.attr("href");
                            String detailUrl = Constants.LIEPIN_HOST + href;
                            //记录返回cookie
                            requestResult = RequestUtils.execute(detailUrl, Constants.SEARCH_URL, Constants.GET_METHOD, requestResult.getHeaderMap(), null);
                            Document resumeDetailIPageDocument = requestResult.getResponse().parse();
                            //构造简历查询ajax参数
                            Map<String, String> datas = new HashMap();
                            Map<String, String> paramMap = SplitterUtils.getUrlParams(detailUrl);
                            String resId = MapUtils.getValue(paramMap, "res_id_encode", "");
                            String keys = MapUtils.getValue(paramMap, "keys", "");
                            datas.put("res_id_encode", resId);
                            datas.put("user_id", user_id);
                            datas.put("keys", keys);
                            datas.put("sign", Encry.encrypt(user_id, resId, "jsencrypt", "h.liepin.com", "liepin.com"));
                            //增加签名，根据简历编号进行md5加密
                            String signs = "?signs=" + Encry.md5(resId);
                            String jsencrypt = Encry.genJsencrypt(user_id);
                            Map<String, String> tempMap = Maps.newHashMap();
                            tempMap.put("jsencrypt", jsencrypt);
                            requestResult = RequestUtils.execute(Constants.WORK_EXPERIENCE_URL + signs, detailUrl, Constants.POST_METHOD, RequestBuilder.reBuildHeader(requestResult.getHeaderMap(), tempMap), datas);
                            Document workExpDetailDocument = requestResult.getResponse().parse();
                            String res_id = resumeDetailIPageDocument.select("span[data-nick='res_id']").first().text();
                            String detailFileName = fileSearchName + "_page" + (i + 1) + "_res_" + res_id + ".html";
                            FileUtils.mergeAsFile(detailFileName, resumeDetailIPageDocument, workExpDetailDocument, Constants.ANCHOR_TAG);
                        } catch (Exception e) {
                            e.printStackTrace();
                        }

                    }
                }
            }

        } catch (Exception e) {
            e.printStackTrace();

        }
        runStatus = RunStatus.finished;


    }

    public void run() {
        while(Application.runStatus!=RunStatus.finished){
            go();
        }
    }
}

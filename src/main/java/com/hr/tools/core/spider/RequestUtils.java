package com.hr.tools.core.spider;

import org.jsoup.Connection;
import org.jsoup.Jsoup;

import java.util.Map;

import static com.hr.tools.core.spider.liepin.RequestBuilder.*;

/**
 * Created by administrator on 16/5/20.
 */
public class RequestUtils {
    public static RequestResult execute(String url, String referUrl, String method, Map<String, String> headersMap, Map<String,String> postDataMaps){
        //建立连接
        Connection connection = Jsoup.connect(url).method(Connection.Method.valueOf(method));
        if(referUrl!=null&&referUrl.length()>0){
            connection.referrer(referUrl);
        }
        for (Map.Entry<String, String> entry : headersMap.entrySet()) {
            connection.header(entry.getKey(), entry.getValue());
        }
        //构建请求数据

        if(postDataMaps!=null&&!postDataMaps.isEmpty()){
            connection.data(postDataMaps);
        }
        try {
            //进行请求
            Connection.Response response = connection.execute();
            Map<String, String> repCookies = response.cookies();
            Map<String,String> reBuildHeaderMap = reBuildHeader(headersMap, repCookies);
            MapUtils.mapCompare(headersMap, buildCookie(reBuildHeaderMap.get(COOKIE)));
            return new RequestResult(reBuildHeaderMap,response);
        }catch (Exception e){
            e.printStackTrace();
        }
        return  null;
    }
}

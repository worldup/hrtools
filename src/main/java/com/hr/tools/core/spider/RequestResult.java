package com.hr.tools.core.spider;

import org.jsoup.Connection;

import java.util.Map;

/**
 * Created by administrator on 16/5/20.
 */
public class RequestResult {
    private Map<String,String> headerMap;
    private Connection.Response response;

    public RequestResult(Map<String, String> headerMap, Connection.Response response) {
        this.headerMap = headerMap;
        this.response = response;
    }

    public Map<String, String> getHeaderMap() {
        return headerMap;
    }

    public void setHeaderMap(Map<String, String> headerMap) {
        this.headerMap = headerMap;
    }

    public Connection.Response getResponse() {
        return response;
    }

    public void setResponse(Connection.Response response) {
        this.response = response;
    }
}

package com.hr.tools.gui;



import java.util.Map;

import static com.hr.tools.core.spider.liepin.RequestBuilder.buildCookieFromHead;

/**
 * Created by administrator on 16/5/21.
 */
public class GuiHelper {
    public static Map<String, String> parseCookie(String header) throws Exception {
        return buildCookieFromHead(header);
    }
}


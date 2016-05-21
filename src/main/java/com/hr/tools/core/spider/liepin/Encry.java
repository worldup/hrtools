package com.hr.tools.core.spider.liepin;


import java.security.MessageDigest;
import java.util.Arrays;

/**
 * Created by administrator on 16/5/20.
 */
public class Encry {
    public static void main(String[] args) {
        System.out.println(encrypt("26874105", "4772273650y2680387946", "jsencrypt", "h.liepin.com", "liepin.com"));
    }
    public static String genJsencrypt(String user_id){
        String userid = (user_id == null ? "0" : user_id);
        char[] key1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".toCharArray();
        int len1 = key1.length;
        char[] key2 = userid.toCharArray();
        int key3 = Integer.parseInt(userid);
        StringBuilder sb = new StringBuilder();
        sb.append(Arrays.copyOfRange(key1, key3 % len1, key1.length)).append(new StringBuffer(new String(Arrays.copyOfRange(key1, 0, key3 % len1))).reverse());
        char[] key4 = sb.toString().toCharArray();
        StringBuilder result = new StringBuilder();
        for (int i = 0; i < key2.length; i++) {
            char[] tm = new char[1];
            tm[0] = key2[i];
            result.append(key4[(i * i + Integer.parseInt(new String(tm))) % key4.length]);

        }
        return result.toString();
    }
    public static String encrypt(String user_id, String source, String cookiename, String locationHostName, String envDomain) {

        String userid = (user_id == null ? "0" : user_id);
        char[] key1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".toCharArray();
        int len1 = key1.length;
        char[] key2 = userid.toCharArray();
        int key3 = Integer.parseInt(userid);
        StringBuilder sb = new StringBuilder();
        sb.append(Arrays.copyOfRange(key1, key3 % len1, key1.length)).append(new StringBuffer(new String(Arrays.copyOfRange(key1, 0, key3 % len1))).reverse());
        char[] key4 = sb.toString().toCharArray();
        StringBuilder result = new StringBuilder();
        for (int i = 0; i < key2.length; i++) {
            char[] tm = new char[1];
            tm[0] = key2[i];
            result.append(key4[(i * i + Integer.parseInt(new String(tm))) % key4.length]);

        }
        //set =cookie
        if(cookiename!=null){

            System.out.printf("请设置cookie->%s的值,value->%s\n",cookiename,result.toString());
        }
        key4 = new StringBuffer(new String(key4)).reverse().toString().toCharArray();
        char[] resultArray = result.toString().toCharArray();
        Arrays.sort(resultArray);
        result = new StringBuilder();
        result.append(resultArray);
        for (int i = 0; i < key2.length; i++) {
            char[] tm = new char[1];
            tm[0] = key2[i];
            result.append(key4[i * i + Integer.parseInt(new String(tm)) % key4.length]);
        }
        //判断location 和evnDomain 是否一致 ,是否为猎聘
        String [] locationArrs=locationHostName.split("\\.");
        int locationArrLen=locationArrs.length;
        String locationDomain=locationArrs[locationArrLen-2]+"."+locationArrs[locationArrLen-1];
        return locationDomain.equals(envDomain) ?
                new StringBuilder(md5(result.toString() + source + userid)).reverse().toString() :
                new StringBuilder(md5(userid + result.toString() + source)).reverse().toString();
    }

    public static String md5(String plainText) {
        try {
            MessageDigest md = MessageDigest.getInstance("MD5");
            md.update(plainText.getBytes());
            byte b[] = md.digest();

            int i;

            StringBuffer buf = new StringBuffer("");
            for (int offset = 0; offset < b.length; offset++) {
                i = b[offset];
                if (i < 0) i += 256;
                if (i < 16)
                    buf.append("0");
                buf.append(Integer.toHexString(i));
            }
            return buf.toString();

        } catch (Exception e) {

        }
        return "";
    }
}

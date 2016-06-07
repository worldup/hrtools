package com.hr.tools.core.spider;

/**
 * Created by administrator on 16/6/7.
 */
public class Utils {
    public static  long genRandomSleep(long minSleepSecond,long maxSleepSecond){
        return Math.round(Math.random()*(maxSleepSecond-minSleepSecond)+minSleepSecond) ;
    }
}

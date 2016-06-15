package com.hr.tools.core.spider;

import java.util.Observable;
import java.util.concurrent.Semaphore;

/**
 * Created by administrator on 16/6/13.
 */
public class Log  extends Observable{
    private final   StringBuilder stringBuilder = new StringBuilder();
    final   Semaphore semp = new Semaphore(1);

    public   void info(String msg) {
        try {
            semp.acquire();
            if (stringBuilder.length() > 10000) {
                stringBuilder.delete(0, 8000);
            }
            stringBuilder.append("\n");
            stringBuilder.append(msg);
            this.setChanged();
            this.notifyObservers();
            semp.release();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

    }

    public   String info() {
        return stringBuilder.toString();
    }
}

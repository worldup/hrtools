package com.hr.tools.core.spider;

/**
 * Created by administrator on 16/5/21.
 */
public enum RunStatus {
    init(-1), started(0), running(1),suspend(2),finished(3);
    private int v;
    private RunStatus(int v){
        this.v=v;
    }
    public int getV(){
        return this.v;
    }
    public void setV(int v){
        this.v=v;
    }

}

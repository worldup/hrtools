package com.hr.tools.core.spider.liepin;

import com.hr.tools.core.spider.RunStatus;

import java.util.concurrent.atomic.AtomicInteger;

/**
 * Created by administrator on 16/5/22.
 */
public class ApplicationMetrics {
     RunStatus runStatus = RunStatus.init;
      AtomicInteger totalPageCount=new AtomicInteger(0);
      AtomicInteger finishedPageCount=new AtomicInteger(0);
      AtomicInteger totalResumeCount=new AtomicInteger(0);
      AtomicInteger finishedResumeCount=new AtomicInteger(0);

    public RunStatus getRunStatus() {
        return runStatus;
    }

    public void setRunStatus(RunStatus runStatus) {
        this.runStatus = runStatus;
    }

    public AtomicInteger getTotalPageCount() {
        return totalPageCount;
    }

    public void setTotalPageCount(AtomicInteger totalPageCount) {
        this.totalPageCount = totalPageCount;
    }

    public AtomicInteger getFinishedPageCount() {
        return finishedPageCount;
    }

    public void setFinishedPageCount(AtomicInteger finishedPageCount) {
        this.finishedPageCount = finishedPageCount;
    }

    public AtomicInteger getTotalResumeCount() {
        return totalResumeCount;
    }

    public void setTotalResumeCount(AtomicInteger totalResumeCount) {
        this.totalResumeCount = totalResumeCount;
    }

    public AtomicInteger getFinishedResumeCount() {
        return finishedResumeCount;
    }

    public void setFinishedResumeCount(AtomicInteger finishedResumeCount) {
        this.finishedResumeCount = finishedResumeCount;
    }

    @Override
    public String toString() {
        return "ApplicationMetrics{" +
                "runStatus=" + runStatus +
                ", totalPageCount=" + totalPageCount +
                ", finishedPageCount=" + finishedPageCount +
                ", totalResumeCount=" + totalResumeCount +
                ", finishedResumeCount=" + finishedResumeCount +
                '}';
    }
}

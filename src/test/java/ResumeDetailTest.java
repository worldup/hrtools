import com.google.common.collect.Maps;
import com.hr.tools.core.spider.*;
import com.hr.tools.core.spider.liepin.*;
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
public class ResumeDetailTest {

    public static void main(String[] args) {
       /* String catalog="产品经理";
        long minSleepSecond=120000;//120秒
        long maxSleepSecond=240000;//120秒
        //头信息
        String heads=ResumeDetailMockData.heads;
        //post 参数
        String postDatas=ResumeDetailMockData.postDatas;
        Application application=new Application(catalog,minSleepSecond,maxSleepSecond,heads,postDatas);
        new Thread(application).start();*/
        for (int i = 0; i < 100; i++) {
            System.out.println(genRandomSleep(1000,2000));
        }

    }
    private static long genRandomSleep(long minSleepSecond,long maxSleepSecond){
        return Math.round(Math.random()*(maxSleepSecond-minSleepSecond)+minSleepSecond) ;
    }
}

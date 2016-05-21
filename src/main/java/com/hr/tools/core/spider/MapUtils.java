package com.hr.tools.core.spider;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * Created by administrator on 16/5/19.
 */
public class MapUtils {
    public static String getValue(Map<String,String> map,String key,String defaultValue){
        if(map!=null){
           String result= map.get(key);
            return result==null?defaultValue:result;
        }
        return defaultValue;
    }
    public static List<Change> mapCompare(Map<String,String> map1,Map<String,String> map2){
        List<Change> changes=new ArrayList<Change>();
        for(Map.Entry<String,String> entry:map1.entrySet()){
            String key=entry.getKey();
            String val=entry.getValue();
            if(map2.containsKey(key)){
                if(!map2.get(key).equals(val)){
                    changes.add(new Change("m",key,val,key,map2.get(key)));
                }
            }
            else{
                changes.add(new Change("d",key,val,"",""));
            }
        }
        for(Map.Entry<String,String> entry:map2.entrySet()){
            String key=entry.getKey();
            String val=entry.getValue();
            if(!map1.containsKey(key)){

                    changes.add(new Change("a","","",key,val));

            }

        }
        System.out.println(changes);
        return changes;
    }
   static class Change{
        String mod;
        String key;
        String value;
       String keyN;
       String valueN;

       @Override
       public String toString() {
           return "Change{" +
                   "mod='" + mod + '\'' +
                   ", key='" + key + '\'' +
                   ", value='" + value + '\'' +
                   ", keyN='" + keyN + '\'' +
                   ", valueN='" + valueN + '\'' +
                   '}';
       }

       public Change(String mod, String key, String value, String keyN, String valueN) {
           this.mod = mod;
           this.key = key;
           this.value = value;
           this.keyN = keyN;
           this.valueN = valueN;
       }
   }
}

<template lang="html">
  <div class="" style="background:#f0f0f0;min-height:100%;">
    <Lstitle :data="title"></Lstitle>
    <Shopinfo :data="shopinfo"></Shopinfo>
    <List :data="list"></List>
  </div>
</template>

<script>
import Lstitle from '../components/title.vue'
import Shopinfo from '../components/shopinfo.vue'
import List from '../components/listadvice.vue'
export default {
  data(){
    return{
       info:{
           0:{
             0:{
               shopinfo:{img:require('../assets/img/shop/1/1/1.jpg'),price:119,address:'出酒店左转直行500米到汉庭左转，直行40米即到',timeing:'10:00-02:00',tel:'0755-26920103',type:'火锅',mark:'干净卫生、朋友聚会、回头客多',store:false},
               list:[require('../assets/img/shop/1/1/1-1.jpg'),require('../assets/img/shop/1/1/1-2.jpg'),require('../assets/img/shop/1/1/1-3.jpg'),require('../assets/img/shop/1/1/1-4.jpg'),require('../assets/img/shop/1/1/1-5.jpg'),require('../assets/img/shop/1/1/1-6.jpg'),require('../assets/img/shop/1/1/1-7.jpg'),require('../assets/img/shop/1/1/1-8.jpg'),require('../assets/img/shop/1/1/1-9.jpg')]
             },
             1:{
               shopinfo:{img:require('../assets/img/shop/1/2/1.jpg'),price:102,address:'出酒店左转直行700米即到',timeing:'10:00-02:00',tel:'0755-26606675',type:'火锅',mark:'牛肉很赞、上菜快、菜品健康',store:false},
               list:[require('../assets/img/shop/1/2/1-1.jpg'),require('../assets/img/shop/1/2/1-2.jpg'),require('../assets/img/shop/1/2/1-3.jpg'),require('../assets/img/shop/1/2/1-4.jpg'),require('../assets/img/shop/1/2/1-5.jpg'),require('../assets/img/shop/1/2/1-6.jpg'),require('../assets/img/shop/1/2/1-7.jpg'),require('../assets/img/shop/1/2/1-8.jpg'),require('../assets/img/shop/1/2/1-9.jpg')]
             },
             2:{
               shopinfo:{img:require('../assets/img/shop/1/3/1.jpg'),price:95,address:'出酒店右转直行280米到红绿灯，继续直行190米即到',timeing:'17:00-02:00',tel:'0755-86538244',type:'火锅',mark:'味道赞、服务热情、深夜食堂',store:false},
               list:[require('../assets/img/shop/1/3/1-1.jpg'),require('../assets/img/shop/1/3/1-2.jpg'),require('../assets/img/shop/1/3/1-3.jpg'),require('../assets/img/shop/1/3/1-4.jpg'),require('../assets/img/shop/1/3/1-5.jpg'),require('../assets/img/shop/1/3/1-6.jpg'),require('../assets/img/shop/1/3/1-7.jpg'),require('../assets/img/shop/1/3/1-8.jpg'),require('../assets/img/shop/1/3/1-9.jpg')]
             },
             3:{
               shopinfo:{img:require('../assets/img/shop/1/4/1.jpg'),price:96,address:'出酒店右转直行280米到红绿灯左转，直行460米即到',timeing:'10:30-00:00',tel:'0755-22287366',type:'火锅',mark:'服务热情、价格实惠、味道不错',store:false},
               list:[require('../assets/img/shop/1/4/1-1.jpg'),require('../assets/img/shop/1/4/1-2.jpg'),require('../assets/img/shop/1/4/1-3.jpg'),require('../assets/img/shop/1/4/1-4.jpg'),require('../assets/img/shop/1/4/1-5.jpg'),require('../assets/img/shop/1/4/1-6.jpg'),require('../assets/img/shop/1/4/1-7.jpg'),require('../assets/img/shop/1/4/1-8.jpg'),require('../assets/img/shop/1/4/1-9.jpg')]
             },
             4:{
               shopinfo:{img:require('../assets/img/shop/1/5/1.jpg'),price:90,address:'出酒店左转直行280米即到',timeing:'09:00-03:00',tel:'0755-26642444',type:'粤菜',mark:'回头客、海鲜棒、有萌宠',store:false},
               list:[require('../assets/img/shop/1/5/1-1.jpg'),require('../assets/img/shop/1/5/1-2.jpg'),require('../assets/img/shop/1/5/1-3.jpg'),require('../assets/img/shop/1/5/1-4.jpg'),require('../assets/img/shop/1/5/1-5.jpg'),require('../assets/img/shop/1/5/1-6.jpg'),require('../assets/img/shop/1/5/1-7.jpg'),require('../assets/img/shop/1/5/1-8.jpg'),require('../assets/img/shop/1/5/1-9.jpg')]
             },
             5:{
               shopinfo:{img:require('../assets/img/shop/1/6/1.jpg'),price:67,address:'出酒店右转直行280米到红绿灯左转，直行360米即到',timeing:'11:00-03:00',tel:'0755-26394665',type:'烧烤',mark:'干净、撸串好地方',store:false},
               list:[require('../assets/img/shop/1/6/1-1.jpg'),require('../assets/img/shop/1/6/1-2.jpg'),require('../assets/img/shop/1/6/1-3.jpg'),require('../assets/img/shop/1/6/1-4.jpg'),require('../assets/img/shop/1/6/1-5.jpg'),require('../assets/img/shop/1/6/1-6.jpg'),require('../assets/img/shop/1/6/1-7.jpg'),require('../assets/img/shop/1/6/1-8.jpg')]
             }
           },
          1:{
            0:{
              shopinfo:{img:require('../assets/img/shop/2/1/1.jpg'),price:159,address:'出酒店右转直行280米到红绿灯后继续直行190米后，左转直行60米即到',timeing:'11:00-22:00',tel:'0755-26917030',type:'海鲜',mark:'味道鲜美、肉好、现做现卖',store:false},
              list:[require('../assets/img/shop/2/1/1-1.jpg'),require('../assets/img/shop/2/1/1-2.jpg'),require('../assets/img/shop/2/1/1-3.jpg'),require('../assets/img/shop/2/1/1-4.jpg'),require('../assets/img/shop/2/1/1-5.jpg'),require('../assets/img/shop/2/1/1-6.jpg'),require('../assets/img/shop/2/1/1-7.jpg'),require('../assets/img/shop/2/1/1-8.jpg'),require('../assets/img/shop/2/1/1-9.jpg')]
            },
            1:{
              shopinfo:{img:require('../assets/img/shop/2/2/1.jpg'),price:103,address:'出酒店左转直行510米即到',timeing:'11:00-22:00',tel:'0755-26911015',type:'火锅',mark:'文艺、清新、闺蜜聚会',store:false},
              list:[require('../assets/img/shop/2/2/1-1.jpg'),require('../assets/img/shop/2/2/1-2.jpg'),require('../assets/img/shop/2/2/1-3.jpg'),require('../assets/img/shop/2/2/1-4.jpg'),require('../assets/img/shop/2/2/1-5.jpg'),require('../assets/img/shop/2/2/1-6.jpg'),require('../assets/img/shop/2/2/1-7.jpg'),require('../assets/img/shop/2/2/1-8.jpg'),require('../assets/img/shop/2/2/1-9.jpg')]
            },
            2:{
              shopinfo:{img:require('../assets/img/shop/2/3/1.jpg'),price:89,address:'出酒店右转直行280米到红绿灯左转，直行590米后左转，直行900米即到',timeing:'11:00-22:00',tel:'0755-26815166',type:'粤菜',mark:'上菜快、海鲜好吃、服务到位',store:false},
              list:[require('../assets/img/shop/2/3/1-1.jpg'),require('../assets/img/shop/2/3/1-2.jpg'),require('../assets/img/shop/2/3/1-3.jpg'),require('../assets/img/shop/2/3/1-4.jpg'),require('../assets/img/shop/2/3/1-5.jpg'),require('../assets/img/shop/2/3/1-6.jpg'),require('../assets/img/shop/2/3/1-7.jpg'),require('../assets/img/shop/2/3/1-8.jpg'),require('../assets/img/shop/2/3/1-9.jpg')]
            },
            3:{
              shopinfo:{img:require('../assets/img/shop/2/4/1.jpg'),price:62,address:'出酒店左转直行740米即到',timeing:'11:00-22:00',tel:'0755-86606353',type:'湘菜',mark:'性价比高、价格实惠、推荐',store:false},
              list:[require('../assets/img/shop/2/4/1-1.jpg'),require('../assets/img/shop/2/4/1-2.jpg'),require('../assets/img/shop/2/4/1-3.jpg'),require('../assets/img/shop/2/4/1-4.jpg'),require('../assets/img/shop/2/4/1-5.jpg'),require('../assets/img/shop/2/4/1-6.jpg'),require('../assets/img/shop/2/4/1-7.jpg'),require('../assets/img/shop/2/4/1-8.jpg')]
            }
          },
          2:{
            0:{
              shopinfo:{img:require('../assets/img/shop/3/1/1.jpg'),price:67,address:'出酒店右转直行280米到红绿灯左转，直行360米即到',timeing:'11:00-15:00 17:00-03:00',tel:'0755-26394665',type:'烧烤',mark:'干净卫、撸串好地方、干净',store:false},
              list:[require('../assets/img/shop/3/1/1-1.jpg'),require('../assets/img/shop/3/1/1-2.jpg'),require('../assets/img/shop/3/1/1-3.jpg'),require('../assets/img/shop/3/1/1-4.jpg'),require('../assets/img/shop/3/1/1-5.jpg'),require('../assets/img/shop/3/1/1-6.jpg'),require('../assets/img/shop/3/1/1-7.jpg'),require('../assets/img/shop/3/1/1-8.jpg')]
            },
            1:{
              shopinfo:{img:require('../assets/img/shop/3/2/1.jpg'),price:79,address:'出酒店左转直行660米即到',timeing:'10:00-04:30 ',tel:'0755-26667086',type:'新疆',mark:'分量大、味道好、羊肉',store:false},
              list:[require('../assets/img/shop/3/2/1-1.jpg'),require('../assets/img/shop/3/2/1-2.jpg'),require('../assets/img/shop/3/2/1-3.jpg'),require('../assets/img/shop/3/2/1-4.jpg'),require('../assets/img/shop/3/2/1-5.jpg'),require('../assets/img/shop/3/2/1-6.jpg'),require('../assets/img/shop/3/2/1-7.jpg'),require('../assets/img/shop/3/2/1-8.jpg')]
            },
            2:{
              shopinfo:{img:require('../assets/img/shop/3/3/1.jpg'),price:125,address:'出酒店右转直行280米到红绿灯左转，直行360米即到',timeing:'11:30-22:30 ',tel:'0755-82886678',type:'烧烤',mark:'工作餐、上菜快、聚会',store:false},
              list:[require('../assets/img/shop/3/3/1-1.jpg'),require('../assets/img/shop/3/3/1-2.jpg'),require('../assets/img/shop/3/3/1-3.jpg'),require('../assets/img/shop/3/3/1-4.jpg'),require('../assets/img/shop/3/3/1-5.jpg'),require('../assets/img/shop/3/3/1-6.jpg'),require('../assets/img/shop/3/3/1-7.jpg'),require('../assets/img/shop/3/3/1-8.jpg')]
            },
            3:{
              shopinfo:{img:require('../assets/img/shop/3/4/1.jpg'),price:90,address:'出酒店右转直行720米左转进入登良路，直行160米即到',timeing:'17:00-02:00',tel:' 0755-36608519',type:'川菜',mark:'味道赞、花蛤、干净',store:false},
              list:[require('../assets/img/shop/3/4/1-1.jpg'),require('../assets/img/shop/3/4/1-2.jpg'),require('../assets/img/shop/3/4/1-3.jpg'),require('../assets/img/shop/3/4/1-4.jpg'),require('../assets/img/shop/3/4/1-5.jpg'),require('../assets/img/shop/3/4/1-6.jpg'),require('../assets/img/shop/3/4/1-7.jpg'),require('../assets/img/shop/3/4/1-8.jpg')]
            },
            4:{
              shopinfo:{img:require('../assets/img/shop/3/5/1.jpg'),price:80,address:'出酒店右转直行210米即到',timeing:'11:00-15:00 17:00-03:00',tel:'0755-86719930',type:'中餐',mark:'牛筋好吃、上菜快',store:false},
              list:[require('../assets/img/shop/3/5/1-1.jpg'),require('../assets/img/shop/3/5/1-2.jpg'),require('../assets/img/shop/3/5/1-3.jpg'),require('../assets/img/shop/3/5/1-4.jpg'),require('../assets/img/shop/3/5/1-5.jpg'),require('../assets/img/shop/3/5/1-6.jpg'),require('../assets/img/shop/3/5/1-7.jpg'),require('../assets/img/shop/3/5/1-8.jpg')]
            },
            5:{
              shopinfo:{img:require('../assets/img/shop/3/6/1.jpg'),price:106,address:'南商路68-6号南油食街（距您1000米）',timeing:'18:00-02:00',tel:'13823372124',type:'中餐',mark:'性价比高、回头客、菜好吃',store:false},
              list:[require('../assets/img/shop/3/6/1-1.jpg'),require('../assets/img/shop/3/6/1-2.jpg'),require('../assets/img/shop/3/6/1-3.jpg'),require('../assets/img/shop/3/6/1-4.jpg'),require('../assets/img/shop/3/6/1-5.jpg'),require('../assets/img/shop/3/6/1-6.jpg'),require('../assets/img/shop/3/6/1-7.jpg'),require('../assets/img/shop/3/6/1-8.jpg')]
            },
            6:{
              shopinfo:{img:require('../assets/img/shop/3/7/1.jpg'),price:61,address:'出酒店左转直行100米右转，直行670米过天桥右转，直行310米即到',timeing:'11:00-01:00 ',tel:'18926763675',type:'蒙古',mark:'文艺、分量大、干净',store:false},
              list:[require('../assets/img/shop/3/7/1-1.jpg'),require('../assets/img/shop/3/7/1-2.jpg'),require('../assets/img/shop/3/7/1-3.jpg'),require('../assets/img/shop/3/7/1-4.jpg'),require('../assets/img/shop/3/7/1-5.jpg'),require('../assets/img/shop/3/7/1-6.jpg'),require('../assets/img/shop/3/7/1-7.jpg'),require('../assets/img/shop/3/7/1-8.jpg'),require('../assets/img/shop/3/7/1-9.jpg')]
            }
          },
          3:{
            0:{
              shopinfo:{img:require('../assets/img/shop/4/1/1.jpg'),price:1196,address:'海德一道88号中洲控股中心A座44F(海岸城旁)',timeing:'11:30-14:00 17:00-22:00',tel:'0755-86381329',type:'日料',mark:'菜品健康、商务、请客',store:false},
              list:[require('../assets/img/shop/4/1/1-1.jpg'),require('../assets/img/shop/4/1/1-2.jpg'),require('../assets/img/shop/4/1/1-3.jpg'),require('../assets/img/shop/4/1/1-4.jpg'),require('../assets/img/shop/4/1/1-5.jpg'),require('../assets/img/shop/4/1/1-6.jpg'),require('../assets/img/shop/4/1/1-7.jpg'),require('../assets/img/shop/4/1/1-8.jpg'),require('../assets/img/shop/4/1/1-9.jpg')]
            },
            1:{
              shopinfo:{img:require('../assets/img/shop/4/2/1.jpg'),price:243,address:'在酒店对面',timeing:'11:30-23:00',tel:'0755-86250406',type:'粤菜',mark:'主食赞、回头客、有萌宠',store:false},
              list:[require('../assets/img/shop/4/2/1-1.jpg'),require('../assets/img/shop/4/2/1-2.jpg'),require('../assets/img/shop/4/2/1-3.jpg'),require('../assets/img/shop/4/2/1-4.jpg'),require('../assets/img/shop/4/2/1-5.jpg'),require('../assets/img/shop/4/2/1-6.jpg'),require('../assets/img/shop/4/2/1-7.jpg'),require('../assets/img/shop/4/2/1-8.jpg'),require('../assets/img/shop/4/2/1-9.jpg')]
            },
            2:{
              shopinfo:{img:require('../assets/img/shop/4/3/1.jpg'),price:135,address:'出酒店右转直行280米到红绿灯左转，直行590米右转，直行320米即到',timeing:'11:00-15:00 17:00-22:00 ',tel:'0755-86533980',type:'江南',mark:'干净卫生、聚会、美食',store:false},
              list:[require('../assets/img/shop/4/3/1-1.jpg'),require('../assets/img/shop/4/3/1-2.jpg'),require('../assets/img/shop/4/3/1-3.jpg'),require('../assets/img/shop/4/3/1-4.jpg'),require('../assets/img/shop/4/3/1-5.jpg'),require('../assets/img/shop/4/3/1-6.jpg'),require('../assets/img/shop/4/3/1-7.jpg'),require('../assets/img/shop/4/3/1-8.jpg'),require('../assets/img/shop/4/3/1-9.jpg')]
            },
            3:{
              shopinfo:{img:require('../assets/img/shop/4/4/1.jpg'),price:136,address:'出酒店右转直行280米到红绿灯左转，直行590米右转，直行320米即到',timeing:'10:00-00:00 ',tel:'0755-26920250',type:'西餐',mark:'牛肉赞、下午茶、上菜快',store:false},
              list:[require('../assets/img/shop/4/4/1-1.jpg'),require('../assets/img/shop/4/4/1-2.jpg'),require('../assets/img/shop/4/4/1-3.jpg'),require('../assets/img/shop/4/4/1-4.jpg'),require('../assets/img/shop/4/4/1-5.jpg'),require('../assets/img/shop/4/4/1-6.jpg'),require('../assets/img/shop/4/4/1-7.jpg'),require('../assets/img/shop/4/4/1-8.jpg')]
            },
            4:{
              shopinfo:{img:require('../assets/img/shop/4/5/1.jpg'),price:126,address:'出酒店左转直行610米即到',timeing:'10:30-03:00',tel:'86533899',type:'潮汕',mark:'商务范、干净、推荐',store:false},
              list:[require('../assets/img/shop/4/5/1-1.jpg'),require('../assets/img/shop/4/5/1-2.jpg'),require('../assets/img/shop/4/5/1-3.jpg'),require('../assets/img/shop/4/5/1-4.jpg'),require('../assets/img/shop/4/5/1-5.jpg'),require('../assets/img/shop/4/5/1-6.jpg'),require('../assets/img/shop/4/5/1-7.jpg'),require('../assets/img/shop/4/5/1-8.jpg')]
            },
            5:{
              shopinfo:{img:require('../assets/img/shop/4/6/1.jpg'),price:104,address:'出酒店右转直行280米到红绿灯左转，直行310米即到',timeing:'10:30-03:00 ',tel:'0755-36902168',type:'素食',mark:'高大上、主食好吃',store:false},
              list:[require('../assets/img/shop/4/6/1-1.jpg'),require('../assets/img/shop/4/6/1-2.jpg'),require('../assets/img/shop/4/6/1-3.jpg'),require('../assets/img/shop/4/6/1-4.jpg'),require('../assets/img/shop/4/6/1-5.jpg'),require('../assets/img/shop/4/6/1-6.jpg'),require('../assets/img/shop/4/6/1-7.jpg'),require('../assets/img/shop/4/6/1-8.jpg')]
            },
            6:{
              shopinfo:{img:require('../assets/img/shop/4/7/1.jpg'),price:113,address:'出酒店右转直行280米到红绿灯左转，直行590米右转，直行170米左转，直行20米即到',timeing:'08:00-22:00',tel:'0755-26643393',type:'粤菜',mark:'公司聚会、干净、现做现卖',store:false},
              list:[require('../assets/img/shop/4/7/1-1.jpg'),require('../assets/img/shop/4/7/1-2.jpg'),require('../assets/img/shop/4/7/1-3.jpg'),require('../assets/img/shop/4/7/1-4.jpg'),require('../assets/img/shop/4/7/1-5.jpg'),require('../assets/img/shop/4/7/1-6.jpg'),require('../assets/img/shop/4/7/1-7.jpg'),require('../assets/img/shop/4/7/1-8.jpg')]
            },
            7:{
              shopinfo:{img:require('../assets/img/shop/4/8/1.jpg'),price:101,address:'粤海街道海德三道19号海岸大厦西座301A-302A',timeing:'11:30-00:00 ',tel:'0755-86706575',type:'潮汕',mark:'回头客、下午茶、上菜快',store:false},
              list:[require('../assets/img/shop/4/8/1-1.jpg'),require('../assets/img/shop/4/8/1-2.jpg'),require('../assets/img/shop/4/8/1-3.jpg'),require('../assets/img/shop/4/8/1-4.jpg'),require('../assets/img/shop/4/8/1-5.jpg'),require('../assets/img/shop/4/8/1-6.jpg'),require('../assets/img/shop/4/8/1-7.jpg'),require('../assets/img/shop/4/8/1-8.jpg')]
            },
            8:{
              shopinfo:{img:require('../assets/img/shop/4/9/1.jpg'),price:448,address:'出酒店右转直行820米左转，直行30米即到',timeing:'11:00-24:00',tel:'0755-86573369',type:'海鲜',mark:'菜品健康、铁板好吃',store:false},
              list:[require('../assets/img/shop/4/9/1-1.jpg'),require('../assets/img/shop/4/9/1-2.jpg'),require('../assets/img/shop/4/9/1-3.jpg'),require('../assets/img/shop/4/9/1-4.jpg'),require('../assets/img/shop/4/9/1-5.jpg'),require('../assets/img/shop/4/9/1-6.jpg'),require('../assets/img/shop/4/9/1-7.jpg'),require('../assets/img/shop/4/9/1-8.jpg')]
            }
          },
          4:{
            0:{
              shopinfo:{img:require('../assets/img/shop/5/1/1.jpg'),price:125,address:'南山大道好来居大厦1楼102号3C',timeing:'09:00-24:00',tel:'18201069121',type:'',mark:'饮料全、店家好',store:false},
              list:[require('../assets/img/shop/5/1/1-1.jpg'),require('../assets/img/shop/5/1/1-2.jpg'),require('../assets/img/shop/5/1/1-3.jpg'),require('../assets/img/shop/5/1/1-4.jpg'),require('../assets/img/shop/5/1/1-5.jpg'),require('../assets/img/shop/5/1/1-6.jpg'),require('../assets/img/shop/5/1/1-7.jpg'),require('../assets/img/shop/5/1/1-8.jpg')]
            },
            1:{
              shopinfo:{img:require('../assets/img/shop/5/2/1.jpg'),price:125,address:'南山大道1102-2',timeing:'00:00-24:00',tel:'18201069121',type:'',mark:'烟酒店、冰棍',store:false},
              list:[require('../assets/img/shop/5/2/1-1.jpg'),require('../assets/img/shop/5/2/1-2.jpg'),require('../assets/img/shop/5/2/1-3.jpg'),require('../assets/img/shop/5/2/1-4.jpg'),require('../assets/img/shop/5/2/1-5.jpg'),require('../assets/img/shop/5/2/1-6.jpg'),require('../assets/img/shop/5/2/1-7.jpg'),require('../assets/img/shop/5/2/1-8.jpg')]
            },
            2:{
              shopinfo:{img:require('../assets/img/shop/5/3/1.jpg'),price:125,address:'南山区海德二道326号',timeing:'00:00-24:00',tel:'18201069121',type:'',mark:'环境好、物品全、快餐',store:false},
              list:[require('../assets/img/shop/5/3/1-1.jpg'),require('../assets/img/shop/5/3/1-2.jpg'),require('../assets/img/shop/5/3/1-3.jpg'),require('../assets/img/shop/5/3/1-4.jpg'),require('../assets/img/shop/5/3/1-5.jpg'),require('../assets/img/shop/5/3/1-6.jpg'),require('../assets/img/shop/5/3/1-7.jpg')]
            },
            3:{
              shopinfo:{img:require('../assets/img/shop/5/4/1.jpg'),price:125,address:'南山区创业路现代华庭6号楼商业1层101号',timeing:'00:00-24:00',tel:'18201069121',type:'',mark:'环境好、物品全、快餐',store:false},
              list:[require('../assets/img/shop/5/4/1-1.jpg'),require('../assets/img/shop/5/4/1-2.jpg'),require('../assets/img/shop/5/4/1-3.jpg'),require('../assets/img/shop/5/4/1-4.jpg'),require('../assets/img/shop/5/4/1-5.jpg'),require('../assets/img/shop/5/4/1-6.jpg'),require('../assets/img/shop/5/4/1-7.jpg')]
            },
            4:{
              shopinfo:{img:require('../assets/img/shop/5/5/1.jpg'),price:125,address:'深圳市南山区创业路98号1栋66',timeing:'00:00-24:00',tel:'18201069121',type:'',mark:'零食、烟酒',store:false},
              list:[require('../assets/img/shop/5/5/1-1.jpg'),require('../assets/img/shop/5/5/1-2.jpg'),require('../assets/img/shop/5/5/1-3.jpg'),require('../assets/img/shop/5/5/1-4.jpg'),require('../assets/img/shop/5/5/1-5.jpg'),require('../assets/img/shop/5/5/1-6.jpg'),require('../assets/img/shop/5/5/1-7.jpg'),require('../assets/img/shop/5/5/1-8.jpg')]
            },
            5:{
              shopinfo:{img:require('../assets/img/shop/5/6/1.jpg'),price:125,address:'创业路3070号人人乐百货F1',timeing:'00:00-24:00',tel:'18201069121',type:'',mark:'烟酒店、饮料、零食',store:false},
              list:[require('../assets/img/shop/5/6/1-1.jpg'),require('../assets/img/shop/5/6/1-2.jpg'),require('../assets/img/shop/5/6/1-3.jpg'),require('../assets/img/shop/5/6/1-4.jpg'),require('../assets/img/shop/5/6/1-5.jpg'),require('../assets/img/shop/5/6/1-6.jpg'),require('../assets/img/shop/5/6/1-7.jpg'),require('../assets/img/shop/5/6/1-8.jpg')]
            }
          }
       },
       title:{key:true,title:'深夜食堂'},
       shopinfo:{img:require('../assets/img/shop_index.jpg'),price:125,address:'南山大道1092号亿利达大厦B区3栋首层商铺1007号',timeing:'周一至周日',tel:'18201069121',type:'川菜',mark:'关东煮、微波炉、快餐',store:false},
       list:[require('../assets/img/0_01.jpg'),require('../assets/img/1_11.jpg'),require('../assets/img/2_13.jpg'),require('../assets/img/3_17.jpg'),require('../assets/img/4_18.jpg'),require('../assets/img/2_13.jpg')]
      }
  },
  components:{Lstitle,Shopinfo,List},
  mounted:function(){
    const data=this.$route.params.id.split('-');
    this.title={key:true,title:data[1]}
    this.shopinfo=this.info[data[2]][data[0]-1].shopinfo
    this.list=this.info[data[2]][data[0]-1].list
  }
}
</script>

<style lang="css" scoped>
</style>

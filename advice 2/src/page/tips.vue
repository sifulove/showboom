<template>
    <div id="container" style="background:#f0f0f0;height: 100%;overflow: auto;">
      <div id="list">
        <Lstitle :data="title"></Lstitle>
        <div v-for="item,index in message" v-on:click="skip(item.id,item.name)">
          <Lsitem :data="item" :dataIndex="index" :dataMax="message.length"></Lsitem>
        </div>
      </div>
      <loading v-if="loadingshow"></loading>
    </div>
</template>
<script type="text/javascript">
  import Lstitle from '../components/title.vue'
  import Lsitem from '../components/hot.vue'
  export default{
    data(){
      return{
        title:{key:true,title:'深夜食堂'},
        loadingshow:false,
        onoff:true,
        index:0,
        message:[],
        obj:{0:[
                    {id:1,img:require('../assets/img/shop/1/1/1.jpg'),name:'小郡肝串串香火锅',price:'119',store:234,mark:'干净卫生、朋友聚会、回头客多'},
                    {id:2,img:require('../assets/img/shop/1/2/1.jpg'),name:'重庆辛麻道腰片火锅',price:'102',store:224,mark:'牛肉很赞、上菜快、菜品健康'},
                    {id:3,img:require('../assets/img/shop/1/3/1.jpg'),name:'澳洲小青龙主题餐厅 ',price:'95',store:2134,mark:'味道赞、服务热情、深夜食堂'},
                    {id:4,img:require('../assets/img/shop/1/4/1.jpg'),name:'蜀九香',price:'96',store:24,mark:'服务热情、价格实惠、味道不错'},
                    {id:5,img:require('../assets/img/shop/1/5/1.jpg'),name:'佳泰砂锅粥',price:'90',store:244,mark:'回头客、海鲜棒、有萌宠'},
                    {id:6,img:require('../assets/img/shop/1/6/1.jpg'),name:'木屋烧烤',price:'67',store:134,mark:'干净、撸串好地方'}
                   ],
                 1:[
                   {id:1,img:require('../assets/img/shop/2/1/1.jpg'),name:'强记海鲜菜馆',price:'159',store:233,mark:'味道鲜美、肉好、现做现卖'},
                   {id:2,img:require('../assets/img/shop/2/2/1.jpg'),name:'金鸡椰子鸡音乐主题餐厅',price:'103',store:234,mark:'文艺、清新、闺蜜聚会'},
                   {id:3,img:require('../assets/img/shop/2/3/1.jpg'),name:'顺德佬酒楼',price:'89',store:255,mark:'上菜快、海鲜好吃、服务到位'},
                   {id:4,img:require('../assets/img/shop/2/4/1.jpg'),name:'粗茶淡饭',price:'62',store:254,mark:'性价比高、价格实惠、推荐'}

                 ],
                 2:[
                   {id:1,img:require('../assets/img/shop/3/1/1.jpg'),name:'木屋烧烤',price:'67',store:333,mark:'干净卫、撸串好地方、干净'},
                   {id:2,img:require('../assets/img/shop/3/2/1.jpg'),name:'巴依老爷新疆食府',price:'79',store:554,mark:'分量大、味道好、羊肉'},
                   {id:3,img:require('../assets/img/shop/3/3/1.jpg'),name:'姜虎东白丁烤肉',price:'125',store:234,mark:'工作餐、上菜快、聚会'},
                   {id:4,img:require('../assets/img/shop/3/4/1.jpg'),name:'哈尔滨庭院式烧烤',price:'90',store:664,mark:'味道赞、花蛤、干净'},
                   {id:5,img:require('../assets/img/shop/3/5/1.jpg'),name:'三昧真火烧烤',price:'80',store:327,mark:'牛筋好吃、上菜快'},
                   {id:6,img:require('../assets/img/shop/3/6/1.jpg'),name:'东北碳烤羊腿',price:'106',store:11,mark:'性价比高、回头客、菜好吃'},
                   {id:7,img:require('../assets/img/shop/3/7/1.jpg'),name:'爱家味烤羊排',price:'61',store:456,mark:'文艺、分量大、干净'}

                 ],
                 3:[
                   {id:1,img:require('../assets/img/shop/4/1/1.jpg'),name:'植藤·匠日本料理',price:'1196',store:443,mark:'菜品健康、商务、请客'},
                   {id:2,img:require('../assets/img/shop/4/2/1.jpg'),name:'荞上人',price:'243',store:234,mark:'主食赞、回头客、有萌宠'},
                   {id:3,img:require('../assets/img/shop/4/3/1.jpg'),name:'莆田餐厅(来福士广场店)',price:'135',store:332,mark:'干净卫生、聚会、美食'},
                   {id:4,img:require('../assets/img/shop/4/4/1.jpg'),name:'bluefrog蓝蛙(来福士广场店)',price:'136',store:66,mark:'牛肉赞、下午茶、上菜快'},
                   {id:5,img:require('../assets/img/shop/4/5/1.jpg'),name:'大龙 D火锅(南山大道店)',price:'126',store:88,mark:'商务范、干净、推荐'},
                   {id:6,img:require('../assets/img/shop/4/6/1.jpg'),name:'云来居素食馆(南山店)',price:'104',store:65,mark:'高大上、主食好吃'},
                   {id:7,img:require('../assets/img/shop/4/7/1.jpg'),name:'春满园大酒楼(粤海店)',price:'113',store:45,mark:'公司聚会、干净、现做现卖'},
                   {id:8,img:require('../assets/img/shop/4/8/1.jpg'),name:'汕头八合里海记牛肉店(海岸城店)',price:'101',store:1234,mark:'回头客、下午茶、上菜快'},
                   {id:9,img:require('../assets/img/shop/4/9/1.jpg'),name:'海食代',price:'448',store:4563,mark:'菜品健康、铁板好吃'}

                 ],
                 4:[
                   {id:1,img:require('../assets/img/shop/5/1/1.jpg'),name:'711',price:'15',store:22,mark:'饮料全、店家好'},
                   {id:2,img:require('../assets/img/shop/5/2/1.jpg'),name:'百里臣',price:'12',store:56,mark:'烟酒店、冰棍'},
                   {id:3,img:require('../assets/img/shop/5/3/1.jpg'),name:'百里汇',price:'25',store:39,mark:'环境好、物品全、快餐'},
                   {id:4,img:require('../assets/img/shop/5/4/1.jpg'),name:'方店通',price:'5',store:70,mark:'环境好、物品全、快餐'},
                   {id:5,img:require('../assets/img/shop/5/5/1.jpg'),name:'牛牛便利店',price:'11',store:335,mark:'零食、烟酒'},
                   {id:6,img:require('../assets/img/shop/5/6/1.jpg'),name:'天虹微喔',price:'18',store:683,mark:'关东煮、微波炉、快餐'}

                 ]
             },
        isend:false
      }
    },
    components:{Lstitle,Lsitem},
    mounted:function(){
      const data=this.$route.params.id.split('-');
      this.message=this.obj[data[0]];
      this.index=data[0];
      let minh=document.getElementById('list').offsetHeight;
      let onoff=true;
      let page=1;
      const self=this;
      this.title={key:true,title:data[1]}
      // this.$global.ajax({
      //   url:self.$global.url,
      //   data:{
      //     id:data[0],
      //     service:'HotelAroundDetail',
      //     pro:'S003',
      //     page:page
      //   },
      //   method:'post',
      //   success:function(res){
      //     if(res.code==0){
      //       self.message=res.data.info;
      //       page=2;
      //     }
      //   },
      //   fail:function(res){
      //     alert('网络错误，请稍后重试。')
      //   }
      // })
      document.getElementById('container').onscroll=function(e){

          const h1=document.getElementById('list').offsetHeight;
          const h=h1-document.documentElement.clientHeight;
          onoff=h1>minh?true:onoff;
          minh=h1>minh?h1:minh;
          const scrollTop = document.getElementById('container').scrollTop || document.getElementById('container').pageYOffset || document.getElementById('container').scrollTop;
          if(scrollTop>=h){
            if(onoff&&!self.isend){
               onoff=false;
               console.log(page)
               // self.$global.ajax({
               //   url:self.$global.url,
               //   data:{
               //     id:data[0],
               //     service:'HotelAroundDetail',
               //     pro:'S003',
               //     page:page
               //   },
               //   method:'post',
               //   success:function(res){
               //     if(res.code==0){
               //       self.message=res.data.info&&res.data.info.length>0?self.message.concat(res.data.info):self.message;
               //
               //       page++;
               //       if(page>res.data.pageCount){
               //         self.isend=true;
               //       }
               //     }
               //   },
               //   fail:function(res){
               //     alert('网络错误，请稍后重试。')
               //   }
               // })

          }

        }
      }

    },
    methods:{
      skip:function(id,name){
        this.$router.push('/shop/'+id+'-'+name+'-'+this.index)
      }
  }
}
</script>
<style scoped>

</style>

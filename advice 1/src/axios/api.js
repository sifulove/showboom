import axios from 'axios'
let basePath='';
basePath='http://s.test.heimilink.com/api/api/index'
axios.defaults.baseURL=basePath;
const Api={
    GetMenu:(Data)=>{
      var params = new URLSearchParams();
      for(var key in Data.data){
        params.append(key, Data.data[key]);
      }
      axios({
        method:'post',
        //headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        data:params
      }).then(function(res){
        Data.fn(res)
      })
    },
    Gettips:(Data)=>{
      var params = new URLSearchParams();
      console.log(Data.data)
      for(var key in Data.data){
        params.append(key, Data.data[key]);
      }
      axios({
        method:'POST',
        data:params
      }).then(function(res){
        Data.fn(res)
      })
    }
}
export default Api;

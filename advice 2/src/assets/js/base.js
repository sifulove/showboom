const  data={
  url:'https://s.heimilink.com/api/api/index',
  getQueryString:function(name){
     var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
     var r = window.location.href.split('?')[1]?window.location.href.split('?')[1].match(reg):null;
     if (r != null) {
         return decodeURIComponent(r[2]);
     }
     return null;
  },
  ajax:function(options){
    var url, //请求地址 必须
        method = "GET", //请求类型 默认GET
        success, //成功后的回调函数 默认空
        fail, //错误的回调函数 默认空
        async = true, //是否异步请求 默认异步
        jsonp,
        data = null; //请求数据 默认空
    if (typeof options == "string") {
        url = options;
    }
    if (typeof options == "object") {
        if (options.url) {
            url = options.url;
        } else {
            console.log("URL地址必须存在，请检查传入参数");
            return;
        }
        method = options.method ? options.method.toUpperCase() : "GET";
        success = typeof options.success == "function" ? options.success : null;
        fail = typeof options.fail == "function" ? options.fail : null;
        data = typeof options.data == "object" ? options.data : {};
        if (typeof options.async == "boolean") {
            async = options.async;
        } else if (typeof options.async == "undefined") {
            async = true;
        }
        // async = options.async;
        jsonp = options.jsonp ? options.jsonp : "callback";
    }
    if(method == "JSONP"){
        var cName = "jsonp"+new Date().getTime();
        data[jsonp] = cName;
        success &&  (window[cName] = success);
        url = createURL(url,data,method);
        var script = document.createElement("script");
        script.setAttribute("src",url);
        document.getElementsByTagName("head")[0].appendChild(script);
        document.getElementsByTagName("head")[0].removeChild(script);
        return;
    }
    var xmlhttp = null;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    } else {
        alert("浏览器不支持Ajax，请更换浏览器");
        return;
    };

    if (method == "GET") {
        url = createURL(url, data, method);
        xmlhttp.open(method, url, async);
    } else if (method == "POST") {
        data = createURL(url, data, method);
        xmlhttp.open(method, url, async);
        xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    }
    xmlhttp.send(data);
    if (async) {
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4) {
                rsponse()
            }
        }
    } else {
        rsponse();
    }

    function rsponse() {
        if (xmlhttp.status == 200) {
            if (success) {
                success(JSON.parse(xmlhttp.responseXML) ||JSON.parse(xmlhttp.responseText) );
            }
        } else {
            if (fail) {
                fail(xmlhttp.status)
            }
        }
    }


   }
}
//辅助函数
function createURL(url, data, type) {
    var arr = [];
    for (var key in data) {
        arr.push(key + "=" + data[key]);
    }
    if (type == "POST") {
        return arr.join("&");
    } else {
        return url + "?" + arr.join("&");
    }
}
export default data

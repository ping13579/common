function statistics(name,param){
    var param = param||getQueryString("sourceId");
    var data = {
        name :      name,
        taskId :    param
    };
    $.ajax({
        url:'http://data.ufenqi.com/log/log',
        data:data,
        dataType:"jsonp",
        jsonp:"callback",
        jsonpCallback:"success_jsonp",
        timeout:3000,
        dataFilter:function(json){
            console.log("jsonp.filter:"+json);
            return json;
        },
        success:function(json,textStatus){
            console.log("jsonp.success:"+json.name);
        },
        error:function(XMLHttpRequest,textStatus,errorThrown){
            console.log("jsonp.error:"+textStatus);
        }
    });
}


function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}
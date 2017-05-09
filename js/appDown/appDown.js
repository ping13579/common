var app_down={
    init:function(click_ele,uri){
        //点击事件、、、
        $(click_ele).on("click",function() {
            var html ="<div class='clickBTnToApp' style='position:fixed;top:0;z-index:99999;background-color: #1b2728;filter: alpha(opacity=80);opacity: .8;height:100%;width:100%;left:0;right:0;'>" +
                "<img src='http://cdn.ufenqi.com/cms/img/open_notice.png' style='width: 60%;margin-top: 10%;text-align: right;margin-left: 32%;'>" +
                "</div>";

            //判断环境。在微信中显示遮罩层。浏览器中则直接打开或者下载app
            if(isWeixin()){
                $('body').append(html);
            }else{
                app_down.open(html,uri);
            }

        });
        //判断微信环境、、、
        function isWeixin() {
            var ua = navigator.userAgent.toLowerCase();
            return (ua.match(/MicroMessenger/i) == "micromessenger");
        }
    },
    getUrlParam:function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return decodeURI(r[2]);
        return null;
    },
    open:function(txt,uri){
        var ua = navigator.userAgent;
        var Ua = navigator.userAgent.toLowerCase().toString();
        if(ua.match(/iphone|ipad/i) != null){
            // ios QQ内置浏览器内
            if(Ua.indexOf('safari')== -1){
                $('body').append(txt);
            }else{
                location.href = uri;
                setTimeout(function(){
                    location.href = 'itms-apps://itunes.apple.com/cn/app/you-fen-qi/id983154074?mt=8';
                },2000);
            }
            return false;
        }else if(ua.match(/android/i) != null){
            // android QQ内置浏览器内
            if(Ua.indexOf('mobile safari')== -1){
                $('body').append(txt);
            }else{
                var ifr = document.createElement("iframe");
                document.body.appendChild(ifr);
                ifr.setAttribute('src', uri);
                ifr.setAttribute('style', 'display:none');
                setTimeout(function(){
                    location.href = 'http://m.ufenqi.com/app/download/android';
                },2000);
            }
            return false;
        }
    }
};

// 调用方法 app_down.init($('#ele'),'appurl')


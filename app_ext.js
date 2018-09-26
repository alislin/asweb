function AppLoad(url) {
    if (!url) {
        return;
    }

    var reader = new FileReader();
    reader.addEventListener("loadend", function () {
        var contents = reader.result;
        displayContents(contents);
    });

    var request = new Request(url);
    fetch(request)
        .then(response => response.blob())
        .then(blob => {
            reader.readAsText(blob);
        });
}
function displayContents(contents) {
    document.getElementById('content').innerHTML =
        marked(contents);
}

function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}

function Tongji() {
    var _hmt = _hmt || [];
    (function () {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?b121b383222362493542d3ad11fffc72";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();
}

function initHighlight(){
    hljs.initHighlightingOnLoad();
    var rendererMD = new marked.Renderer();
    // marked.setOptions({
    //   renderer: rendererMD,
    //   gfm: true,
    //   tables: true,
    //   breaks: false,
    //   pedantic: false,
    //   sanitize: false,
    //   smartLists: true,
    //   smartypants: false
    // });
    marked.setOptions({
        highlight: function (code) {
        return hljs.highlightAuto(code).value;
      }
    });
}

function initGotoFrame(seek,delay){
    if (Player.PlayerCommon.getInstance().isLoadCompleted) {
        gotoFrame(seek);
        return;
    }
    setTimeout(() => {
        initGotoFrame(seek,delay);
    }, delay);
}

function app_ext() {
    var seek = getUrlParam("s");
    var delay = getUrlParam("delay");
    if (!seek) { seek = 0; }
    if (!delay) { delay = 4; }
    Tongji();
    initGotoFrame(seek,delay*1000);
}
app_ext();

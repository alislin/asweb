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

function initHighlight() {
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

function initGotoFrame(seek, delay) {
    if (Player.PlayerCommon.getInstance().isLoadCompleted) {
        gotoFrame(seek);
        return;
    }
    setTimeout(() => {
        initGotoFrame(seek, delay);
    }, delay);
}

///计算两个整数的百分比值
function GetPercent(num, total, point) {
    num = parseFloat(num);
    total = parseFloat(total);
    if (isNaN(num) || isNaN(total)) {
        return "-";
    }
    if (isNaN(point) || point < 0) { point = 0; }
    var n = 1.00;
    for (let index = 0; index < point.length; index++) {
        n = n * 10;
    }
    return total <= 0 ? "0%" : (Math.round(num / total * 100 * n) / n + "%");
}

function loadingProgress(id) {
    if (preloadResourceCountMax == 0 && preloadResourceCount > 0) {
        preloadResourceCountMax = preloadResourceCount;
    }
    if (preloadResourceCount > 0) {
        document.getElementById(id).innerHTML = GetPercent(preloadResourceCountMax - preloadResourceCount, preloadResourceCountMax) + " (剩余 " + preloadResourceCount + ")";
    }
    if (Player.PlayerCommon.getInstance().isLoadCompleted) {
        return;
    }
    setTimeout(() => {
        loadingProgress(id);
    }, 1000);
}

function app_ext() {
    var seek = getUrlParam("s");
    var delay = getUrlParam("delay");
    if (!seek) { seek = 0; }
    if (!delay) { delay = 4; }
    Tongji();
    initGotoFrame(seek, delay * 1000);
    loadingProgress("loading_info");
}
var preloadResourceCountMax = 0;
app_ext();

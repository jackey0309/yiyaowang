(function(doc, win) {
    var docEl = doc.documentElement,//获取设备宽度
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize', //当窗口尺寸变更时
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;//若未获取到设备宽度，则终止函数执行
            docEl.style.fontSize = 32 * (clientWidth / 320) + 'px';// /为根元素字体赋值 计算rem基础配置：设计图以320px为准时，px rem比例为1：20
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
export var search = function () {
    /*1.默认固定顶部透明背景*/
    var searchBox = document.querySelector('.header');
    var banner = document.querySelector('.banner');
    var height = banner.offsetHeight;
    /*监听页面滚动事件*/
    window.onscroll = function () {
        /*console.log(document.body.scrollTop);
         console.log(document.documentElement.scrollTop);
         console.log(window.pageYOffset);*/
        var scrollTop = document.documentElement.scrollTop;
        //console.log(scrollTop);
        /*默认的透明度*/
        var opacity = 0;
        if (scrollTop < height) {
            /*2.当页面滚动的时候---随着页面卷曲的高度变大透明度变大*/
            opacity = scrollTop / height * 0.85;
        } else {
            /*3.当页面滚动的时候---超过某一个高度的时候透明度不变*/
            opacity = 0.85;
        }
        searchBox.style.background = 'rgba(240,180,180,' + opacity + ')';
    }
};
export var downTime = function () {
    /*1.每一秒改变当前的时间*/
    /*2.倒数计时  假设 4小时*/
    var time = 4 * 60 * 60;
    var spans = document.querySelectorAll('.time span');

    var timer = setInterval(function () {
        time --;
        /*格式化  给不同的元素html内容*/
        var h = Math.floor(time/3600);
        var m = Math.floor(time%3600/60);
        var s = Math.floor(time%60);

        spans[0].innerHTML = Math.floor(h/10);
        spans[1].innerHTML = h%10;
        spans[3].innerHTML = Math.floor(m/10);
        spans[4].innerHTML = m%10;
        spans[6].innerHTML = Math.floor(s/10);
        spans[7].innerHTML = s%10;

        if(time <= 0){
            clearInterval(timer);
        }

    }, 1000)

}
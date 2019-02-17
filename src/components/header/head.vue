<template>
    <div>
        <header class="header">
            <div class="header-searchBar">
                <div class="logo"></div>
                <div class="address_map ellipsis" >上海</div>
                <div class="searchbar">
                    <a href="http://m.111.com.cn/yyw/wap/searchList/#/search" class="search_box">
                        <i class="icon iconfont icon-sousuo"></i>
                        输入商品名称
                    </a>
                    <a href="tel:4000070958" class="tel"></a>
                </div>
                <div class="tel"></div>
            </div>
        </header>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
@import '../../style/mixin';
    .header{
        font-size: .4rem;
        text-align: center;
    }
    .header{
        position: fixed;
        top: 0;
        left: 0;
        z-index: 8;
        width: 100%;
        line-height: 1.2rem;
    }
   
    .header-searchBar{
        position: relative;
    }
    .header .logo{
        background: url(../../images/logo.png) no-repeat .4rem;
        left: 0;
        width: 1.33333333rem;
        background-size: auto .74666667rem; 
        }
    .header .address_map{
        left: 1.2rem;
        padding-top: .10666667rem;
        width: 1.2rem;
        line-height: .53333333rem;
        font-size: .37333333rem;
        color: #fff;
    }
    .header .logo , .header .address_map{
        position: absolute;
        top: 0;
        height: .64rem;
        display: block;
    }
    .header .searchbar{
        padding: 0 1.73333333rem 0 2.4rem;
        color: #a7a7a7;
        .search_box{
            height: .74666667rem;
            line-height: .74666667rem;
            font-size: .32rem;
            margin-top: .26666667rem;
            padding: 0 .26666667rem;
            text-align: left;
            // CSS3文档中提到：（HSLA）
            // H是色度，取值在0度~360度之间，0度是红色，120度是绿色，240度是蓝色。360度也是红色。
            // S是饱和度，是色彩的纯度，是一个百分比的值，取值在0%~100%，0%饱和度最低，100%饱和度最高
            // L是亮度，也是一个百分比值，取值在0%~100%，0%最暗，100%最亮。
            // A是不透明度，取值在0.0~1.0，0.0完全透明，1.0完全不透明。
            background: hsla(0,0%,100%,.9);   
            border-radius: 10px;
            color: #898989;
            box-sizing: border-box;
            display: block;
            width: 100%;
        }
       .iconfont {
            font-size: .42666667rem;
            margin-right: .16rem;
            color: #898989;
            } 
    }
    .header .tel {
        position: absolute;
        top: 0;
        right: 0;
        width: 1.22666667rem;
        height: 100%;
        line-height: .4rem;
        padding-left: .26666667rem;
        background: url(../../images/tel.png) no-repeat .05333333rem;
        background-size: 1.22666667rem auto;
    }

</style>



<template>
    <div class="page_categories">
        <div class="categories">
            <!-- header_bar -->
        <head-top>
            <header slot="header" class="categories_header_bar">
                <div class="categories_header_con">
                    <a href="javascript:void(0)" class="categories_header_left_btn">
                        <i class="logo"></i>
                    </a>
                    <span class="address_map">上海</span>
                    <div class="categories_header_search">
                        <div class="search_box">
                            <i class="icon iconfont icon-sousuo"></i>
                            输入商品名称
                        </div>
                    </div>
                    <a href="" class="categories_header_right_btn">
                        <i class="tel"></i>
                    </a>
                </div>
            </header>
        </head-top>
        <!-- categories_banner -->
        <div class="categories_banner">
            <a href="https://yzm.111.com.cn/m/yw-twwz/index.html?channel=yiyaoapp">
            <img src="http://m.111.com.cn/yyw/wap/category/static/img/categorie_bannr.de2a6a8.png" alt=""></a>
        </div>
        <!-- categories_content -->
        <div class="categories_content">
            <ul class="categories_list">
                <li>
                    <a href="javascript:;" class="active">热门类目</a>
                </li>
                <li>
                    <a href="javascript:;">男科用药</a>
                </li>
                <li>
                    <a href="javascript:;">男科用药</a>
                </li>
                <li>
                    <a href="javascript:;">男科用药</a>
                </li>
                <li>
                    <a href="javascript:;">男科用药</a>
                </li>
                <li>
                    <a href="javascript:;">男科用药</a>
                </li>
                <li>
                    <a href="javascript:;">男科用药</a>
                </li>
                <li>
                    <a href="javascript:;">男科用药</a>
                </li>
                <li>
                    <a href="javascript:;">男科用药</a>
                </li>
                <li>
                    <a href="javascript:;">男科用药</a>
                </li>
                <li>
                    <a href="javascript:;">男科用药</a>
                </li>
                <li>
                    <a href="javascript:;">男科用药</a>
                </li>
                <li>
                    <a href="javascript:;">男科用药</a>
                </li>
                <li>
                    <a href="javascript:;">男科用药</a>
                </li>
                <li>
                    <a href="javascript:;">男科用药</a>
                </li>
                <li>
                    <a href="javascript:;">男科用药</a>
                </li>
                <li>
                    <a href="javascript:;">男科用药</a>
                </li>
            </ul>
            <div class="categories_box">

            </div>
        </div>
        <foot-guide></foot-guide>  
        </div> 
    </div>
</template>

<script>
import headTop from '../../components/header/head'
import footGuide from '../../components/footer/footGuide'
export default {
      components:{
         headTop,  
        footGuide
    },
}
</script>

<style lang="scss" scoped>
 @import '../../style/mixin';
 .categories, .page_categories {
    height: 100%;
    overflow: hidden;
}
.categories {
    margin: 0 auto;
    padding-bottom: 1.4666666666666666rem;
    padding-top: 1.1733333333333333rem;
}
/*header_bar*/
.categories_header_bar {
    height: 1.1733333333333333rem;
    background: #f9f9f9;
    border: 1px solid #e7e7e7;
    box-sizing: border-box;
    position: fixed;
    width: 100%;
    z-index: 100;
    left: 0;
    top: 0;
    text-align: center;
}
.categories_header_bar .categories_header_con {
    position: relative;
    padding: 0 1.3333333333333333rem 0 3.2rem;
    height: 1.1733333333333333rem;
}
.categories_header_bar .categories_header_con .categories_header_left_btn {
    padding: 0 .4rem;
    height: 1.1733333333333333rem;
    display: inline-block;
    position: absolute;
    left: 0;
    top: 0;
    line-height: 1.1733333333333333rem;
}
.categories_header_bar .categories_header_con .logo {
    margin-top: .21333333333333335rem;
    width: .6666666666666666rem;
    height: .7466666666666667rem;
    background: url(../../images/logo.png) no-repeat;
    display: block;
    background-size: .6666666666666666rem auto;
}
.categories_header_bar .categories_header_con .address_map {
    position: absolute;
    line-height: 1.1733333333333333rem;
    left: 1.3333333333333333rem;
    top: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 1.2rem;
}
.categories_header_bar .categories_header_con .categories_header_search {
    position: absolute;
    right: 1.6rem;
    left: 2.6666666666666665rem;
}
.categories_header_bar .categories_header_con .categories_header_right_btn {
    position: absolute;
    right: 0;
    top: 0;
    height: 1.1733333333333333rem;
    line-height: 1.1733333333333333rem;
    display: inline-block;
    padding: 0 .26666666666666666rem;
    cursor: pointer;
}
.categories_header_bar .categories_header_con .categories_header_search .search_box {
    height: .6666666666666666rem;
    line-height: .6666666666666666rem;
    margin-top: .26666666666666666rem;
    font-size: .32rem;
    padding: 0 .26666666666666666rem;
    text-align: left;
    border-radius: 10px;
    background: #ebebeb;
    color: #b8b8be;
    cursor: text;
}
.categories_header_bar .categories_header_con .categories_header_search .iconfont {
    font-size: .4rem;
    color: #b8b8be;
    margin-right: .16rem;
}
.categories_header_bar .categories_header_con .tel {
    width: 1.2rem;
    height: .6666666666666666rem;
    line-height: .6666666666666666rem;
    margin-top: .21333333333333335rem;
    display: block;
    background: url(../../images/tel-category.png) no-repeat;
    background-size: 1.2rem auto;
    background-position: 0;
}
/*header_bar*/
/*categories_banner*/
.categories_banner, .categories_banner img {
    height: 1.1733333333333333rem;
}
.categories_banner img {
    width: 100%;
    vertical-align: middle;
}
.categories_banner, .categories_banner img {
    height: 1.1733333333333333rem;
}
/*categories_banner*/

/*categories_content*/
.categories_content {
    height: 100%;
    zoom: 1;
    margin: 0 auto;
    overflow: hidden;
    font-size: .37333333333333335rem;
}
.categories_content .categories_list {
    height: 100%;
    overflow: auto;
    padding-bottom: 1.1733333333333333rem;
    width: 25%;
    float: left;
    -webkit-overflow-scrolling: touch;
    border-right: 1px solid rgba(0,0,0,.1);
}
.categories_content .categories_box {
    width: 75%;
    height: 100%;
    overflow-y: auto;
    padding: 0 0 0 .26666666666666666rem;
    background: #fff;
}
.categories_content .categories_list li {
    height: 1.3066666666666666rem;
    border-bottom: 1px solid rgba(0,0,0,.1);
}
.categories_content .categories_list li a.active {
    color: #f66;
    background: #fff;
    border-left: 2px solid #f66;
}
.categories_content .categories_list li a {
    height: 1.3066666666666666rem;
    line-height: 1.3066666666666666rem;
    padding: 0 .26666666666666666rem;
    color: #333;
    display: block;
    overflow: hidden;
}


/*categories_content*/

</style>
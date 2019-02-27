<template>
    <div id="home" class="pre-home page">
         <div class="header_cover" style="opacity: 0; transition: all 0.5s ease 0s;" :style="Status?'opacity: 1;':''"></div>
        <search-bar :Status="Status"></search-bar>
        <div class="content">
                <!-- swipe -->
            <mt-swipe :stopPropagation="true" :prevent="true" :auto="5000" class="banner">
                <mt-swipe-item v-for="(value, key, index) in banner" :key='key'>
                <a href="">
                    <img :src="imgBaseUrl + banner[key].pic" alt="">
                </a>
                </mt-swipe-item>
            </mt-swipe>
            <!-- swipe -->
            <!-- floor -->
            <div class="floor">
                <div class="nav_menu nav_menu_two">
                    <div class="nav_inner">
                        <div class="nav_box">
                            <a v-for="(value, key, index) in contentList" :key='key' href="https://m.111.com.cn/maps/index.html?pageId=660&type=release" class="nav_item">
                                <div class="nav_img">
                                    <img :src="imgBaseUrl + contentList[key].adPic" alt="">
                                </div>
                                <p>{{contentList[key].adTitle}}</p>
                            </a>
                        </div>
                    </div>
                    <div class="nav_img_bg default_pic">
                            <img :src="imgBaseUrl + bgcPic0">
                        </div>
                </div>
            </div>
            <!-- floor -->
            <!-- floor -->
            <div class="floor">
                <div class="activity_model default_img mb10">
                    <a href="https://m.111.com.cn/maps/index.html?pageId=1585&type=release">
                        <img :src="imgBaseUrl + bgcPic1" >
                    </a>
                </div>
            </div>
            <!-- floor -->
            <!-- news_model -->
            <div class="news_model">
                <div id="rollBox" class="news_model_box">
                    <div id="rollText" class="news_model_text">
                        <div class="news_model_content roll">
                            <a v-for="item in notice" :key='item.id' href="https://m.111.com.cn/maps/index.html?pageId=1581&type=release">{{item.title}}</a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- news_model -->  
        <!-- swipe -->
            <!-- grab_together -->  
            <div class="grab_together">
                <div class="grab_top">
                    <p>
                        <span class="grab_time_left">距时间仅剩<i>|</i></span>
                        <span class="time">
                            <span>0</span>
                            <span>0</span>
                            <span>:</span>
                            <span>0</span>
                            <span>0</span>
                            <span>:</span>
                            <span>0</span>
                            <span>0</span>
                        </span>
                    </p>
                    <a href=javascript:; class="grab_more">
                        <i class="icon iconfont icon-jiantouyou"></i>
                        <span>更多</span>
                    </a>
                </div>
                <div class="grab_list">
                    <ul id="list_ul_box" class="list_ul">
                        <li v-for="item in grabTogether.mobileFlashSaleNewItems" :key="item.id">
                            <div class="img_box default_pic">
                                <img :src="imgBaseUrl + item.mainimg3">
                            </div>
                            <p class="pro_name">{{item.flashSaleProductName}}</p>
                            <p class="price">¥{{item.promotionPrice}}</p>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- grab_together -->
        <!-- big_match --> 
            <div class="big_match default_img">
            <mt-swipe :stopPropagation="true" :prevent="true" :auto="5000" >
                <mt-swipe-item>
                <a href="">
                    <img :src="imgBaseUrl + picurl">
                    </a>
                </mt-swipe-item>
            </mt-swipe>
            </div> 
            <!-- big_match --> 
            <!-- good_topic --> 
            <div class="good_topic">
                <div class="good_top">
                    <p>精选专题</p>
                </div>
                <div class="good_list" v-for="(value, key, index) in goodTopic" :key="key">
                    <div class="good_banner default_img">
                        <a href="https://m.111.com.cn/cmsPage/20186026040f0802104901/index.html">
                            <img :src="imgBaseUrl + value.picUrl"  lazy="loaded">
                        </a>
                    </div>
                    <ul class="list_ul">
                        <li v-for="item in value.goodProducts" :key="item.id">
                            <a href="http://m.111.com.cn/yyw/wap/item/#/item/50087960">
                                <div class="img_box">
                                    <img :src="imgBaseUrl + item.productImg" alt="">
                                </div>
                                <p class="pro_name">{{item.productName}}</p>
                                <p class="price">¥{{item.sellPrice}}</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- good_topic --> 
            <!-- page_bottom --> 
            <div class="page_bottom">
                <p>广东壹号大药房连锁有限公司 020-31067218</p>
                <p>地址:广东省广州市越秀区共和西路1号2层</p>
            </div>
            <!-- page_bottom --> 
            <!-- server_box -->
          <server-box></server-box>
            <foot-guide>
                <li slot="tab_bar_img">
                    <a href= "/login" class="tab_bar_img">
                        <div class="tab_bar_box" >
                        <img :src="imgBaseUrl + bottombar.imgUrl"></div>
                    </a>
                </li>    
            </foot-guide>   
        </div> 
    </div>
    
</template>
<script>
import searchBar from '../../components/searchBar'
import footGuide from '../../components/footer/footGuide'
import { Swipe,SwipeItem,Lazyload} from 'mint-ui'
import serverBox from './children/serverBox'
import {downTime} from '../../../index.js'
import {getHeadData,getTailData} from '../../service/getData'
import {imgBaseUrl} from 'src/config/env'

export default {
    data(){
        return{
            Status: false,
            banner:[],
            notice: [],
            contentList: [],
            imgBaseUrl: imgBaseUrl,
            // imgBaseUrl: 'http://pngipye4r.bkt.clouddn.com/', //图片域名地址
            bigMatch: [],
            bottombar: {},
            goodTopic: [],
            grabTogether: {},
            picurl: '',
            activity_model: [],
            bgcPic0: '',
            bgcPic1: '',
        }
        },
    components:{
        searchBar,
        footGuide,
        Swipe,
        SwipeItem,
        serverBox
    },
    mounted(){
        downTime();
        getHeadData().then(res => {
            const data = res[0].data
            // console.log(res)
            this.banner = data.banner
            this.notice = data.notice
            this.contentList = data.templatedata[0].contentList
            this.activity_model = data.activity_model
            this.bgcPic0 = data.activity_model[0].bgcPic
            this.bgcPic1 = data.activity_model[1].bgcPic
        })
        // fetch('/img/mobile/201810/1541953163405143.png').then(res => {
        //     console.log(res)
        // }
        // )
        getTailData().then(res => {
            const data = res[0].data
            console.log(res)
            this.bigMatch = data.bigMatch
            this.bottombar = data.bottombar
            this.goodTopic = data.goodTopic
            this.grabTogether= data.grabTogether
            this.picurl = data.bigMatch[0].picurl
            
        })
    },
}
</script>

<style lang="scss" scoped>
    @import '../../style/mixin';
    #home{
        background-color: #f7f7 cf7;
    }
    .page{
        width: 100%;
    }
    .pre-home{
        background-color: $bc;
    }
    .header_cover {
        height: 1.2rem;
        background: #f9f9f9;
    }
    .header_cover {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 8;
        width: 100%;
        line-height: 1.2rem;
    }
  
 /* swipe */
  .banner {
    height: 3.97333333rem;
    img {
      min-width: 100%;
      max-width: 100%;
      max-height: 100%; 
    }
  }

 /* swipe */
 /* floor */
.content{
    .nav_menu {
        position: relative;
        min-height: 2.16rem;
        background: #fff;
        overflow: hidden;
        z-index: 2;
        .nav_inner {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            padding: .4rem 0 .48rem;
                .nav_box {
                    width: 100%;
                    overflow: hidden;
                    padding: 0 .13333333rem;
                    box-sizing: border-box;
                    a {
                        color: #333;
                        text-decoration: none;
                    }
                    .nav_item {
                        position: relative;
                        width: 20%;
                        float: left;
                        text-align: center;
                        vertical-align: middle;
                        .nav_img {
                            width: 1.17333333rem;
                            height: 1.17333333rem;
                            overflow: hidden;
                            margin: 0 auto;
                            img {
                                width: 1.17333333rem;
                                height: 1.17333333rem;
                            } 
                        }
                        p{
                            margin-top: .21333333rem;
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            word-break: break-all;
                            font-size: .34666667rem;
                            line-height: .48rem;
                            text-align: center;
                            box-sizing: border-box;
                                        }
                    }
                }
                .nav_box:first-child {
                    margin-top: 0;
                }
                .nav_box:last-child {
                    margin-top: .32rem;
                }
        }
    }
    .nav_menu_two {
        min-height: 4.66666667rem;
    }
}
 .default_pic {
        background: url(../../images/default_img.png) no-repeat 50%;
        background-size: 1.33333333rem auto;
    }
img {
    width: 100%;
    vertical-align: middle;
}
/* floor */

/* floor */
.content .activity_model {
    overflow: hidden;
    max-height: 5.33333333rem;
    img {
        width: 100%;
        max-height: 5.33333333rem;
}
}
.default_img {
    background: url(../../images/default_img.png) no-repeat 50%;
    background-size: 2.61333333rem auto;
}
/* floor */
/* news_model */
.content .news_model {
    position: relative;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAAgCAMAAADaHo1mAAABBVBMVEUAAAAuOl8mLlcoMVknLlmLUIomLlYnLlcoL1coMFgqL1k+Pn0mMVomLVYnLlYnLlcmLVYpLldWTG8mLVYsMVgpL1gwNmEmLVYmLVYnLVYnLVYmLVYnLlcoL1ctNF4mLlYnLVcpMVopMVonLlcnLlcmLVcnLlcmL1cqMlwmLVcmLlcnLVYoLVgnLlYpLljLKjDIJi3IJi4mLVcnLVfHJi3IJi3KJy/NLzI6Om7IJi7IJi0mLVbIJy0mLVYnLlcoLlcnLljIJy/IKjEoL1jRNDrIJi3IJi3IJy7IJy4oLlcnLlcnL1jIJy0nLlbIJy7IJy7JJy3JJy7LKC/IJy3IJi4mLVbHJi2mH/YjAAAAVXRSTlMACsg/QgOgb0Y6KwQn+pHg90QG1yIxDvPs58SxiUoW5JwfGtPNvJY1EreOeF9OPR/79dHLsnU6EQjUyKWfg4BmVkIpJQvq4dqMc2pcUqqWfmRbS7+n0gl+0AAAA2NJREFUSMft1WlX2kAUBuA30iCkBSKRVTZlUdlEqeJWtXVptXbvzP//KZ17Z5KBJl97Tk9Pny+ZSWC23HuDf8rb91/wBxU/SHkJttMPgvoONK8eBP1TWDue5zn8D9XYjo1TajabZcS9O5NSHtOAo3xPKBd5LaDOIJ8fhwupCeHv8dTqQR2h0046faWuXXW3FRvePZ5J5TvQ9EWyANq1aqe5lVKtI4QeVe8N4KhLITb+wQ/JDuBURbJcBmyvrTq70QRVF5pTU71aoUCP/YIxh/btULJDF87WWqKLKbQtNcCaeTs0cdYcwScRZ3a6+CmNc6zanU6nPIDVoAWWzNvwozG8rkhQ2+TgfJChz9DMtptC2dpVSmXzYEC3nmD0qbcRzltLk5w6zTTrjPZA7hZ3C3NEX3U8ncuHZzrVgrA6FKi3dZ4SoRvqVrN6Kh3XLfvil5xI7YRf+L1qzU70qqwh4Pk8vmNjj+PZLwPV+fXLaNed2AQfJJvdUed1eFqBWFYBnujacGGVKrQFYLuZMjrqRj4VChPuvWRnvAHdfq3+lclsaHzyLtJqsDFWbKgZ9oGBSNYySSy1S31eZ9T+BmZzqw0ElcYeUFzfOuregHH4XAE9kcCm+bFkXCjy+7fu8aE8dzmpJuOPZbopaJ3FIS2oXOfYjLhPU5zmRJKjsFCdS+0tJ6d/VTy4fMero+QcmXAcmvE40YpYcfoiiedCW8yktgA4X4KUjZEqrZrKx7VNtDYH5ONFo4SQc7O+aryJyFepPQAlweYgI2qOKbZtSRhTWO5Gjx+hbbbjtWsdjOPSBo5gnJy3Pp08hwrd46zM0r2PthLlbsHSSdUx3MPdodToczYXUaLsU/Dza1qnOkCN7RolAgxK9CuwtkgwgfYsje90GmuiMnBBhr1eXf+GkqdPxe2I9uSC6eDvcWtHtbrOMgqFFLRLaRyAtF7id2uUner6hgLAfg2b0clNYvWBtuSYuLuX2r1ezCvCYVLc1DZy+uBLVCgnryLUF1OYmYfZJTR3Nyp09h3DC8wL2obb8JcrUZk/NXEv+DSTngyiQmfTrFUNc9zlVVk3gJOUrm0+h0xSEHkrhW529gw+BFK5KAOflpbfz/IXOG7+CmwU/5hNkMR9ScC4udx3YmzFKKcyK0pF/PfX+AX6R1xiyWnDBQAAAABJRU5ErkJggg==) no-repeat .4rem #fff;
    background-size: 1.28rem auto;
    height: 1.08rem;
    overflow: hidden;
}
.content .news_model .news_model_box {
    position: relative;
    margin: 0 .37333333rem;
    height: 100%;
    overflow: hidden;
    border-top: 1px solid #eee;
}
.content .news_model .news_model_text {
    position: absolute;
    padding-left: 1.62666667rem;
    left: 0;
    top: 50%;
    width: 100%;
    box-sizing: border-box;
    height: .45333333rem;
    transform: translateY(-50%);
    overflow: hidden;
}
.content .news_model a {
    height: .45333333rem;
    line-height: .45333333rem;
    color: #4a4a4a;
    display: block;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
@-webkit-keyframes roll {
   0% {
        -webkit-transform: translateY(0);
        transform: translateY(0)
    }
    25% {
       -webkit-transform: translateY(0);
        transform: translateY(0)
    }
    30% {
        -webkit-transform: translateY(-33%);
        transform: translateY(-33%)
    }
    70% {
            -webkit-transform: translateY(-33%);
            transform: translateY(-33%)
        }

    75% {
        -webkit-transform: translateY(-66%);
        transform: translateY(-66%)
    }
    100% {
         -webkit-transform: translateY(-66%);
        transform: translateY(-66%)
    }
}

@keyframes rollout {
    0% {
        -webkit-transform: translateY(0);
        transform: translateY(0)
    }
    25% {
       -webkit-transform: translateY(0);
        transform: translateY(0)
    }
    30% {
        -webkit-transform: translateY(-33%);
        transform: translateY(-33%)
    }
    70% {
            -webkit-transform: translateY(-33%);
            transform: translateY(-33%)
        }

    75% {
        -webkit-transform: translateY(-66%);
        transform: translateY(-66%)
    }
    100% {
         -webkit-transform: translateY(-66%);
        transform: translateY(-66%)
    }
}

.content .news_model .roll {
    -webkit-animation: rollout 6s;
    animation: rollout 10s  linear 0s infinite
}

/* news_model */
/* grab_together */
    /* grab_top */
.content .grab_together {
    margin-top: .21333333rem;
    margin-bottom: .26666667rem;
}
.content .grab_together .grab_top {
    position: relative;
    height: 1.30666667rem;
    padding: 0 2.26666667rem 0 2.34666667rem;
    background: url(../../images/grab_top.png) no-repeat .32rem .37333333rem #fff;
    background-size: 1.6rem auto;
    border-bottom: 1px solid #eee;
}
.content .grab_together .grab_top p {
    color: #929292;
    height: 1.30666667rem;
    line-height: 1.30666667rem;
}
.content .grab_together .grab_top p .grab_time_left {
    position: relative;
    color: #929292;
}
.content .grab_together .grab_top p .grab_time_left i {
    color: #e5e5e5;
    padding: 0 .26666667rem;
}
.content .grab_together .grab_top p .time {
    color: #f56a60;
    font-size: .37333333rem;
}
 .content .grab_together .grab_top a {
    text-align: right;
    color: #929292;
    font-size: .32rem;
    float: right;
}
.content .grab_together .grab_top a {
    position: absolute;
    right: .26666667rem;
    top: 0;
    width: 2.26666667rem;
    height: 1.30666667rem;
    line-height: 1.30666667rem;
}
.content .grab_together .grab_top .iconfont{
    text-align: right;
    color: #929292;
    font-size: .32rem;
    float: right;
}
.content .grab_together .grab_top a span {
    width: 1.86666667rem;
    height: 1.30666667rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: block;
    float: right;
    text-align: right;
}
    /* grab_top */
     /* grab_list */
.content .grab_together .grab_list {
    padding: 0 0 .26666667rem;
    position: relative;
    background: #fff;
    height: 4.29333333rem;
}
.content .grab_together .grab_list .list_ul {
    width: 100%;
    overflow-y: hidden;
    overflow-x: auto;
    white-space: nowrap;
}
.content .grab_together .grab_list .list_ul li:first-child {
    margin-left: .26666667rem;
}
.content .grab_together .grab_list .list_ul li {
    width: 2.66666667rem;
    margin: 0 .26666667rem 0 0;
    display: inline-block;
}
.content .grab_together .grab_list .list_ul li .img_box {
    position: relative;
    text-align: center;
    margin: .26666667rem .13333333rem;
}
.default_pic {
    background: url(../../images/default_img.png) no-repeat 50%;
    background-size: 1.33333333rem auto;
}
.content .grab_together .grab_list .list_ul li .pro_name {
    height: .96rem;
    line-height: .48rem;
    font-size: .34666667rem;
    color: #333;
    padding: 0 .13333333rem;
    width: 2.66666667rem;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}
.content .grab_together .grab_list .list_ul li .price {
    color: #f35448;
    font-size: .4rem;
    padding: .13333333rem .13333333rem 0;
}
.content .grab_together .grab_list .list_ul li .img_box img {
    height: 2.13333333rem;
    text-align: center;
    width: auto;
    max-width: 100%;
}
.content .grab_together .grab_list .list_ul .grab_all {
    position: relative;
    margin: 0 0 4.26666667rem;
    width: .64rem;
    vertical-align: text-bottom;
}
.content .grab_together .grab_list .list_ul .grab_all .grab_all_box {
    position: absolute;
    left: 0;
    top: .26666667rem;
    width: .26666667rem;
    height: 1.73333333rem;
    padding: .26666667rem .18666667rem;
    background-color: #f5f5f5;
    color: #999;
    font-size: .26666667rem;
    white-space: normal;
    -webkit-border-radius: 6px 0 0 6px;
    border-radius: 6px 0 0 6px;
    text-align: center;
    display: block;
    overflow: hidden;
    line-height: .32rem;
}
.content .grab_together .grab_list .list_ul .grab_all .icon-jiantouyou {
    display: block;
    padding-top: .13333333rem;
    font-size: .26666667rem;
    text-align: right;
    color: #666;
}
    /* grab_list */
/* grab_together */
    /* big_match*/
.content .big_match {
    margin: 0 0 .26666667rem;
    width: 100%;
    height: 3.46666667rem;
}
    /* big_match*/
    /* good_topic*/
.content .good_topic {
    background: #fff;
    overflow: hidden;
    padding-bottom: .26666667rem;
}
         /* good_topic*/
.content .good_topic .good_top {
    height: 1.2rem;
    padding: 0 .4rem 0 1.06666667rem;
    background: url(../../images/default_img.png) no-repeat .4rem #fff;
    background-size: .48rem auto;
    font-size: .4rem;
}
.content .good_topic .good_top p {
    color: #4a4a4a;
    height: 1.2rem;
    line-height: 1.2rem;
}
         /* good_topic*/
         /* good_list*/
.content .good_topic .good_list {
    padding: .26666667rem .26666667rem 0;
    position: relative;
    overflow: hidden;
}
.content .good_topic .good_banner {
    min-height: 2.61333333rem;
    overflow: hidden;
}
.content .good_topic .good_banner img {
    height: 100%;
    width: 100%;
    -webkit-border-radius: 5px;
    border-radius: 5px;
}
.content .good_topic .good_list .list_ul {
    width: 100%;
    overflow-y: hidden;
    overflow-x: auto;
    white-space: nowrap;
}
.content .good_topic .good_list .list_ul li {
    width: 33.333333%;
    height: 4.53333333rem;
    display: inline-block;
    padding: 0 .13333333rem;
    overflow: hidden;
    box-sizing: border-box;
}
.content .good_topic .good_list .list_ul li .img_box {
    text-align: center;
    padding: .26666667rem 0;
    background: url(../../images/default_img.png) no-repeat 50%;
    background-size: 1.33333333rem auto;
}
.content .good_topic .good_list .list_ul li .img_box img {
    height: 2.13333333rem;
    text-align: center;
    width: auto;
    max-width: 100%;
}
.content .good_topic .good_list .list_ul li .pro_name {
    font-size: .34666667rem;
    color: #333;
    padding: 0;
    height: 1.06666667rem;
    line-height: .53333333rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    white-space: normal;
}
.content .good_topic .good_list .list_ul li .price {
    color: #f35448;
    font-size: .4rem;
    padding-top: .13333333rem;
}
         /* good_list*/
/* good_topic*/
    /* page_bottom*/
.page_bottom {
    padding: .53333333rem .4rem 1.86666667rem;
    text-align: center;
}
.page_bottom p {
    line-height: .58666667rem;
    color: #919191;
    font-size: .29333333rem;
    text-align: center;
}
 /*server_box*/

</style>


<style lang="scss" >
/* swipe-indicator */
.banner {
    .mint-swipe-indicators {
        left: inherit;
        right: .26666667rem;
        transform: translateX(0);
        position: absolute;
        bottom: .24rem;
        li{
            width: .21333333rem;
            height: .21333333rem;
            margin: .08rem;
        }
    }
        .mint-swipe-indicator{
            display: inline-block;
            border-radius: 50%;
            background: #fff;
            opacity: .5;
        &.is-active {
            background: #fff;
            opacity: 1;
        }
    }
}
</style>
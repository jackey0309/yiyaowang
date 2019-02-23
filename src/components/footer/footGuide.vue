<template>
    <div class="footer_tab_bar">
        <div class="tab_bar_ul">
        <li>
            <a href= "/" :class="$route.name==='home'?'active':''">
                <i :class="['icon','iconfont','icon_home',$route.name==='home'?'active':'']"></i>
                <span class="tab_bar_name">首页</span>
            </a>
        </li>
       <li>
            <router-link to= "/category" :class="$route.name==='category'?'active':''">
                <i :class="['icon','iconfont','icon_search',$route.name==='category'?'active':'']"></i>
                <span class="tab_bar_name">找药</span>
            </router-link>
        </li>
        <li>
            <a href="https://m.111.com.cn/yyw/activities/fissionv2/#/index?activityNo=DIVISION7" data-ywpoint="0_0_0_activity_5_0" class="tab_bar_img">
                <div class="tab_bar_box">
                <img src="../../images/tab_bar_box.png"></div>
            </a>
            </li>
        <li>
            <router-link to= "/cart" :class="$route.name==='cart'?'active':''">
                <i :class="['icon','iconfont','icon_shopcar',$route.name==='cart'?'active':'']"></i>
                <span class="tab_bar_name">购物车</span>
            </router-link>
        </li>
        <li>
            <router-link to= "/personalcenter" :class="$route.name==='personalcenter'?'active':''">
                <i :class="['icon','iconfont','icon_user',$route.name==='personalcenter'?'active':'']"></i>
                <span class="tab_bar_name">我的</span>
            </router-link>
        </li>
        </div>
    </div>
</template>

<script>
export default {
   
}
</script>

<style lang="scss" scoped>
.footer_tab_bar{
    position: fixed;
    height: 1.46666667rem;
    left: 0;
    bottom: 0;
    width: 100%;
    background: #fff;
    z-index: 10;
    .tab_bar_ul {
        border-top: 1px solid #d8d8d8;
        display: -ms-flexbox;
        display: flex;
        color: #333;
        }
        li {
        flex: 1;
        width: 100%;
        text-align: center;
        cursor: pointer;
            .iconfont {
                font-size: .53333333rem;
                color: #f66;
                width: .66666667rem;
                height: .61333333rem;
                line-height: .61333333rem;
                padding-top: 0;
                padding-bottom: 0;
                font-size: .32rem;
                margin: .10666667rem auto 0;
                display: block;
                background-image: url(../../images/tabbar.png);
                background-repeat: no-repeat;
                background-size: 9.97333333rem auto;
            }
            .iconfont:before {
                clear: both;
                content: "";
                display: block;
                visibility: hidden;
            }
            .tab_bar_name {
                text-align: center;
            }
            .tab_bar_name {
                display: block;
                font-size: .32rem;
            }
            a {
                display: block;
                padding-top: .08rem;
                &.active{
                    color: #f66;
                 }
            }
            .icon_home {
                background-position: -1.01333333rem -1.6rem;
                &.active{
                    background-position: -1.01333333rem -.26666667rem;
                }
            }

            .icon_search {
                background-position: -2.88rem -1.58666667rem;
                &.active{
                     background-position: -2.88rem -.24rem;
                }
            }
            .icon_shopcar {
                background-position: -6.56rem -1.58666667rem;
                &.active{
                    background-position: -6.56rem -.24rem;
                }
            }
            .icon_user {
                background-position: -8.42666667rem -1.58666667rem;
                &.active{
                    background-position: -8.42666667rem -.24rem;
                }
            }
            .tab_bar_img {
                position: fixed;
                left: 40%;
                bottom: 0;
                width: 20%;
                height: 1.73333333rem;
                z-index: 10;
                padding: 0;
                .tab_bar_box {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                    margin: 0 auto;
                }
                img {
                    position: absolute;
                    top: 0;
                    left: 50%;
                    width: auto;
                    height: 100%;
                    -webkit-transform: translate(-50%);
                    -ms-transform: translate(-50%);
                    transform: translate(-50%);
                }
            }
    }
}
</style>



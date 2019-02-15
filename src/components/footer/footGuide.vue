<template>
    <div class="footer_tab_bar">
        <div class="tab_bar_ul">
        <li>
            <a href= "/" :class="$route.path.indexOf('home') !== -1? 'active' : ''">
                <i :class="$route.path.indexOf('home') !== -1? ' icon_home' : 'i_home'" class="icon iconfont"></i>
                <span class="tab_bar_name">首页</span>
            </a>
        </li>
       <li>
            <router-link to= "/category" :class="$route.path.indexOf('category') !== -1? 'active' : ''">
                <i :class="$route.path.indexOf('category') !== -1? ' i_search' : 'icon_search'" class="icon iconfont"></i>
                <span class="tab_bar_name">找药</span>
            </router-link>
        </li>
        <li>
            <router-link to= "/cart" :class="$route.path.indexOf('cart') !== -1? 'active' : ''">
                <i :class="$route.path.indexOf('cart') !== -1? ' i_shopcar ' : 'icon_shopcar'" class="icon iconfont"></i>
                <span class="tab_bar_name">购物车</span>
            </router-link>
        </li>
        <li>
            <router-link to= "/personalcenter" :class="$route.path.indexOf('personalcenter') !== -1? 'active' : ''">
                <i :class="$route.path.indexOf('personalcenter') !== -1? ' i_user ' : 'icon_user'" class="icon iconfont"></i>
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
            a {
                display: block;
                padding-top: .08rem;
            }
            .icon_home {
                background-position: -1.01333333rem -.26666667rem
            }

            .icon_search {
                background-position: -2.88rem -1.58666667rem
            }

            .icon_shopcar {
                background-position: -6.56rem -1.58666667rem
            }

            .icon_user {
                background-position: -8.42666667rem -1.58666667rem
            }
    }
}

.i_home {
    background-position: -1.01333333rem -1.6rem
    }
.i_search {
    background-position: -2.88rem -.24rem
    }
.i_shopcar {
    background-position: -6.56rem -.24rem
    }
.i_user {
    background-position: -8.42666667rem -.24rem
    }
.footer_tab_bar .tab_bar_ul li .iconfont {
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
.active {
    color: #f66;
}

.footer_tab_bar .tab_bar_ul li .iconfont:before {
    clear: both;
    content: "";
    display: block;
    visibility: hidden;
}
.footer_tab_bar .tab_bar_ul li .tab_bar_name {
    text-align: center;
}
.footer_tab_bar .tab_bar_ul li .tab_bar_name {
    display: block;
    font-size: .32rem;
}
</style>



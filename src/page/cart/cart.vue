<template>
   <div id="cartDemand">
        <head-top id="cartDemandHeader" class="cart_common_header" goBack="true" commonMore="true">
                <ul slot="cart_tab " class="common_tt_tab ">
                    <li  :class='{activity_show: changeShowType =="cartDemand"}' @click="changeShowType='cartDemand'">
                        <a>购物车</a>
                    </li>
                     <li class :class='{activity_show: changeShowType =="demandList"}' @click="changeShowType='demandList'">
                        <a>需求清单</a>
                    </li>
                </ul> 
        </head-top>
       <div id="cart" v-show="changeShowType =='cartDemand'">
           <div class="page">
               <div class="login_bar" style="">
                   <span class="bar_info">
						登录后可同步电脑与手机购物车中的商品
					</span> 
                    <span class="login_btn">登录</span>
                </div>
               <div class="cart_container">
                   <div class="cart_empty">
                       <div class="cart_ico">
                        <i class="icon iconfont icon-shop_cart"></i>
                       </div>
                       <p class="empty_warm">购物车还是空的</p>
                       <span class="see_btn">去看看</span>
                   </div>
                   <div style>
                       <div class="cart_other">
                           <div class="other_tt">
                               <span class="tt_name"> 浏览过的商品 </span>
                           </div>
                            <div class="cart_other_list">
                           <ul class="list_ul" style="width: 13.5467rem;">
                               <li>
                                   <div class="img_box">
                                       <img src="https://p3.maiyaole.com/img/item/201707/03/200_20170703141725257.jpg" alt="">
                                   </div>
                                   <p class="pro_name">保列治 非那雄胺片 5mg*10片</p>
                                   <span class="price">¥62.00</span>
                               </li>
                                <li>
                                   <div class="img_box">
                                       <img src="https://p3.maiyaole.com/img/item/201707/03/200_20170703141725257.jpg" alt="">
                                   </div>
                                   <p class="pro_name">保列治 非那雄胺片 5mg*10片</p>
                                   <span class="price">¥62.00</span>
                               </li>
                                <li>
                                   <div class="img_box">
                                       <img src="https://p3.maiyaole.com/img/item/201707/03/200_20170703141725257.jpg" alt="">
                                   </div>
                                   <p class="pro_name">保列治 非那雄胺片 5mg*10片</p>
                                   <span class="price">¥62.00</span>
                               </li>
                                <li>
                                   <div class="img_box">
                                       <img src="https://p3.maiyaole.com/img/item/201707/03/200_20170703141725257.jpg" alt="">
                                   </div>
                                   <p class="pro_name">保列治 非那雄胺片 5mg*10片</p>
                                   <span class="price">¥62.00</span>
                               </li>
                                <li>
                                   <div class="img_box">
                                       <img src="https://p3.maiyaole.com/img/item/201707/03/200_20170703141725257.jpg" alt="">
                                   </div>
                                   <p class="pro_name">保列治 非那雄胺片 5mg*10片</p>
                                   <span class="price">¥62.00</span>
                               </li>
                                <li>
                                   <div class="img_box">
                                       <img src="https://p3.maiyaole.com/img/item/201707/03/200_20170703141725257.jpg" alt="">
                                   </div>
                                   <p class="pro_name">保列治 非那雄胺片 5mg*10片</p>
                                   <span class="price">¥62.00</span>
                               </li>
                           </ul>
                       </div>
                       </div>
                      
                       <div class="cart_other">
                           <div class="other_tt">
                               <span class="tt_name"> 常备用药 </span>
                                <span class="more_link">更多
                                    <i class="icon iconfont icon-jiantouyou"></i>
                                </span>
                           </div>
                           <div class="cart_other_list">
                               <ul class="list_ul" style="width: 57.5733rem;">
                                   <li>
                                       <div class="img_box">
                                           <img src="https://p4.maiyaole.com/img/item/201808/10/200_20180810095613128.jpg" alt="">
                                       </div>
                                       <p class="pro_name">三九/999 感冒灵颗粒 10g*9袋</p>
                                       <span class="price">¥12.30</span>
                                   </li>
                                    <li>
                                       <div class="img_box">
                                           <img src="https://p4.maiyaole.com/img/item/201808/10/200_20180810095613128.jpg" alt="">
                                       </div>
                                       <p class="pro_name">三九/999 感冒灵颗粒 10g*9袋</p>
                                       <span class="price">¥12.30</span>
                                   </li>
                                    <li>
                                       <div class="img_box">
                                           <img src="https://p4.maiyaole.com/img/item/201808/10/200_20180810095613128.jpg" alt="">
                                       </div>
                                       <p class="pro_name">三九/999 感冒灵颗粒 10g*9袋</p>
                                       <span class="price">¥12.30</span>
                                   </li>
                                    <li>
                                       <div class="img_box">
                                           <img src="https://p4.maiyaole.com/img/item/201808/10/200_20180810095613128.jpg" alt="">
                                       </div>
                                       <p class="pro_name">三九/999 感冒灵颗粒 10g*9袋</p>
                                       <span class="price">¥12.30</span>
                                   </li>
                                    <li>
                                       <div class="img_box">
                                           <img src="https://p4.maiyaole.com/img/item/201808/10/200_20180810095613128.jpg" alt="">
                                       </div>
                                       <p class="pro_name">三九/999 感冒灵颗粒 10g*9袋</p>
                                       <span class="price">¥12.30</span>
                                   </li>
                                    <li>
                                       <div class="img_box">
                                           <img src="https://p4.maiyaole.com/img/item/201808/10/200_20180810095613128.jpg" alt="">
                                       </div>
                                       <p class="pro_name">三九/999 感冒灵颗粒 10g*9袋</p>
                                       <span class="price">¥12.30</span>
                                   </li>
                                    <li>
                                       <div class="img_box">
                                           <img src="https://p4.maiyaole.com/img/item/201808/10/200_20180810095613128.jpg" alt="">
                                       </div>
                                       <p class="pro_name">三九/999 感冒灵颗粒 10g*9袋</p>
                                       <span class="price">¥12.30</span>
                                   </li>
                                    <li>
                                       <div class="img_box">
                                           <img src="https://p4.maiyaole.com/img/item/201808/10/200_20180810095613128.jpg" alt="">
                                       </div>
                                       <p class="pro_name">三九/999 感冒灵颗粒 10g*9袋</p>
                                       <span class="price">¥12.30</span>
                                   </li>
                                    <li>
                                       <div class="img_box">
                                           <img src="https://p4.maiyaole.com/img/item/201808/10/200_20180810095613128.jpg" alt="">
                                       </div>
                                       <p class="pro_name">三九/999 感冒灵颗粒 10g*9袋</p>
                                       <span class="price">¥12.30</span>
                                   </li>
                                    <li>
                                       <div class="img_box">
                                           <img src="https://p4.maiyaole.com/img/item/201808/10/200_20180810095613128.jpg" alt="">
                                       </div>
                                       <p class="pro_name">三九/999 感冒灵颗粒 10g*9袋</p>
                                       <span class="price">¥12.30</span>
                                   </li>
                                    <li>
                                       <div class="img_box">
                                           <img src="https://p4.maiyaole.com/img/item/201808/10/200_20180810095613128.jpg" alt="">
                                       </div>
                                       <p class="pro_name">三九/999 感冒灵颗粒 10g*9袋</p>
                                       <span class="price">¥12.30</span>
                                   </li>
                                    <li>
                                       <div class="img_box">
                                           <img src="https://p4.maiyaole.com/img/item/201808/10/200_20180810095613128.jpg" alt="">
                                       </div>
                                       <p class="pro_name">三九/999 感冒灵颗粒 10g*9袋</p>
                                       <span class="price">¥12.30</span>
                                   </li>
                                    <li>
                                       <div class="img_box">
                                           <img src="https://p4.maiyaole.com/img/item/201808/10/200_20180810095613128.jpg" alt="">
                                       </div>
                                       <p class="pro_name">三九/999 感冒灵颗粒 10g*9袋</p>
                                       <span class="price">¥12.30</span>
                                   </li>
                                    <li>
                                       <div class="img_box">
                                           <img src="https://p4.maiyaole.com/img/item/201808/10/200_20180810095613128.jpg" alt="">
                                       </div>
                                       <p class="pro_name">三九/999 感冒灵颗粒 10g*9袋</p>
                                       <span class="price">¥12.30</span>
                                   </li>
                                    <li>
                                       <div class="img_box">
                                           <img src="https://p4.maiyaole.com/img/item/201808/10/200_20180810095613128.jpg" alt="">
                                       </div>
                                       <p class="pro_name">三九/999 感冒灵颗粒 10g*9袋</p>
                                       <span class="price">¥12.30</span>
                                   </li>
                                    <li>
                                       <div class="img_box">
                                           <img src="https://p4.maiyaole.com/img/item/201808/10/200_20180810095613128.jpg" alt="">
                                       </div>
                                       <p class="pro_name">三九/999 感冒灵颗粒 10g*9袋</p>
                                       <span class="price">¥12.30</span>
                                   </li>
                                    <li>
                                       <div class="img_box">
                                           <img src="https://p4.maiyaole.com/img/item/201808/10/200_20180810095613128.jpg" alt="">
                                       </div>
                                       <p class="pro_name">三九/999 感冒灵颗粒 10g*9袋</p>
                                       <span class="price">¥12.30</span>
                                   </li>
                               </ul>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>
       <div id="demandList" v-show="changeShowType =='demandList'">
           <div class="page">
               <div class="demand_container demand_has_bottom_bar">
                   <div class="cart_empty">
                       <div class="cart_ico">
                        <i class="icon iconfont icon-list"></i>
                       </div>
                       <p class="empty_warm">需求清单还是空的</p>
                       <span class="see_btn">去看看</span>
                   </div>
               </div>
           </div>
       </div>
        <cart-foot></cart-foot>
   </div>
</template>

<script>
import headTop from '../../components/header/head'
import cartFoot from './children/cartFoot'

export default {
    data(){
        return{
            changeShowType: 'cartDemand',//切换显示商品或者评价
        }
    },
    
    components:{
        headTop,
        cartFoot
    },
}
</script>

<style lang="scss" scoped>
    @import '../../style/mixin';
/*cart_common_header*/
    .page-navbar{
            height: 1.1821875rem;
        }
    .cart_common_header {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 8;
        width: 100%;
        height: 1.14666667rem;
        line-height: 1.14666667rem;
        font-size: 0.4rem;
        text-align: center;
        background: #F9F9F9;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        z-index: 9999;
    }
    .cart_common_header .common_tt_tab {
        font-size: 0.42666667rem;
        .activity_show{
                color: #FF6666;
                border-bottom: 2px solid #FF6666;
            }
    }
    .cart_common_header .common_tt_tab li {
        display: inline-block;
        height: 1.12rem;
        color: #414141;
        min-width: 1.6rem;
        padding: 0 0.26666667rem;
        cursor: pointer;
    }
    /*cart*/
    .page {
        width: 100%;
    }
    /*login_bar*/
    .login_bar {
        height: 0.69333333rem;
        line-height: 0.69333333rem;
        width: 100%;
        position: fixed;
        top: 1.14666667rem;
        left: 0;
        background: #fff;
        padding: 0.26666667rem 0;
        font-size: 0.34666667rem;
        z-index: 100;
        .bar_info {
            height: 0.72rem;
            position: absolute;
            left: 0.53333333rem;
            color: #999;
            display: inline-block;
            padding-right: 2.13333333rem;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .login_btn {
            width: 1.44rem;
            height: 0.72rem;
            display: inline-block;
            color: #fff;
            background: #FF6666;
            text-align: center;
            -webkit-border-radius: 2px;
            border-radius: 2px;
            position: absolute;
            right: 0.53333333rem;
            top: 0.26666667rem;
            cursor: pointer;
        }
    }
    /*cart_container*/
    .cart_container {
        padding-top: 1.1466666666666667rem;
    }
    .cart_empty {
        height: 4rem;
        padding: 1.6rem;
        text-align: center;
        .cart_ico {
            position: relative;
            width: 3.86666667rem;
            height:  0.56rem;
            display: inline-block;
            .iconfont {
                font-size: 0.56rem;
                padding: 0 0.21333333rem;
                background-color: #F0F0F0;
                position: absolute;
                z-index: 5;
                left: 50%;
                margin-left: -0.48rem;
                color: #ccc;
            }
        }
        .cart_ico:after {
            content: "";
            width: 3.86666667rem;
            height: 1px;
            display: inline-block;
            background: #ccc;
            position: absolute;
            top: 0.26666667rem;
            left: 0;
        }
        .empty_warm {
            font-size: 0.34666667rem;
            margin-top: 0.66666667rem;
            color: #999;
        }
        .see_btn {
            height: 0.58666667rem;
            line-height: 0.58666667rem;
            width: 1.73333333rem;
            cursor: pointer;
            border: 1px solid #FF6666;
            color: #FF6666;
            border-radius: 3px;
            display: inline-block;
            margin-top: 0.66666667rem;
        }
    }
    .cart_other {
        background: #fff;
        margin-bottom: 0.26666667rem;
        .other_tt {
            height: 1.17333333rem;
            border-bottom: 1px solid #eee;
            position: relative;
            .tt_name {
                height: 1.14666667rem;
                line-height: 1.14666667rem;
                font-size: 0.42666667rem;
                width: 2.98666667rem;
                color: #FF6666;
                display: inline-block;
                border-bottom: 2px solid #FF6666;
                position: absolute;
                left: 0.26666667rem;
            }
        }    
        .cart_other_list {
            height: 4rem;
            position: relative;
            padding: 0.26666667rem;
            overflow-y: hidden;
            overflow-x: scroll;
            .list_ul {
                position: absolute;
                height: 3.73333333rem;
                width: 100%;
                white-space: nowrap;
                width: 20rem;
                li {
                    width: 2.98666667rem;
                    margin: 0 0.26666667rem 0 0.13333333rem;
                    float: left;
                    .img_box {
                        text-align: center;
                        padding: 0.26666667rem;
                        img {
                            height: 2.13333333rem;
                            text-align: center;
                        }
                    }   .pro_name {
                            color: #333;
                            padding: 0.13333333rem;
                            white-space: nowrap;
                            width: 2.98666667rem;
                            overflow: hidden;
                            text-overflow: ellipsis;                        
                        }
                }       .price {
                            color: #FF6666;
                            padding-left: 0.13333333rem;
                }   
            }
        }
    }
    .cart_other .other_tt .more_link {
        line-height: 1.17333333rem;
        font-size: 0.37333333rem;
        position: absolute;
        right: 0.26666667rem;
        color: #666;
        .iconfont {
            font-size: 0.32rem;
            color: #ccc;
        }
    }
    /*demand*/
    .demand_container {
        padding-top: 1.1466666666666667rem;
        }
    .demand_has_bottom_bar {
        padding-bottom: 1.4933333333333334rem;
        }

</style>



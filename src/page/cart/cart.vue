<template>
   <div id="cartDemand">
        <head-top goBack="true">
            <header slot="header" id="cartDemandHeader" class="cart_common_header">
                <a href="" class="common_left_btn" @click="$router.go(-1)">
                    <i class=" icon iconfont icon-fanhui "></i>
                </a>
                <ul class="common_tt_tab ">
                    <li class="cur">
                        <a href="">购物车</a>
                    </li>
                     <li class>
                        <a href="">需求清单</a>
                    </li>
                </ul> 
                <div class="common_right_btn">
                    <span>
                        <i class="icon iconfont icon-points"></i>
                    </span>
                </div> 
            </header>
        </head-top>
       <div id="cart">
           <div class="page" style>
               <div class="login_bar" style="display: none;"></div>
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
       <div id="demandList"></div>
       <div></div>
   </div>
</template>

<script>
import headTop from '../../components/header/head'

export default {
    conponents:{
        headTop,
    }
}
</script>

<style lang="scss" scoped>
    @import '../../style/mixin';
    * {
        box-sizing: content-box;
    }
/*cart_common_header*/
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
    .cart_common_header .common_left_btn {
        position: absolute;
        top: 0;
        left: 0.21333333rem;
        padding-left: 0.21333333rem;
        height: 100%;
        color: #999;
    }
    .cart_common_header.iconfont {
        font-size: 0.53333333rem;
        color: #666;
        }
    .page-navbar{
        height: 1.1821875rem;
    }
    .cart_common_header .common_tt_tab {
        font-size: 0.42666667rem;
    }
    .cart_common_header .common_tt_tab .cur {
        color: #FF6666;
        border-bottom: 2px solid #FF6666;
    }
    .cart_common_header .common_tt_tab li {
        display: inline-block;
        height: 1.12rem;
        color: #414141;
        min-width: 1.6rem;
        padding: 0 0.26666667rem;
        cursor: pointer;
    }
    .cart_common_header .common_right_btn {
        position: absolute;
        top: 0;
        right: 0.4rem;
        color: #999;
    }
    .cart_common_header .common_right_btn a, .cart_common_header .common_right_btn span{
        margin-left: 0.26666667rem;
        color: #999;
        float: right;
    }
    .cart_common_header .iconfont {
        font-size: 0.53333333rem;
        color: #666;
    }
    /*cart*/
    .page {
        width: 100%;
    }
    /*login_bar*/
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
        margin-top: 0.26666667rem;
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
</style>



<template>
    <div class="page">
        <head-top goBack="true" commonMore="true" class="pro_header">
            <ul slot="item_tab" class="common_tt_tab">
                <li class="cur">商品</li>
                <li class>详情</li>
                <li class>评价</li>
            </ul>
        </head-top>
        <!-- pro_content -->
        <div class="content pro_content">
            <div>
                <!-- pro_sider -->
                <div class="pro_sider">
                    <div class>
                        <div class="srcoll_img">
                            <!-- swipe -->
                            <mt-swipe :stopPropagation="true" :prevent="true" :auto="5000" class="banner">
                                <mt-swipe-item>
                                <a href="">
                                    <img src="https://p4.maiyaole.com/img/item/201806/05/org_20180605174718138.jpg" alt="">
                                </a>
                                </mt-swipe-item>
                                <mt-swipe-item>
                                <a href="">
                                    <img src=" https://p3.maiyaole.com/img/201503/10/org_20150310174213305.jpg?v=1" alt="">
                                </a>
                                </mt-swipe-item>
                                <mt-swipe-item>
                                <a href="">
                                    <img src="https://p3.maiyaole.com/img/item/201806/05/org_20180605174719153.jpg" alt="">
                                </a>
                                </mt-swipe-item>
                                <mt-swipe-item>
                                <a href="">
                                    <img src="https://p3.maiyaole.com/img/201503/10/org_20150310174345346.jpg?v=1" alt="">
                                </a>
                                </mt-swipe-item>
                                <mt-swipe-item>
                                <a href="">
                                    <img src="https://p2.maiyaole.com/img/201503/10/org_20150310174206613.jpg?v=1" alt="" lazy
                                            ="loaded">
                                </a>
                                </mt-swipe-item>
                            </mt-swipe>
                            <!-- swipe -->
                        </div>
                    </div>
                    <div class="pro_sider_des">
                    【1药网自营】用于痔疮、肛裂、肛周湿疹
                    </div>
                </div>
                <!-- pro_part -->
                 <div class="pro_part">
                    <div class="pro_title">
                        <h1>
                            <span class="icon_ziying"></span>马应龙 麝香痔疮膏 20g
                        </h1>
                    </div>
                    <p class="pro_price">
                        <span>¥16</span>
                    </p>
                    <p class="pro_note">本商品由1药网自营提供现货。</p>
                    <p class="pro_note">
                        <i>批准文号：</i>
			            国药准字Z42021920
                        <span>(国家食药局查询)</span>
                    </p>
                    <p class="pro_label">
                        <span>满69元包邮</span>
                        <span>正品保证</span>
                        <span>药监认证</span>
                    </p>
                </div>
                <div class="pro_list" style="display: none"></div>
                <div class="pro_group" style="display: none"></div>
                <div style>
                    <div class="pro_group_top">
                        <ul id="pro_group_scroll">
                            <li class="active">
                                <p class="pro_name">【防治痔疮发作优惠套餐】用于上火大便秘结</p>
                            </li>
                        </ul>
                    </div>
                    <!-- pro_group_list -->
                    <div class="pro_group_list">
                        <ul class="list_ul">
                            <li>
                                <div class="img_box">
                                    <img src="https://p4.maiyaole.com/img/item/201806/05/100_20180605174718138.jpg" lazy="loaded">
                                </div>
                                <p class="pro_name">马应龙 麝香痔疮膏 20g</p>
                                <p class=price>
                                    <span>¥16.00</span>
                                    <i>x1</i>
                                </p>
                            </li>
                             <li>
                                <div class="img_box">
                                    <img src="https://p1.maiyaole.com/img/item/201808/28/100_20180828161429374.jpg" lazy="loaded">
                                </div>
                                <p class="pro_name">康弘 一清胶囊 0.5g*20粒</p>
                                <p class=price>
                                    <span>¥15.80</span>
                                    <i>x1</i>
                                </p>
                            </li>
                        </ul>
                    </div>
                    <!-- pro_appraise -->
                    <div class="pro_appraise">
                        <div class="pro_block">
                            <div class="pro_item">
                                <img src="../../images/pro_item.png">
                                药师点评
                            </div>
                        </div>
                        <p class="pro_appraise_text">暂无</p>
                        <i class="icon iconfont icon-bottomarrow"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import headTop from '../../components/header/head'
export default {
    components:{
        headTop
    }
}
</script>

<style lang="scss" scoped>
    @import '../../style/mixin';
    .pro_header .common_tt_tab {
        font-size: 0.42666667rem;
        li {
            position: relative;
            display: inline-block;
            height: 1.06666667rem;
            color: #414141;
            width: 1.33333333rem;
            cursor: pointer; 
            }
        .cur:after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            width: 80%;
            margin-left: -40%;
            height: 0.02666667rem;
            background-color: #FF6666;
            color: #FF6666;    
        }
    }
    .pro_header ~.content {
        padding-top: 1.2rem;
    }
    .pro_content {
        padding-bottom: 1.73333333rem;
        .pro_sider {
            margin-bottom: 0.13333333rem;
                .srcoll_img{
                position: relative;
                width: 100%;
                height: 6.4rem;
                background: #fff;
                text-align: center;
                img {
                    height: 6.4rem;
                }
            }
            .pro_sider_des {
                padding: 0.26666667rem 0.4rem;
                font-size: 0.37333333rem;
                color: #FF6666;
                background: #fff;
                text-align: left;
            }
        }
        /*pro_part*/
        .pro_part {
            position: relative;
            padding-left: 0.4rem;
            background-color: #fff;
            font-size: 0.37333333rem;
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.1);
            .pro_title {
                padding: 0.26666667rem 0.26666667rem 0.26666667rem 0;
                position: relative;
                display: flex;
                align-items: center;
                border-bottom: 1px solid #DFDFDF;
                word-break: break-all; //强制性换行
                font-size: 0.42666667rem;
                color: #010101;
                line-height: 0.64rem;
                min-height: 0.8rem;
                h1 {
                    flex: 1;
                    font-size: 0.42666667rem;
                    text-align: left;
                    .icon_ziying {
                        background: url(../../images/ziying.png) no-repeat left center;
                        background-size: auto 0.42666667rem;
                    }
                    span {
                        height: 0.58666667rem;;
                        width: 0.90666667rem;
                        display: block;
                        float: left;
                        vertical-align: middle;
                    }
                }
            }
            .pro_price {
                font-size: 0.42666667rem;
                color: #FF6666;
                height: 0.69333333rem;
                line-height: 0.69333333rem;
                padding: 0.26666667rem 0.4rem 0.26666667rem 0;
                span {
                    padding: 0 0.53333333rem 0 0.05333333rem;
                    font-size: 0.64rem;
                }
            }
            .pro_note {
                padding: 0 0.4rem 0.26666667rem 0;
                color: #808080;
                font-size: 0.37333333rem;
                line-height: 0.53333333rem;
            }
        }
    } 
    .pro_content .pro_part 
        p {
            word-break: break-all;
        }
        i {
        color: #999;
        }
        span {
            color: #3987F4;
            padding: 0 0.13333333rem;
        }
        .pro_label{
            padding: 0 0.4rem 0.26666667rem 0;
            border-bottom: 1px solid #e1e1e1;
            span {
                color: #676767;
                font-size: 0.34666667rem;
                background: url(../../images/pro_label.png) no-repeat left center;
                background-size: 0.42666667rem auto;
                padding-left: 0.53333333rem;
                margin-right: 0.53333333rem;
            }
        }
            /*pro_group_top*/
        .pro_content .pro_group_top ul {
            position: relative;
            width: 100%;
            padding: 0 0.26666667rem;
            overflow-y: hidden;
            overflow-x: auto;
            background: #fff;
            box-sizing: border-box;
            white-space: nowrap;
            border-bottom: 1px solid #E1E1E1;
            li {
                position: relative;
                margin: 0;
                color: #333;
                height: 1.12rem;
                line-height: 1.06666667rem;
                margin-right: 0.26666667rem;
                display: inline-block;
                .pro_name {
                    height: 1.06666667rem;
                    width: 2.66666667rem;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    word-break: break-all;
                }

            }
            li:last-child {
                margin-right: 0;
            }
            .active {
                color: #3987F4;
                border-bottom: 1px solid #3987F4;
            }

        }
            /*pro_group_list*/
        .pro_content .pro_group_list {
            height: 5.06666667rem;
            .list_ul {
                position: relative;
                width: 100%;
                height: 4.66666667rem;
                padding: 0.26666667rem;
                overflow-y: hidden;
                overflow-x: auto;
                background: #fff;
                white-space: nowrap;
                box-sizing: border-box;
                li {
                    position: relative;
                    margin: 0 0.26666667rem 0 0;
                    display: inline-block;
                    .img_box {
                        text-align: center;
                        padding: 0.26666667rem;
                        img {
                            height: 1.86666667rem;
                            width: auto;
                            text-align: center;
                        }
                    }
                    .pro_name {
                        font-size: 0.34666667rem;
                        color: #333;
                        margin: 0 0 0.13333333rem 0;
                        height: 0.90666667rem;
                        line-height: 0.45333333rem;
                        width: 2.66666667rem;
                        white-space: normal;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                    }
                    .price {
                        position: relative;
                        width: 1.86666667rem;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        word-break: break-all;
                        padding-right: 0.8rem; 
                        span {
                            color: #333;
                            font-size: 0.37333333rem; 
                        } 
                        i{
                            position: absolute;
                            top: 0;
                            right: 0;
                            color: #A7A7A7;
                            float: right;
                        }                   
                    }
                    :after { 
                        content: '';
                        position: absolute;
                        right: -0.26666667rem;
                        top: 0.8rem;
                        width: 0.53333333rem;
                        height: 0.53333333rem;
                        background: url(../../images/jia.png) no-repeat;
                        background-size: 0.53333333rem auto;
                    }
                }
                
            }
        }
        /*pro_appraise*/
        .pro_content .pro_appraise {
            position: relative;
            background: #F7FAFF;
            border-bottom: 1px solid #E7ECF4;
            padding: 0 0.26666667rem 0.26666667rem 0.26666667rem;
            .pro_block {
                height: 40px;
                line-height: 40px;
                border: 0;
                color: #3987F4;
                padding: 0;
                .pro_item {
                    flex: 1;
                    font-size: 0.37333333rem;
                    img {
                        height: 0.42666667rem;
                        margin-right: 0.13333333rem; 
                        margin-top: -0.08rem;
                    }
                }
            }
            .pro_appraise_text {
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 3;
            }
            p {
                padding-right: 0.8rem;
                color: #8193AC;
            }
            .iconfont {
                font-size: .53333333rem;
                color: #ccc;
            }
            .iconfont {
                position: absolute;
                right: 0.26666667rem;
                bottom: 0.26666667rem;
                color: #A0AFC2;
            }
            
        }
</style>

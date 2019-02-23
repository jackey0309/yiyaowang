<template>
     <footer class="pro_bar pro_bar_tab">
        <a href="javascript:void(0)" class="pro_tab_item right_border">
            <div>
            <div>
                <i class="icon iconfont icon-kefu"></i>
                <span class="tab_label">客服</span></div>
            <div id="service_layer" class="server_gray_layer_bg"></div>
            <div class="service_con">
                <span class="service_unit">医生</span>
                <span class="service_unit">售前</span>
                <span class="service_unit">企业采购</span>
                <span class="service_unit">药师</span>
                <span class="service_unit">售后</span>
                <span class="service_unit">意见反馈</span></div>
            </div>
        </a>
        <a href="javascript:void(0)" class="pro_tab_item right_border">
            <i class="icon iconfont icon-shoucang" style="color: rgb(102, 102, 102);"></i>
            <span class="tab_label">收藏</span></a>
        <a href="javascript:void(0)" class="pro_tab_item">
            <span id="selfCartIcon" class="icon_img icon_shopcar"></span>
            <span class="tab_label">购物车</span>
            <i class="tab_badge" style="display: none;"></i>
            <i class="tab_badge" style="display: none;">99+</i></a>
        <!---->
        <div class="pro_tab_item pro_add_car">
            <span>加入购物车</span></div>
    </footer>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
 @import '../../../style/mixin';
     /*footer*/    
    .pro_bar_tab {
        bottom: 0;
        width: 100%;
        padding: 0;
        table-layout: fixed;
        .right_border {
            border-right: 1px solid #D8D8D8;
        }
        .pro_tab_item {
            position: relative;
            display: table-cell;
            width: 1%;
            height: 1.46666667rem;
            color: #333;
            text-align: center;
            vertical-align: middle;
            min-width: 1.33333333rem;
            max-width: 1.6rem;
            .iconfont {
                width: 0.66666667rem;
                height: 0.61333333rem;
                line-height: 0.61333333rem;
                padding-top: 0;
                padding-bottom: 0;
                font-size: 0.53333333rem;
                color: #666;
                margin: 0.10666667rem auto 0 auto;
                display: block;
            }
            .iconfont ~ .tab_label {
                position: relative;
                top: 0;
                display: block;
                font-size: 0.32rem;
                text-align: center;
            }
            .icon_img {
                width: 0.66666667rem;
                height: 0.61333333rem;
                line-height: 0.61333333rem;
                padding-top: 0;
                padding-bottom: 0;
                font-size: 0.32rem;
                margin: 0.10666667rem auto 0 auto;
                display: block;
                background: url(../../../images/tabbar.png) no-repeat;
                background-size: 9.97333333rem auto;
            }
             .icon_shopcar {
                background-position: -6.56rem -1.58666667rem;
            }
            .icon_img:before {
                clear: both;
                content: "";
                display: block;
                visibility: hidden;
            }
        }
        .tab_badge {
            position: absolute;
            top: -0.10666667rem;
            left: 50%;
            z-index: 100;
            margin-left: -0.26666667rem;
            max-width: 1.06666667rem;
            height: 0.8rem;
            line-height: 0.8rem;
            padding: 0 0.26666667rem;
            font-size: 0.48rem;
            color: #fff;
            vertical-align: top;
            background: #FF6666;
            border-radius: 0.66666667rem;
            -webkit-transform: scale(0.5);
            transform: scale(0.5);
        }
    }
    .pro_bar {
        position: fixed;
        right: 0;
        left: 0;
        z-index: 10;
        height: 1.46666667rem;
        background-color: #fff;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-touch-callout: none;
    }
    .pro_bar_tab:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 0.02666667rem;
        background: #D8D8D8;
    }
    .server_gray_layer_bg {
        background: rgba(0,0,0,.3);
        height: 100%;
        width: 100%;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 90;
        opacity: 0;
        display: none;
    }
    .service_con {
        position: absolute;
        bottom: 1.6rem;
        left: 0.2rem;
        width: 2.933333333333333rem;
        background: #fff;
        border-radius: 5px;
        display: none;
        span {
            position: relative;
            height: 1.0133333333333334rem;
            line-height: 1.0133333333333334rem;
            display: block;
            border-bottom: 1px solid #f1f1f1;
            padding-left: 1.0666666666666667rem;
            cursor: ppointer;
        }
        span:last-child {
            border: none;
        }
    }
    .pro_bar_tab .pro_add_car, .pro_bar_tab .pro_overseas_add_car, .pro_bar_tab .pro_add_list {
        font-size: 0.42666667rem;
        background: #FF6666;
        color: #fff;
        max-width: 4.8rem;
        min-width: 4.26666667rem;
    }
    .pro_bar_tab .pro_add_car span, .pro_bar_tab .pro_overseas_add_car span, .pro_bar_tab .pro_add_list span {
        height: 100%;
        line-height: 1.46666667rem;
        display: block;
    }
</style>

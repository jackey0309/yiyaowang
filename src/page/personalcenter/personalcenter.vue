<template>
    <div id="main" class="user_page">
        <!-- user_top -->
        <div class="user_top">
            <head-top :head-title="profiletitle">
                <header slot="header">
                    <span class="city_area"> 
                        <img src="../../images/city_area.png" alt="定位">
                        湖北
                    </span>
                    <span>
                    </span>
                </header>
            </head-top>
        </div>
        <!-- user_info_wrapper -->
        <div class="user_info_wrapper">
            <div class="user_info_content">
                <div class="user_header_icon">
                    <img src="../../images/user_header_icon.png" alt="已登录头像">
                </div>
                <div class="user_name">
                    <span>18271846039</span>
                </div>
                <div class="user_balance_content">
                    <div class="balance_item border">
                        <div class="msg_item">
                            <span class="num">0.00</span>
                            <span>元</span>
                            <br>
                            <span>余额</span>
                        </div>
                    </div>
                    <div class="balance_item">
                         <div class="msg_item">
                            <span class="num">0</span>
                            <span>张</span>
                            <br>
                            <span>优惠券</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- order_info_content -->
        <div class="order_info_content">
            <span class="order_title">我的订单</span>
            <span class="check_all">查看全部
                <img src="../../images/check_all.png" class="right">
            </span>
            <div class="clearfix"></div>
            <ul class="item_wrapper border-bt">
                <li>
                    <i class="iconfont">
                        <img src="../../images/dfukuan.png" alt="待付款">
                    </i>
                    <span class="item_desc">待付款</span>
                </li>
                <li>
                    <i class="iconfont">
                        <img src="../../images/dfahuo.png" alt="待发货">
                    </i>
                    <span class="item_desc">待发货</span>
                </li>
                <li>
                    <i class="iconfont">
                        <img src="../../images/dshouhuo.png" alt="待收货">
                    </i>
                    <span class="item_desc">待收货</span>
                </li>
                <li>
                    <i class="iconfont">
                        <img src="../../images/dpingjia.png" alt="待评价">
                    </i>
                    <span class="item_desc">待评价</span>
                </li>
                 <li>
                    <i class="iconfont">
                        <img src="../../images/tuihuan.png" alt="退换货">
                    </i>
                    <span class="item_desc">退换货</span>
                </li>
            </ul>
        </div>
        <!-- server_content -->
        <div class="server_content">
            <div class="order_title">我的服务</div>
             <div class="clearfix"></div>
             <ul class="item_wrapper">
                  <li>
                    <i class="iconfont">
                        <img src="../../images/jiankuang.png" alt="健康档案">
                    </i>
                    <span class="item_desc">健康档案</span>
                </li>
                <li>
                    <i class="iconfont">
                        <img src="../../images/kanguo.png" alt="看过买过">
                    </i>
                    <span class="item_desc">看过买过</span>
                </li>
                <li>
                    <i class="iconfont">
                        <img src="../../images/shoucang.png" alt="我的收藏">
                    </i>
                    <span class="item_desc">我的收藏</span>
                </li>
                <li>
                    <i class="iconfont">
                        <img src="../../images/zixun.png" alt="咨询中心">
                    </i>
                    <span class="item_desc">咨询中心</span>
                </li>
             </ul>
        </div>
        <!-- vip_content -->
        <div class="vip_content">
            <img src="../../images/vip.png" alt="会员中心" class="vip_center_bg">
            <div class="vip_title">1+会员</div>
            <div class=vip_tip> 一年最多可省1040元</div>
            <div class="vip_btn">立即加入</div>
        </div>
        <!-- benefit_content -->
        <div class="benefit_content">
            <span class="order_title">福利中心</span>
            <div class="clearfix"></div>
            <ul class="item_wrapper">
                <li class="flex-fix">
                     <i class="iconfont">
                        <img src="../../images/lingquan.png" alt="领券中心">
                    </i>
                    <span class="item_desc">领券中心</span>
                </li>
                <li class="flex-fix">
                     <i class="iconfont">
                        <img src="../../images/lingjiang.png" alt="领奖励金">
                    </i>
                    <span class="item_desc">领奖励金</span>
                </li>
            </ul>
        </div>
        <foot-guide></foot-guide>   
    </div>
</template>

<script>
import headTop from '../../components/header/head'
import footGuide from '../../components/footer/footGuide'
export default {
    data(){
        return{
            profiletitle: '设置',
        }
    },
      components:{
        headTop,
        footGuide
    },
}
</script>

<style lang="scss" scoped>
 @import '../../style/mixin';
 .user_page {
    padding-bottom: 2.66666667rem;
    background-color: #fff;
    height: 100%;
}
/*user_top*/
.user_page .user_top {
    height: 3.14666667rem;
    background: -webkit-gradient(linear,left top,left bottom,from(#908bff),to(#9bb3ff));
    background: linear-gradient(#908bff,#9bb3ff);
    text-align: center;
}

.user_page .user_top .city_area {
    left: .4rem;
}
.user_page .user_top .city_area {
    position: absolute;
    top: .74666667rem;
    color: #fff;
    font-size: .4rem;
}
.user_page .user_top .city_area img {
    width: .4rem;
    height: .48rem;
}

/*user_info_wrapper*/
.user_page .user_info_wrapper {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    height: 4.02666667rem;
    margin-top: -1.28rem;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
}
.user_page .user_info_content {
    width: 96%;
    margin-left: 2%;
    margin-right: 2%;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    height: 4.02666667rem;
    background: #fff;
    -webkit-border-radius: .16rem;
    border-radius: .16rem;
    position: relative;
    border: .01333333rem solid #f0f0f0;
    -webkit-box-shadow: 0 0.02666667rem 0.64rem 0 rgba(38,45,86,.04);
    box-shadow: 0 0.02666667rem 0.64rem 0 rgba(38,45,86,.04);
    box-sizing: content-box;
}
    /*user_header_icon*/
.user_page .user_info_content .user_header_icon {
    position: absolute;
    width: 1.33333333rem;
    height: 1.33333333rem;
    top: .4rem;
    left: .4rem;
}
.user_page .user_info_content .user_header_icon img {
    width: 100%;
    height: 100%;
}
    /*user_name*/
.user_page .user_info_content .user_name {
    position: absolute;
    top: .8rem;
    left: 2rem;
    color: #262d56;
    font-size: .4rem;
}
    /*user_balance_content*/
.user_page .user_info_content .user_balance_content {
    position: relative;
    width: 100%;
    top: 2.26666667rem;
    height: 1.33333333rem;
}
.user_page .user_info_content .user_balance_content .balance_item {
    max-width: 50%;
    overflow: hidden;
    text-align: center;
    height: 100%;
    float: left;
    width: 50%;
    position: relative;
}
.user_page .user_info_content .user_balance_content .balance_item.border:before {
    content: "";
    width: .02666667rem;
    height: 100%;
    background-color: #262d56;
    opacity: .05;
    position: absolute;
    right: 0;
}
.user_page .user_info_content .user_balance_content .balance_item .msg_item {
    height: 100%;
    font-size: .34666667rem;
}
.user_page .user_info_content .user_balance_content .balance_item .msg_item span.num {
    font-size: .48rem;
    max-width: 1.86666667rem;
    overflow: hidden;
    text-overflow: ellipsis;
    height: .66666667rem;
    line-height: .66666667rem;
    margin-left: 0;
}
.user_page .user_info_content .user_balance_content .balance_item .msg_item span {
    font-size: .34666667rem;
    margin-left: .05333333rem;
    color: #262d56;
    height: .48rem;
    line-height: .48rem;
}
/*order_info_content*/
.user_page .benefit_content, .user_page .order_info_content, .user_page .server_content {
    margin-top: .53333333rem;
    width: 100%;
    height: 2.82666667rem;
}
.user_page .benefit_content .order_title, .user_page .order_info_content .order_title, .user_page .server_content .order_title {
    float: left;
    font-size: .48rem;
    color: #262d56;
    margin-left: .4rem;
}
.user_page .benefit_content .check_all, .user_page .order_info_content .check_all, .user_page .server_content .check_all {
    float: right;
    font-size: .34666667rem;
    color: #262d56;
    margin-right: .4rem;
}
.user_page img.right {
    width: .16rem!important;
    height: .29333333rem!important;
    margin-left: .13333333rem;
}
.clearfix {
    zoom: 1;
}
.user_page .benefit_content .item_wrapper.border-bt, .user_page .order_info_content .item_wrapper.border-bt, .user_page .server_content .item_wrapper.border-bt {
    border-bottom: 1px solid rgba(0,0,0,.1);
}
.user_page .benefit_content .item_wrapper, .user_page .order_info_content .item_wrapper, .user_page .server_content .item_wrapper {
    display: flex;
}
.user_page .benefit_content .item_wrapper li, .user_page .order_info_content .item_wrapper li, .user_page .server_content .item_wrapper li {
    flex: 1;
    width: 100%;
    height: 1.68rem;
    text-align: center;
    padding-top: .4rem;
    box-sizing: content-box;
}
.user_page .benefit_content .item_wrapper li .iconfont, .user_page .order_info_content .item_wrapper li .iconfont, .user_page .server_content .item_wrapper li .iconfont {
    position: relative;
}
.user_page .benefit_content .item_wrapper li .iconfont img, .user_page .order_info_content .item_wrapper li .iconfont img, .user_page .server_content .item_wrapper li .iconfont img {
    width: .58666667rem;
    height: .58666667rem;
}
.user_page .benefit_content .item_wrapper li .item_desc, .user_page .order_info_content .item_wrapper li .item_desc, .user_page .server_content .item_wrapper li .item_desc {
    display: block;
    font-size: .34666667rem;
    padding-top: .13333333rem;
    color: #262d56;
}
/*server_content*/
.user_page .benefit_content, .user_page .order_info_content, .user_page .server_content {
    margin-top: .53333333rem;
    width: 100%;
    height: 2.82666667rem;
}
/*vip_content*/
.user_page .vip_content {
    width: 9.46666667rem;
    height: 1.6rem;
    margin: 0 .26666667rem;
    position: relative;
    color: #262d56;
}
.user_page .vip_content img.vip_center_bg {
    width: 100%;
    height: 100%;
}
.user_page .vip_content .vip_title {
    position: absolute;
    top: 50%;
    left: .66666667rem;
    font-size: .48rem;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
}
.user_page .vip_content .vip_tip {
    left: 2.4rem;
}
.user_page .vip_content .vip_btn {
    right: .53333333rem;
    width: 2.32rem;
    height: .8rem;
    line-height: .8rem;
    -webkit-border-radius: 2.66666667rem;
    border-radius: 2.66666667rem;
    background: #2f2f2f;
    text-align: center;
    color: #fff;
}
/*benefit_content*/
.user_page .benefit_content, .user_page .order_info_content, .user_page .server_content {
    margin-top: .53333333rem;
    width: 100%;
    height: 2.82666667rem;
}
.user_page .vip_content .vip_btn, .user_page .vip_content .vip_tip {
    position: absolute;
    top: 50%;
    font-size: .34666667rem;
    transform: translateY(-50%);
}
.user_page .benefit_content .item_wrapper li.flex-fix, .user_page .order_info_content .item_wrapper li.flex-fix, .user_page .server_content .item_wrapper li.flex-fix {
    -webkit-box-flex: 0;
    -webkit-flex: none;
    -ms-flex: none;
    flex: none;
    width: 25%;
}
</style>
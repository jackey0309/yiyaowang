<template>
    <header id="head_top">
        <slot  name="header-searchBar"></slot>
        <a class="common_left_btn" v-if="goBack"  @click="$router.go(-1)">
            <i class=" icon iconfont icon-fanhui "></i>
        </a>
        <div class="common_right_btn" v-if="commonMore">
            <span>
                <i class="icon iconfont icon-points"></i>
            </span>
        </div> 
        <slot name="province_header_con"></slot>
        <slot name="city_area"></slot>
        <slot name="setting_area"></slot>
        <slot name="cart_tab "></slot>
        <slot name="item_tab"></slot>
        <slot name="top_title"></slot>
    </header>  
</template>

<script>
export default {
       props: ['signinUp', 'headTitle', 'goBack' ,'commonMore'],
}
</script>

<style lang="scss" scoped>
    @import '../../style/mixin';
    #head_top {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 8;
        width: 100%;
        height: 1.2rem;
        line-height: 1.2rem;
        font-size: 0.4rem;
        text-align: center;
        background: #F9F9F9;
    }
    .common_left_btn {
        position: absolute;
        top: 0;
        left: 0.21333333rem;
        padding-left: 0.21333333rem;
        height: 100%;
        line-height: 1.2rem;
        color: #999;
    }
    .icon-fanhui {
        font-size: 0.53333333rem;
        color: #666;
        }
     .common_right_btn {
        position: absolute;
        top: 0;
        right: 0.4rem;
        color: #999;
    }
    .common_right_btn a, .common_right_btn span{
        margin-left: 0.26666667rem;
        color: #999;
        float: right;
    }
    .icon-points {
        font-size: 0.53333333rem;
        color: #666;
    }
</style>



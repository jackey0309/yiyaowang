<template>
      <div>
        <div id="service_layer" class="server_gray_layer_bg"></div>
        <div class="server_box">
            <div class="service_con">
                <span class="service_unit">售前</span>
                <span class="service_unit">企业采购</span>
                <span class="service_unit">药师</span>
                <span class="service_unit">售后</span>
            </div>
            <i class="service_ico"></i>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
 @import '../../../style/mixin';
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
.server_box, .service_ico {
    width: 1.33333333rem;
    height: 1.46666667rem;
}
.server_box {
    position: fixed;
    bottom: 2.77333333rem;
    right: .5333333333333333rem;
    z-index: 91;
}
.service_con {
    position: absolute;
    bottom: 1.75rem;
    right: -.24rem;
    width: 2.933333333333333rem;
    background: #fff;
    -webkit-border-radius: .066667rem;
    border-radius: .066667rem;
    display: none;
}
.service_ico {
    z-index: 1000;
    cursor: pointer;
    display: inline-block;
    background: url(../../../images/service_ico.png) no-repeat;
    background-size: contain;
}
</style>

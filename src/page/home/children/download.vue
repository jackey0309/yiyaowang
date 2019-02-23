<template>
     <div class="download-container">
        <i class="btn-close"></i>
        <img src="../../images/download-logo.png" alt="111" class="download-logo">
        <p class="down-slogan">使用APP 享受更多优惠</p>
        <a href="//m.111.com.cn/downloadwx.html" class="btn-down">立即下载</a>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.download-container{
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding-left: .13333333rem;
    height: 1.2rem;
    background-color: #fff;
    .btn-close{
        width: .56rem;
        height: .56rem;
        background: url(../../images/btn-close.png) 0 no-repeat;
        background-size: 100%;
    }
    .download-logo{
        position: relative;
        margin-left: .24rem;
        margin-right: .26666667rem;
        width: 1.33333333rem;
        top: -.08rem;
        width: 1.33333333rem;
    }    
    .down-slogan{
        margin-top: 1px;
        margin-right: .4rem;
        width: 49%;
        font-size: .37333333rem;
        color: #333;
        font-weight: 500;
    }
    .btn-down{
        width: 1.86666667rem;
        height: .64rem;
        font-size: .32rem;
        color: #fff;
        text-align: center;
        font-weight: 300;
        line-height: .66666667rem;
        border-radius: .45333333rem;
        background-color: #f66;
    }
}
</style>



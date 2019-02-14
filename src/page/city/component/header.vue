<template>
    <header class="province_header_bar">
        <div class="province_header_con">
            <a href="/" class="province_header_left_btn">
                <i class="logo"></i>
            </a>
            <div class="province_header_title">选择位置</div>
        </div>
    </header>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.province_header_bar{
    height: 1.17333333rem;
    background: #f9f9f9;
    border: 1px solid #e5e5e5;
    box-sizing: border-box;
    position: fixed;
    width: 100%;
    z-index: 100;
    left: 0;
    top: 0;
    text-align: center;
    .province_header_con {
        position: relative;
        padding: 0 1.33333333rem;
        height: 1.17333333rem;
        .province_header_left_btn {
            padding: 0 .4rem;
            height: 1.17333333rem;
            display: inline-block;
            position: absolute;
            left: 0;
            top: 0;
            line-height: 1.17333333rem;
        } 
        .logo {
            margin-top: .21333333rem;
            width: .66666667rem;
            height: .74666667rem;
            background: url(../../../images/logo.png) no-repeat;
            display: block;
            background-size: .66666667rem auto;
            }
        .province_header_title {
            line-height: 1.17333333rem;
            font-size: .4rem;
            color: #333;
        }     
    }
}
</style>


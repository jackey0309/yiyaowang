<template>
<div class="login">
    <div id="quickLogin" class="main">
        <input type="text" name="username" style="display: none;">
        <input type="password" name="password" style="display: none;" class="__web-inspector-hide-shortcut__">
        <head-top id="Login" class="bar bar_nav" goBack="true">
            <div slot="top_title" class="top_title">免密码登录</div>
        </head-top>
        <div class="login_page paddingTop ">
            <div class="top_tip">
                <p>新用户可通过快速登录注册账号</p>
            </div>
            <div class="v-content content">
                <div class="item_control">
                    <!-- type=number比较费劲，而type=tel只需要监控每一次的结果就ok了。 -->
                    <input type="tel" placeholder="请输入手机号" autocomplete="off" maxlength="11" class="item_input">
                    <i class="icon_clear show" style="display: none;"></i>
                </div>
                <div class="item_control">
                    <input type="number" placeholder="请输入验证码" autocomplete="off" maxlength="4" class="item_input msg_code">
                    <i class="icon_clear show" style="display: none;"></i>
                    <button class="btn_code">获取验证码</button>
                    <button disabled="disabled" class="btn_code" style="display: none;">重新发送(0s)</button>
                </div>
                <button disabled="disabled" class="btn_default btn_red btn_block mt20">登录</button>
                <div class="item_box">
                    <a href="" class="fl blue-color">账号密码登录</a>
                </div>
                <div class="quick_login">
                    <div class="quick_top">
                        <span>用其他方式登录</span>
                    </div>
                    <ul>
                        <li>
                            <div class="icon icon_qq"></div>
                        </li>
                        <li>
                            <div class="icon icon_baidu"></div>
                        </li>
                        <li>
                            <div class="icon icon_alipay"></div>
                        </li>
                        <li>
                            <div class="icon icon_tsina"></div>
                        </li>
                        <li>
                            <div class="icon icon_yhd"></div>
                        </li>
                    </ul>
                    <div class="item_box">
                        <div class="agree_item">登录即代表您已同意
                             <span class="clasue-text">1药网
                            <a href="https://www.111.com.cn/cmsPage/2019f923d1220215103717/index.html">《服务协议》</a>
                            和
                            <a href="https://www.111.com.cn/cmsPage/20199f79a4020215104224/index.html">《隐私条款》</a>
                        </span>
                        </div>
                       
                    </div>
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
        headTop,
    }
}
</script>

<style lang="scss" scoped>
    @import '../../style/mixin';
    .login {
        background: #fff;
    }
    .main {
        margin: 0 auto;
        padding-bottom: 1.2rem ; 
    }
    .bar {
        position: fixed;
        height: 1.2rem;
        padding-right: .4rem;
        padding-left: .4rem;
        background-color: #f9f9f9;
        border-bottom: 1px solid #e6e6e6;
        -ms-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        z-index: 10;
    }
    .bar, .top_title {
        display: block;
        width: 100%;
    }
    .top_title {
        font-size: .42666667rem;
        font-weight: 500;
        line-height: 1.2rem;
        position: absolute;
        padding: 0;
        text-align: center;
        color: #333;
    }
    .bar_nav .top_title {
        right: 1.33333333rem;
        left: 1.33333333rem;
        display: inline-block;
        width: auto;
        margin: 0;
        color: #333;
    }
    .bar_nav .top_title, button {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    /*login_page*/
    .login_page.paddingTop {
        padding: 0;
        padding-top: 1.2rem;
    }
    .login_page {
        font-size: .37333333rem;
        .top_tip {
            height: .85333333rem;
            line-height: .85333333rem;
            text-align: center;
            background-color: #ffeded;
            opacity: .75;
            color: #f66;
        }
        .v-content {
            padding: 0 .53333333rem;
        }
        .item_control {
            position: relative;
            width: 100%;
            height: 1.33333333rem;
            line-height: 1.33333333rem;
            overflow: hidden;
            background-color: #fff;
            border: none;
            border-bottom: 1px solid #ccc;
            -ms-box-sizing: border-box;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
        }
        .item_input {
            padding: 0 .26666667rem;
            font-size: .37333333rem;
            color: #333;
            line-height: normal;
            display: inline-block;
            -webkit-box-shadow: inset 0 0 0 1rem #fff;
            box-shadow: inset 0 0 0 1rem #fff;
            border: 0 none;
        }
         .icon_clear, .icon_success {
            position: absolute;
            top: 0;
            right: 0;
            width: .8rem;
            height: 1.33333333rem;
            display: none;
        }
        .msg_code {
            padding-right: 2.66666667rem;
        }
        .msg_code+.icon_clear, .login_page .msg_code+.icon_success {
            right: 2.66666667rem;
        }
        .btn_code {
            position: absolute;
            bottom: .21333333rem;
            right: .26666667rem;
            padding: 0;
            margin: 0;
            width: 2.50666667rem;
            height: .74666667rem;
            font-size: .37333333rem;
            line-height: .8rem;
            text-align: right;
            color: #fff;
            text-align: center;
            background-color: #f66;
            border: .08rem;
        }
        .item_box {
            width: 100%;
            line-height: .8rem;
            display: block;
            margin-top: .53333333rem;
            overflow: hidden;
            .blue-color {
                color: #0075e8;
            }
        }
        .quick_login {
            font-size: .37333333rem;
            color: #9b9b9b;
            margin-top: 1.33333333rem;
            text-align: center;
            .quick_top {
                position: relative;
                .quick_top span {
                    position: relative;
                    background: #fff;
                    padding: 0 .26666667rem;
                    z-index: 1;
                }
            }
            .quick_top:before {
                content: " ";
                position: absolute;
                left: 0;
                top: 50%;
                width: 100%;
                height: 0;
                border-bottom: 1px solid rgba(0,0,0,.1);
                z-index: 1;
            }
            ul {
                display: table;
                margin-top: .6rem;
            }
            li {
                position: relative;
                display: table-cell;
                width: 1%;
                height: 1.33333333rem;
                padding: 0;
                text-align: center;
                vertical-align: middle;
            }
            .icon_qq {
                background: url(../../images/icon_qq.png) no-repeat;
                background-size: 100% auto;
            }
            .icon {
                width: 1.33333333rem;
                height: 1.33333333rem;
                line-height: 1.33333333rem;
                margin: 0 auto;
                display: block;
                background-size: 100% auto;
            }
            .icon_baidu {
                background: url(../../images/icon_baidu.png) no-repeat;
                background-size: 100% auto;
            }
            .icon_alipay {
                background: url(../../images/icon_alipay.png) no-repeat;
                background-size: 100% auto;
            }
            .icon_tsina {
                background: url(../../images/icon_tsina.png) no-repeat;
                background-size: 100% auto;
            }
            .icon_yhd {
                background: url(../../images/icon_yhd.png) no-repeat;
                background-size: 100% auto;
            }
        }
        .agree_item {
            min-width: 2.66666667rem;
            height: .8rem;
            line-height: .8rem;
            a {
                color: #ff7070;
                text-decoration: underline;
            }
        }
    }
    .agree_item {
        font-size: .3466666rem;
    }
    .clasue-text {
        font-weight: 800;
    }
    
    
    
</style>

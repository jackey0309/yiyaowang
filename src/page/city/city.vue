<template>
    <div>
        <header class="province_header_bar">
            <div class="province_header_con">
                <a href="/" class="province_header_left_btn">
                    <i class="logo"></i>
                </a>
                <div class="province_header_title">选择位置</div>
            </div>
        </header>
        <div class="province_content">
            <div class="province_group">
                <ul>
                    <li data-group="定位省份">定位省份</li>
                    <li>{{guessCity}}</li>
                </ul>
            </div>
        </div>
       <province-list></province-list>   
    </div>
</template>

<script>
import {cityGuess, hotcity, groupcity} from '../../service/getData'
import provinceList from './component/province'
export default {
    data(){
    return{
        guessCity: '',   //当前城市
        hotcity: [],     //热门城市列表
        groupcity: {},   //所有城市列表
        }
    },

	mounted(){
        // 获取当前城市
        cityGuess().then(res => {
            this.guessCity = res.name;
            this.guessCityid = res.id;
        })

        //获取热门城市
        hotcity().then(res => {
            this.hotcity = res;
            console.log(res);
        })

        //获取所有城市
        groupcity().then(res => {
            this.groupcity = res;
            console.log( res);
        })
    },

    components:{
        provinceList
    },
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
                background: url(../../images/logo.png) no-repeat;
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
    .province_content {  
        padding-top: 1.2rem;
        .province_group{
            font-size: .37333333rem;
            color: #6c6c6c;
            background: #fff;
            ul li[data-group] {
                border-bottom: 0;
            }
            ul li[data-group] {
                height: .85333333rem;
                line-height: .85333333rem;
                background: #f7f7f7;
            }
            ul li{
                padding: 0 .4rem;
                height: 1.06666667rem;
                line-height: 1.06666667rem;
                display: block;
                border-bottom: 1px solid #dbdbdb;
                } 
        }
    }
    .province{
        margin: 0 auto;
        }

       

</style>



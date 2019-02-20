<template>
    <div>
        <head-top id="province" class="province_header_bar">
            <div slot="province_header_con" class="province_header_con">
                <a href="/" class="province_header_left_btn">
                    <i class="logo"></i>
                </a>
            <div class="province_header_title">选择位置</div>
            </div>
        </head-top>
         <province-list 
            :hotcity="hotcity" 
            :sortgroupcity="sortgroupcity"
            :groupcity="groupcity"
            :letter="letter"
            :guessCity="guessCity"
         >
         </province-list>  
         <city-alphabet  :sortgroupcity="sortgroupcity" @change="handleLetterChange"></city-alphabet>  
    </div>
</template>

<script>
import {cityGuess, hotcity, groupcity} from '../../service/getData'
import headTop from '../../components/header/head'
import provinceList from './component/province'
import cityAlphabet from './component/alphabet'
export default {
    data(){
    return{
        guessCity: '',   //当前城市
        guessCityid: '', //当前城市id
        hotcity: [],     //热门城市列表
        groupcity: {},   //所有城市列表
        letter: ''
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
        })

        //获取所有城市
        groupcity().then(res => {
            this.groupcity = res;
        })
    },
    components:{
        headTop,
        provinceList,
        cityAlphabet
    },
    computed:{
        //将获取的数据按照A-Z字母开头排序
        sortgroupcity(){
            let sortobj = {};
            for (let i = 65; i <= 90; i++) {
                if (this.groupcity[String.fromCharCode(i)]) {
                    sortobj[String.fromCharCode(i)] = this.groupcity[String.fromCharCode(i)];
                }
            }
            return sortobj
        }
    },
    methods:{
        handleLetterChange (letter) {
            this.letter = letter
        }
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
</style>



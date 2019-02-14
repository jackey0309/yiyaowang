<template>
    <div>
        <header-top></header-top>
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
import headerTop from './component/header'
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
        headerTop,
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
   
</style>



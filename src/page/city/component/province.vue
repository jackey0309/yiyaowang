<template>
<div class="list" ref="wrapper">
    <div class="content">
        <div class="province_content">
            <div class="province_group">
                <ul>
                    <li data-group="定位省份">定位省份</li>
                    <li>{{guessCity}}</li>
                </ul>
            </div>
        </div>
        <div class="province">
            <div class="province_group" >
                <ul>
                    <span>
                        <li data-group="常用省份">常用省份</li>
                        <router-link  tag="li" v-for="item in hotcity" :to="'/city/' + item.id" :key="item.id">
                            {{item.name}}
                        </router-link>
                    </span>
                    <span style="display: none;">
                        <li data-group="#"> #</li> 
                        <li></li>
                    </span>
                    <span v-for="(value, key, index) in sortgroupcity" :key="key" :ref="key">
                        <li  data-group="key">{{key}} </li> 
                        <router-link  tag="li" v-for="item in value" :to="'/city/' + item.id" :key="item.id" class="ellipsis">
                            {{item.name}}
                        </router-link> 
                    </span>
                </ul>
            </div>
        </div>  
    </div>
</div>
   
</template>
<script>
import Bscroll from 'better-scroll'
export default {
    props: {
        hotcity: Array,
        sortgroupcity: Object,
        groupcity: Object,
        letter: String,
        guessCity:String
    },
    watch: {
        letter () {
            if(this.letter) {
                const element = this.$refs[this.letter][0]
                this.scroll.scrollToElement(element)
            }
        }
    },
    mounted(){
        this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>

<style lang="scss" scoped>
 .list{
    overflow: hidden;
    position: absolute ;
    top:1.2rem;
    left: 0;
    right: 0;
    bottom: 0;
 }
 .content{
     height: 54rem;
 }
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
</style>



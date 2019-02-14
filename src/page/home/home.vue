<template>
    <div id="home" class="pre-home page">
         <div class="header_cover" style="opacity: 0; transition: all 0.5s ease 0s;"></div>
       <head-top></head-top>
    </div>
</template>

<script>
import headTop from '../../components/header/head'


export default {
    components:{
        headTop
    },
}
</script>

<style lang="scss" scoped>
    @import '../../style/mixin';
    .page{
        width: 100%;
    }
    .pre-home{
        background-color: $bc;
    }
    .header_cover {
        height: 1.2rem;
        background: #f9f9f9;
    }
    .header_cover {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 8;
        width: 100%;
        line-height: 1.2rem;
    }
</style>



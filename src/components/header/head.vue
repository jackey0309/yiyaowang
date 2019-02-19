<template>
    <div>
        <slot name="header"></slot>
        <section class=" ellipsis" v-if="headTitle">
            <span class="setting_area">{{headTitle}}</span>
        </section>
    </div>
        
</template>

<script>
export default {
       props: ['signinUp', 'headTitle', 'goBack'],
}
</script>

<style lang="scss" scoped>
@import '../../style/mixin';
.setting_area {
    right: .4rem;
}
.setting_area {
    position: absolute;
    top: .74666667rem;
    color: #fff;
    font-size: .4rem;
}
</style>



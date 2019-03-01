<template>
    <input type="text" placeholder="请输入账户名/手机号" v-model.lazy="userAccount">
</template>

<script>
export default {
    data() {
        return {
            userAccount: null, //用户名
        }
    },
     monted() {
         console.log(this.userAccount)
     }
}
</script>

<style lang="scss" scoped>
</style>

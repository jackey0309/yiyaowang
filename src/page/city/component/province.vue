<template>
     <div class="province">
            <div class="province_content">
                <div class="province_group">
                    <ul>
                        <span>
                            <li data-group="常用省份">常用省份</li>
                            <li>北京</li>
                        </span>
                    </ul>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.province{
        margin: 0 auto;
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



<template>
    <div class="pro_detail">
        <div class="pro_detail_tab">
            <div class="pro_detail_item" :class='{active: changeitemType=="graphic"}' @click="changeitemType='graphic'">图文详情</div>
            <div class="pro_detail_item" :class='{active: changeitemType=="instructions"}' @click="changeitemType='instructions'">说明书</div>
            <div class="pro_detail_item" :class='{active: changeitemType=="specification"}' @click="changeitemType='specification'">规格参数</div>
        </div>
        <div class="pro_detail_box" v-show="changeitemType=='graphic'">
            <div class="detail_img">
                <p>
                    <img src="https://p1.maiyaole.com/img/201604/29/20160429104001369.jpg" title="10.jpg" hspace="0" border="0" vspace="0">
                    <br>
                </p>
                <p>
                    <img title="2图片?±?" src="https://p1.maiyaole.com/img/201312/25/20131225141759413.jpg" >
                </p>
                <p>
                    <img src="https://p1.maiyaole.com/img/item/201806/05/380_20180605174718138.jpg" border="0">
                    <img src="https://p1.maiyaole.com/img/201503/10/330_20150310174213305.jpg" border="0">
                    <img src="https://p1.maiyaole.com/img/201503/10/330_20150310174206613.jpg" border="0">
                    <img src="https://p1.maiyaole.com/img/201503/10/330_20150310174345346.jpg?a=2102299043" border="0">
                    <img src="https://p4.maiyaole.com/img/item/201806/05/org_20180605174720346.jpg" border="0">
                </p>
            </div>
        </div>
         <div class="pro_detail_box" v-show="changeitemType=='instructions'">
            <table class="specificationBox" cellspacing="1" cellpadding="3" width="100%">
                <tbody>
                    <tr>
                    <th colspan="2" class="titleName">马应龙 麝香痔疮膏 20g 说明书</th></tr>
                    <tr>
                    <th colspan="2" class="titleP">请仔细阅读说明书并按说明使用或在药师指导下购买和使用</th></tr>
                     <tr>
                    <th>通用名称 ：</th>
                    <td>马应龙麝香痔疮膏</td></tr>
                    <tr class="colorWhite">
                    <th>汉语拼音 ：</th>
                    <td>mayinglongshexiangzhichuanggao</td></tr>
                    <tr>
                    <th>商品名称 ：</th>
                    <td>马应龙</td></tr>
                    <tr class="colorWhite">
                    <th>成份 ：</th>
                    <td>冰片、炉甘石、人工牛黄、硼砂、人工麝香、珍珠、琥珀。辅料为：凡士林、羊毛脂、二甲亚砜。</td></tr>
                    <tr>
                    <th>性状 ：</th>
                    <td>本品为浅灰黄色或粉红色的软膏；气香，有清凉感。</td></tr>
                    <tr class="colorWhite">
                    <th>功能主治 ：</th>
                    <td>清热燥湿，活血消肿，去腐生肌。用于湿热瘀阻所致的痔疮、肛裂，症见大便出血，或疼痛、有下坠感；亦用于肛周湿疹。</td></tr>
                    <tr>
                    <th>规格 ：</th>
                    <td>20g*1支/盒</td></tr>
                    <tr class="colorWhite">
                    <th>用法用量 ：</th>
                    <td>外用，取适量涂搽患处。</td></tr>
                    <tr>
                    <th>不良反应 ：</th>
                    <td>尚不明确</td></tr>
                    <tr class="colorWhite">
                    <th>禁忌 ：</th>
                    <td>忌烟酒及辛辣、油腻、刺激性食物。</td></tr>
                    <tr>
                    <th>注意事项 ：</th>
                    <td>1.本品为外用药，禁止内服。
                        <br>2.用毕洗手，切勿接触眼睛、口腔等黏膜处。
                        <br>3.忌烟酒及辛辣、油腻、刺激性食物。
                        <br>4.保持大便通畅。
                        <br>5.孕妇慎用或遵医嘱。儿童、哺乳期妇女、年老体弱者应在医师指导下使用。
                        <br>6.内痔出血过多或原因不明的便血应去医院就诊。
                        <br>7.用药3天症状无缓解，应去医院就诊。
                        <br>8.对本品过敏者禁用，过敏体质者慎用。
                        <br>9.药品性状发生改变时禁止使用。
                        <br>10.儿童必须在成人监护下使用。
                        <br>11.请将本品放在儿童不能接触的地方。
                        <br>12.如正在使用其他药品，使用本品前请咨询医师或药师。
                        <br>13.运动员慎服。</td></tr>
                    <tr class="colorWhite">
                    <th>贮藏 ：</th>
                    <td>密闭保存。</td></tr>
                    <tr>
                    <th>包装 ：</th>
                    <td>本品采用药用聚乙烯/铝/聚乙烯复合软膏管包装，20克/支/盒。</td></tr>
                    <tr class="colorWhite">
                    <th>有效期 ：</th>
                    <td>36个月</td></tr>
                    <tr>
                    <th>批准文号 ：</th>
                    <td>国药准字Z42021920</td></tr>
                    <tr class="colorWhite">
                    <th>企业名称 ：</th>
                    <td>马应龙药业集团股份有限公司</td></tr>
                    <tr class="colorWhite">
                    <td colspan="2" style="text-align:center">*如有问题可与生产企业联系</td></tr>
                </tbody>
            </table>
        </div>
        <div class="pro_detail_box" v-show="changeitemType=='specification'">
             <dl style="background-color: #fff;color: #666;font-size: 25px;padding: 10px">
                <dt>商品名称：马应龙 麝香痔疮膏 20g
                    <br>
                    <br></dt>
                <dt>品　　牌：马应龙
                    <br>
                    <br></dt>
                <dt>规　　格：20g
                    <br>
                    <br></dt>
                <dt>重　　量：0.041kg
                    <br>
                    <br></dt>
                <dt>生产厂商：马应龙药业集团股份有限公司
                    <br>
                    <br></dt>
                <dt>批准文号：国药准字Z42021920
                    <br>
                    <br></dt>
                <dt>温馨提示：部分商品包装更换频繁，如货品与图片不完全一致，请以收到的货物为准
                    <br>
                </dt>
                    <br>
            </dl>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            changeitemType: 'graphic'
        }
    },
}
</script>

<style lang="scss" scoped>
 @import '../../../style/mixin';
  .pro_content .pro_detail_tab {
        position: relative;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        background: #fff;
        padding: 0;
        border-bottom: 1px solid #e1e1e1;
        font-size: 0.42666667rem;
        .pro_detail_item.active {
            color: #FF6666;
        }
         .pro_detail_item {
            position: relative;
            display: block;
            -webkit-box-flex: 1;
            -webkit-flex: 1;
            flex: 1;
            padding: 0.26666667rem 0;
            text-align: center;
        }
        .pro_detail_item.active:before {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            height: 0.05333333rem;
            background-color: #FF6666;
        }
    }
    .pro_content .pro_detail .pro_detail_box {
        background: #fff;
        padding: 0.26666667rem 0.4rem;
        margin-bottom: 0.26666667rem;
    }
    .detail_img img {
        width: 100% !important;
        height: auto !important;
        display: block;
    }
    .pro_detail_box dt {
        font-size: 0.4rem;
    }
</style>

<style lang="scss" scoped>
.detail_img img {
	width:100%;
	height:auto;
}
.detail_img table {
	width:100% !important
}
.detail_img img {
	width:100% !important;
	height:auto !important;
	display:block;
}
.detail_img p {
	margin:0;
}
.specificationBox {
	border:#ddd 1px solid;
	border-collapse:collapse;
	margin-bottom:10px
}
.specificationBox th {
	width:120px
}
.specificationBox th,.specificationBox td {
	color:#5e5e5e;
	border:1px solid #a9c6c9;
	background:#f5fafa;
	text-align:left;
	padding:3px 5px;
	font-size:12px;
	line-height:1.8;
	font-weight:normal
}
.specificationBox th.titleName {
	font-family:'宋体';
	color:#ec000e;
	font-size:18px;
	font-size:18px;
	color:#f00;
	text-align:center;
	background-color:#f5fafa;
	font-weight:normal
}
.specificationBox th.titleP {
	text-align:center;
	font-weight:normal;
	background-color:#fff
}
.specificationBox .colorWhite th,.specificationBox .colorWhite td {
	background-color:#fff
}
    
</style>

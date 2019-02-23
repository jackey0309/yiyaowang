<template>
    <div>
        <div class="pro_sider_tab">
            <div class="pro_sider_item" :class='{active: changeSiderType =="look"}' @click="changeSiderType ='look'">
                看了又看
            </div>
            <div class="pro_sider_item" :class='{active: changeSiderType=="brand"}' @click="changeSiderType='brand'">品牌专区</div>
            </div>
        <div class="pro_tab_box" v-show="changeSiderType=='look'">
            <ul class="list_ul" style>
                    <mt-swipe :stopPropagation="true" :prevent="true" :auto="0" style="height: 356px;" class="swipe">
                    <mt-swipe-item>
                        <li class="li">
                            <a href="javascript:void(0)">
                                <div class="img_box">
                                    <img src="https://p3.maiyaole.com/img/item/201806/07/200_20180607143901234.jpg" lazy="loaded">
                                </div>
                                <p class="pro_name">马应龙 麝香痔疮膏 10g</p>
                                <span class="price">¥9.3</span>
                            </a>
                        </li>
                        <li class="li">
                            <a href="javascript:void(0)">
                                <div class="img_box">
                                    <img src="https://p3.maiyaole.com/img/item/201806/07/200_20180607143901234.jpg" lazy="loaded">
                                </div>
                                <p class="pro_name">马应龙 麝香痔疮膏 10g</p>
                                <span class="price">¥9.3</span>
                            </a>
                        </li>
                        <li class="li">
                            <a href="javascript:void(0)">
                                <div class="img_box">
                                    <img src="https://p3.maiyaole.com/img/item/201806/07/200_20180607143901234.jpg" lazy="loaded">
                                </div>
                                <p class="pro_name">马应龙 麝香痔疮膏 10g</p>
                                <span class="price">¥9.3</span>
                            </a>
                        </li>
                        <li class="li">
                            <a href="javascript:void(0)">
                                <div class="img_box">
                                    <img src="https://p3.maiyaole.com/img/item/201806/07/200_20180607143901234.jpg" lazy="loaded">
                                </div>
                                <p class="pro_name">马应龙 麝香痔疮膏 10g</p>
                                <span class="price">¥9.3</span>
                            </a>
                        </li>
                        <li class="li">
                            <a href="javascript:void(0)">
                                <div class="img_box">
                                    <img src="https://p3.maiyaole.com/img/item/201806/07/200_20180607143901234.jpg" lazy="loaded">
                                </div>
                                <p class="pro_name">马应龙 麝香痔疮膏 10g</p>
                                <span class="price">¥9.3</span>
                            </a>
                        </li>
                        <li class="li">
                            <a href="javascript:void(0)">
                                <div class="img_box">
                                    <img src="https://p3.maiyaole.com/img/item/201806/07/200_20180607143901234.jpg" lazy="loaded">
                                </div>
                                <p class="pro_name">马应龙 麝香痔疮膏 10g</p>
                                <span class="price">¥9.3</span>
                            </a>
                        </li>

                    </mt-swipe-item>
                        <mt-swipe-item>
                        <li class="li">
                            <a href="javascript:void(0)">
                                <div class="img_box">
                                    <img src="https://p3.maiyaole.com/img/item/201806/07/200_20180607143901234.jpg" lazy="loaded">
                                </div>
                                <p class="pro_name">马应龙 麝香痔疮膏 10g</p>
                                <span class="price">¥9.3</span>
                            </a>
                        </li>
                        <li class="li">
                            <a href="javascript:void(0)">
                                <div class="img_box">
                                    <img src="https://p3.maiyaole.com/img/item/201806/07/200_20180607143901234.jpg" lazy="loaded">
                                </div>
                                <p class="pro_name">马应龙 麝香痔疮膏 10g</p>
                                <span class="price">¥9.3</span>
                            </a>
                        </li>
                        <li class="li">
                            <a href="javascript:void(0)">
                                <div class="img_box">
                                    <img src="https://p3.maiyaole.com/img/item/201806/07/200_20180607143901234.jpg" lazy="loaded">
                                </div>
                                <p class="pro_name">马应龙 麝香痔疮膏 10g</p>
                                <span class="price">¥9.3</span>
                            </a>
                        </li>
                        <li class="li">
                            <a href="javascript:void(0)">
                                <div class="img_box">
                                    <img src="https://p3.maiyaole.com/img/item/201806/07/200_20180607143901234.jpg" lazy="loaded">
                                </div>
                                <p class="pro_name">马应龙 麝香痔疮膏 10g</p>
                                <span class="price">¥9.3</span>
                            </a>
                        </li>
                        <li class="li">
                            <a href="javascript:void(0)">
                                <div class="img_box">
                                    <img src="https://p3.maiyaole.com/img/item/201806/07/200_20180607143901234.jpg" lazy="loaded">
                                </div>
                                <p class="pro_name">马应龙 麝香痔疮膏 10g</p>
                                <span class="price">¥9.3</span>
                            </a>
                        </li>
                        <li class="li">
                            <a href="javascript:void(0)">
                                <div class="img_box">
                                    <img src="https://p3.maiyaole.com/img/item/201806/07/200_20180607143901234.jpg" lazy="loaded">
                                </div>
                                <p class="pro_name">马应龙 麝香痔疮膏 10g</p>
                                <span class="price">¥9.3</span>
                            </a>
                        </li>

                    </mt-swipe-item>
                        <mt-swipe-item>
                        <li class="li">
                            <a href="javascript:void(0)">
                                <div class="img_box">
                                    <img src="https://p3.maiyaole.com/img/item/201806/07/200_20180607143901234.jpg" lazy="loaded">
                                </div>
                                <p class="pro_name">马应龙 麝香痔疮膏 10g</p>
                                <span class="price">¥9.3</span>
                            </a>
                        </li>
                        <li class="li">
                            <a href="javascript:void(0)">
                                <div class="img_box">
                                    <img src="https://p3.maiyaole.com/img/item/201806/07/200_20180607143901234.jpg" lazy="loaded">
                                </div>
                                <p class="pro_name">马应龙 麝香痔疮膏 10g</p>
                                <span class="price">¥9.3</span>
                            </a>
                        </li>
                        <li class="li">
                            <a href="javascript:void(0)">
                                <div class="img_box">
                                    <img src="https://p3.maiyaole.com/img/item/201806/07/200_20180607143901234.jpg" lazy="loaded">
                                </div>
                                <p class="pro_name">马应龙 麝香痔疮膏 10g</p>
                                <span class="price">¥9.3</span>
                            </a>
                        </li>
                        <li class="li">
                            <a href="javascript:void(0)">
                                <div class="img_box">
                                    <img src="https://p3.maiyaole.com/img/item/201806/07/200_20180607143901234.jpg" lazy="loaded">
                                </div>
                                <p class="pro_name">马应龙 麝香痔疮膏 10g</p>
                                <span class="price">¥9.3</span>
                            </a>
                        </li>
                        <li class="li">
                            <a href="javascript:void(0)">
                                <div class="img_box">
                                    <img src="https://p3.maiyaole.com/img/item/201806/07/200_20180607143901234.jpg" lazy="loaded">
                                </div>
                                <p class="pro_name">马应龙 麝香痔疮膏 10g</p>
                                <span class="price">¥9.3</span>
                            </a>
                        </li>
                        <li class="li">
                            <a href="javascript:void(0)">
                                <div class="img_box">
                                    <img src="https://p3.maiyaole.com/img/item/201806/07/200_20180607143901234.jpg" lazy="loaded">
                                </div>
                                <p class="pro_name">马应龙 麝香痔疮膏 10g</p>
                                <span class="price">¥9.3</span>
                            </a>
                        </li>

                    </mt-swipe-item>
                        <mt-swipe-item>
                        <li class="li">
                            <a href="javascript:void(0)">
                                <div class="img_box">
                                    <img src="https://p3.maiyaole.com/img/item/201806/07/200_20180607143901234.jpg" lazy="loaded">
                                </div>
                                <p class="pro_name">马应龙 麝香痔疮膏 10g</p>
                                <span class="price">¥9.3</span>
                            </a>
                        </li>
                        <li class="li">
                            <a href="javascript:void(0)">
                                <div class="img_box">
                                    <img src="https://p3.maiyaole.com/img/item/201806/07/200_20180607143901234.jpg" lazy="loaded">
                                </div>
                                <p class="pro_name">马应龙 麝香痔疮膏 10g</p>
                                <span class="price">¥9.3</span>
                            </a>
                        </li>
                        <li class="li">
                            <a href="javascript:void(0)">
                                <div class="img_box">
                                    <img src="https://p3.maiyaole.com/img/item/201806/07/200_20180607143901234.jpg" lazy="loaded">
                                </div>
                                <p class="pro_name">马应龙 麝香痔疮膏 10g</p>
                                <span class="price">¥9.3</span>
                            </a>
                        </li>
                        <li class="li">
                            <a href="javascript:void(0)">
                                <div class="img_box">
                                    <img src="https://p3.maiyaole.com/img/item/201806/07/200_20180607143901234.jpg" lazy="loaded">
                                </div>
                                <p class="pro_name">马应龙 麝香痔疮膏 10g</p>
                                <span class="price">¥9.3</span>
                            </a>
                        </li>
                        <li class="li">
                            <a href="javascript:void(0)">
                                <div class="img_box">
                                    <img src="https://p3.maiyaole.com/img/item/201806/07/200_20180607143901234.jpg" lazy="loaded">
                                </div>
                                <p class="pro_name">马应龙 麝香痔疮膏 10g</p>
                                <span class="price">¥9.3</span>
                            </a>
                        </li>
                        <li class="li">
                            <a href="javascript:void(0)">
                                <div class="img_box">
                                    <img src="https://p3.maiyaole.com/img/item/201806/07/200_20180607143901234.jpg" lazy="loaded">
                                </div>
                                <p class="pro_name">马应龙 麝香痔疮膏 10g</p>
                                <span class="price">¥9.3</span>
                            </a>
                        </li>

                    </mt-swipe-item>
                        <mt-swipe-item>
                        <li class="li">
                            <a href="javascript:void(0)">
                                <div class="img_box">
                                    <img src="https://p3.maiyaole.com/img/item/201806/07/200_20180607143901234.jpg" lazy="loaded">
                                </div>
                                <p class="pro_name">马应龙 麝香痔疮膏 10g</p>
                                <span class="price">¥9.3</span>
                            </a>
                        </li>
                        <li class="li">
                            <a href="javascript:void(0)">
                                <div class="img_box">
                                    <img src="https://p3.maiyaole.com/img/item/201806/07/200_20180607143901234.jpg" lazy="loaded">
                                </div>
                                <p class="pro_name">马应龙 麝香痔疮膏 10g</p>
                                <span class="price">¥9.3</span>
                            </a>
                        </li>
                        <li class="li">
                            <a href="javascript:void(0)">
                                <div class="img_box">
                                    <img src="https://p3.maiyaole.com/img/item/201806/07/200_20180607143901234.jpg" lazy="loaded">
                                </div>
                                <p class="pro_name">马应龙 麝香痔疮膏 10g</p>
                                <span class="price">¥9.3</span>
                            </a>
                        </li>
                        <li class="li">
                            <a href="javascript:void(0)">
                                <div class="img_box">
                                    <img src="https://p3.maiyaole.com/img/item/201806/07/200_20180607143901234.jpg" lazy="loaded">
                                </div>
                                <p class="pro_name">马应龙 麝香痔疮膏 10g</p>
                                <span class="price">¥9.3</span>
                            </a>
                        </li>
                        <li class="li">
                            <a href="javascript:void(0)">
                                <div class="img_box">
                                    <img src="https://p3.maiyaole.com/img/item/201806/07/200_20180607143901234.jpg" lazy="loaded">
                                </div>
                                <p class="pro_name">马应龙 麝香痔疮膏 10g</p>
                                <span class="price">¥9.3</span>
                            </a>
                        </li>
                        <li class="li">
                            <a href="javascript:void(0)">
                                <div class="img_box">
                                    <img src="https://p3.maiyaole.com/img/item/201806/07/200_20180607143901234.jpg" lazy="loaded">
                                </div>
                                <p class="pro_name">马应龙 麝香痔疮膏 10g</p>
                                <span class="price">¥9.3</span>
                            </a>
                        </li>

                    </mt-swipe-item>
                        <mt-swipe-item>
                        <li class="li">
                            <a href="javascript:void(0)">
                                <div class="img_box">
                                    <img src="https://p3.maiyaole.com/img/item/201806/07/200_20180607143901234.jpg" lazy="loaded">
                                </div>
                                <p class="pro_name">马应龙 麝香痔疮膏 10g</p>
                                <span class="price">¥9.3</span>
                            </a>
                        </li>
                        <li class="li">
                            <a href="javascript:void(0)">
                                <div class="img_box">
                                    <img src="https://p3.maiyaole.com/img/item/201806/07/200_20180607143901234.jpg" lazy="loaded">
                                </div>
                                <p class="pro_name">马应龙 麝香痔疮膏 10g</p>
                                <span class="price">¥9.3</span>
                            </a>
                        </li>
                        <li class="li">
                            <a href="javascript:void(0)">
                                <div class="img_box">
                                    <img src="https://p3.maiyaole.com/img/item/201806/07/200_20180607143901234.jpg" lazy="loaded">
                                </div>
                                <p class="pro_name">马应龙 麝香痔疮膏 10g</p>
                                <span class="price">¥9.3</span>
                            </a>
                        </li>
                        <li class="li">
                            <a href="javascript:void(0)">
                                <div class="img_box">
                                    <img src="https://p3.maiyaole.com/img/item/201806/07/200_20180607143901234.jpg" lazy="loaded">
                                </div>
                                <p class="pro_name">马应龙 麝香痔疮膏 10g</p>
                                <span class="price">¥9.3</span>
                            </a>
                        </li>
                        <li class="li">
                            <a href="javascript:void(0)">
                                <div class="img_box">
                                    <img src="https://p3.maiyaole.com/img/item/201806/07/200_20180607143901234.jpg" lazy="loaded">
                                </div>
                                <p class="pro_name">马应龙 麝香痔疮膏 10g</p>
                                <span class="price">¥9.3</span>
                            </a>
                        </li>
                        <li class="li">
                            <a href="javascript:void(0)">
                                <div class="img_box">
                                    <img src="https://p3.maiyaole.com/img/item/201806/07/200_20180607143901234.jpg" lazy="loaded">
                                </div>
                                <p class="pro_name">马应龙 麝香痔疮膏 10g</p>
                                <span class="price">¥9.3</span>
                            </a>
                        </li>

                    </mt-swipe-item>
                        <mt-swipe-item>
                        <li class="li">
                            <a href="javascript:void(0)">
                                <div class="img_box">
                                    <img src="https://p3.maiyaole.com/img/item/201806/07/200_20180607143901234.jpg" lazy="loaded">
                                </div>
                                <p class="pro_name">马应龙 麝香痔疮膏 10g</p>
                                <span class="price">¥9.3</span>
                            </a>
                        </li>
                        <li class="li">
                            <a href="javascript:void(0)">
                                <div class="img_box">
                                    <img src="https://p3.maiyaole.com/img/item/201806/07/200_20180607143901234.jpg" lazy="loaded">
                                </div>
                                <p class="pro_name">马应龙 麝香痔疮膏 10g</p>
                                <span class="price">¥9.3</span>
                            </a>
                        </li>
                        <li class="li">
                            <a href="javascript:void(0)">
                                <div class="img_box">
                                    <img src="https://p3.maiyaole.com/img/item/201806/07/200_20180607143901234.jpg" lazy="loaded">
                                </div>
                                <p class="pro_name">马应龙 麝香痔疮膏 10g</p>
                                <span class="price">¥9.3</span>
                            </a>
                        </li>
                        <li class="li">
                            <a href="javascript:void(0)">
                                <div class="img_box">
                                    <img src="https://p3.maiyaole.com/img/item/201806/07/200_20180607143901234.jpg" lazy="loaded">
                                </div>
                                <p class="pro_name">马应龙 麝香痔疮膏 10g</p>
                                <span class="price">¥9.3</span>
                            </a>
                        </li>
                        <li class="li">
                            <a href="javascript:void(0)">
                                <div class="img_box">
                                    <img src="https://p3.maiyaole.com/img/item/201806/07/200_20180607143901234.jpg" lazy="loaded">
                                </div>
                                <p class="pro_name">马应龙 麝香痔疮膏 10g</p>
                                <span class="price">¥9.3</span>
                            </a>
                        </li>
                        <li class="li">
                            <a href="javascript:void(0)">
                                <div class="img_box">
                                    <img src="https://p3.maiyaole.com/img/item/201806/07/200_20180607143901234.jpg" lazy="loaded">
                                </div>
                                <p class="pro_name">马应龙 麝香痔疮膏 10g</p>
                                <span class="price">¥9.3</span>
                            </a>
                        </li>
                    </mt-swipe-item>
                </mt-swipe>
            </ul>
        </div> 
        <div class="pro_tab_box" v-show="changeSiderType=='brand'">
            <ul class="list_ul" style>
                    <mt-swipe :stopPropagation="true" :prevent="true" :auto="0" style="height: 356px;" class="swipe">
                    <mt-swipe-item>
                        <li class="li">
                            <a href="javascript:void(0)">
                                <div class="img_box">
                                    <img src="https://p4.maiyaole.com/img/201802/01/200_20180201175427332.jpg" lazy="loaded">
                                </div>
                                <p class="pro_name">马应龙  前列通栓 2.5g*6粒</p>
                                <span class="price">¥9.3</span>
                            </a>
                        </li>
                        <li class="li">
                            <a href="javascript:void(0)">
                                <div class="img_box">
                                    <img src="https://p4.maiyaole.com/img/201802/01/200_20180201175427332.jpg" lazy="loaded">
                                </div>
                                <p class="pro_name">马应龙  前列通栓 2.5g*6粒</p>
                                <span class="price">¥9.3</span>
                            </a>
                        </li>
                        <li class="li">
                            <a href="javascript:void(0)">
                                <div class="img_box">
                                    <img src="https://p4.maiyaole.com/img/201802/01/200_20180201175427332.jpg" lazy="loaded">
                                </div>
                                <p class="pro_name">马应龙  前列通栓 2.5g*6粒</p>
                                <span class="price">¥9.3</span>
                            </a>
                        </li>
                        <li class="li">
                            <a href="javascript:void(0)">
                                <div class="img_box">
                                    <img src="https://p4.maiyaole.com/img/201802/01/200_20180201175427332.jpg" lazy="loaded">
                                </div>
                                <p class="pro_name">马应龙  前列通栓 2.5g*6粒</p>
                                <span class="price">¥9.3</span>
                            </a>
                        </li>
                        <li class="li">
                            <a href="javascript:void(0)">
                                <div class="img_box">
                                    <img src="https://p4.maiyaole.com/img/201802/01/200_20180201175427332.jpg" lazy="loaded">
                                </div>
                                <p class="pro_name">马应龙  前列通栓 2.5g*6粒</p>
                                <span class="price">¥9.3</span>
                            </a>
                        </li>
                        <li class="li">
                            <a href="javascript:void(0)">
                                <div class="img_box">
                                    <img src="https://p4.maiyaole.com/img/201802/01/200_20180201175427332.jpg" lazy="loaded">
                                </div>
                                <p class="pro_name">马应龙  前列通栓 2.5g*6粒</p>
                                <span class="price">¥9.3</span>
                            </a>
                        </li>
                    </mt-swipe-item>
                    <mt-swipe-item>
                        <li class="li">
                            <a href="javascript:void(0)">
                                <div class="img_box">
                                    <img src="https://p4.maiyaole.com/img/201802/01/200_20180201175427332.jpg" lazy="loaded">
                                </div>
                                <p class="pro_name">马应龙  前列通栓 2.5g*6粒</p>
                                <span class="price">¥9.3</span>
                            </a>
                        </li>
                        <li class="li">
                            <a href="javascript:void(0)">
                                <div class="img_box">
                                    <img src="https://p4.maiyaole.com/img/201802/01/200_20180201175427332.jpg" lazy="loaded">
                                </div>
                                <p class="pro_name">马应龙  前列通栓 2.5g*6粒</p>
                                <span class="price">¥9.3</span>
                            </a>
                        </li>
                        <li class="li">
                            <a href="javascript:void(0)">
                                <div class="img_box">
                                    <img src="https://p4.maiyaole.com/img/201802/01/200_20180201175427332.jpg" lazy="loaded">
                                </div>
                                <p class="pro_name">马应龙  前列通栓 2.5g*6粒</p>
                                <span class="price">¥9.3</span>
                            </a>
                        </li>
                        <li class="li">
                            <a href="javascript:void(0)">
                                <div class="img_box">
                                    <img src="https://p4.maiyaole.com/img/201802/01/200_20180201175427332.jpg" lazy="loaded">
                                </div>
                                <p class="pro_name">马应龙  前列通栓 2.5g*6粒</p>
                                <span class="price">¥9.3</span>
                            </a>
                        </li>
                        <li class="li">
                            <a href="javascript:void(0)">
                                <div class="img_box">
                                    <img src="https://p4.maiyaole.com/img/201802/01/200_20180201175427332.jpg" lazy="loaded">
                                </div>
                                <p class="pro_name">马应龙  前列通栓 2.5g*6粒</p>
                                <span class="price">¥9.3</span>
                            </a>
                        </li>
                        <li class="li">
                            <a href="javascript:void(0)">
                                <div class="img_box">
                                    <img src="https://p4.maiyaole.com/img/201802/01/200_20180201175427332.jpg" lazy="loaded">
                                </div>
                                <p class="pro_name">马应龙  前列通栓 2.5g*6粒</p>
                                <span class="price">¥9.3</span>
                            </a>
                        </li>
                    </mt-swipe-item>
                </mt-swipe>
            </ul>
        </div>          
    </div>
</template>

<script>
export default {
    data(){
        return {
            changeSiderType: 'look'
        }
    }
}
</script>

<style lang="scss" scoped>
 @import '../../../style/mixin';
   .pro_content .pro_sider_tab {
        position: relative;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        background: #fff;
        padding: 0 0.26666667rem;
        border-bottom: 1px solid #e1e1e1;
        .pro_sider_item {
            position: relative;
            display: block;
            -webkit-box-flex: 1;
            -webkit-flex: 1;
            flex: 1;
            padding: 0.26666667rem;
            font-size: 0.42666667rem;
            text-align: center;
            &.active {
                color: #FF6666;
                }
            &.active:before {
                content: '';
                position: absolute;
                left: 0.53333333rem;
                right: 0.53333333rem;
                bottom: 0;
                height: 0.02666667rem;
                background-color: #FF6666;
                }
        }
        .pro_sider_item:after {
            content: '';
            position: absolute;
            right: 0;
            top: 20%;
            width: 0.02666667rem;
            height: 60%;
            background-color: #e1e1e1;
        }
    }
    .pro_content .pro_tab_box {
        margin-bottom: 0.26666667rem;
            .list_ul {
            position: relative;
            width: 100%;
            padding: 0.26666667rem 0 0 0.26666667rem;
            background: #fff;
            overflow: hidden;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            li {
                width: 33.333333%;
                margin-bottom: 0.26666667rem;
                float: left;
                    a {
                    border: 1px solid #f3f3f3;
                    display: block;
                    overflow: hidden;
                    margin-right: 0.26666667rem;
                }
                .img_box {
                    text-align: center;
                    padding: 0.26666667rem;
                    img {
                        height: 1.76rem;
                        text-align: center;
                    }
                }
                .pro_name {
                    font-size: 0.34666667rem;
                    color: #333;
                    padding: 0.13333333rem 0.13333333rem 0 0.13333333rem;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    height: 1rem;
                }
                .price {
                    color: #F35448;
                    font-size: 0.4rem;
                    padding-top: 0.13333333rem;
                    padding-left: 0.13333333rem;
                }
            }
        }
    }
</style>

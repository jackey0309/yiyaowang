<template>
    <div id="home" class="pre-home page">
         <div class="header_cover" style="opacity: 0; transition: all 0.5s ease 0s;"></div>
       <head-top></head-top>
    <div class="content">
    <mt-swipe :stopPropagation="true" :prevent="true" :auto="5000" class="banner">
        <mt-swipe-item>
          <a href="">
              <img src="https://p2.maiyaole.com/img/mobile/20191/1549937031756182.jpg" alt="">
          </a>
        </mt-swipe-item>
         <mt-swipe-item>
          <a href="">
              <img src=" https://p1.maiyaole.com/img/mobile/20191/1550192661371188.jpg" alt="">
          </a>
        </mt-swipe-item>
         <mt-swipe-item>
          <a href="">
              <img src="https://p2.maiyaole.com/img/mobile/20191/1549937031756182.jpg" alt="">
          </a>
        </mt-swipe-item>
         <mt-swipe-item>
          <a href="">
              <img src=" https://p1.maiyaole.com/img/mobile/20191/1550192661371188.jpg" alt="">
          </a>
        </mt-swipe-item>
         <mt-swipe-item>
          <a href="">
              <img src="https://p2.maiyaole.com/img/mobile/20191/1549937031756182.jpg" alt="">
          </a>
        </mt-swipe-item>
         <mt-swipe-item>
          <a href="">
              <img src=" https://p1.maiyaole.com/img/mobile/20191/1550192661371188.jpg" alt="">
          </a>
        </mt-swipe-item>
      </mt-swipe>
      <!-- banner -->
      <div class="floor">
          <div class="nav_menu nav_menu_two">
              <div class="nav_inner">
                  <div class="nav_box">
                      <a href="https://m.111.com.cn/maps/index.html?pageId=660&type=release" class="nav_item">
                        <div class="nav_img">
                            <img src="https://p3.maiyaole.com/img/mobile/201810/1541953163405143.png" alt="">
                        </div>
                        <p>中西药品</p>
                      </a>
                      <a href="https://m.111.com.cn/maps/index.html?pageId=660&type=release" class="nav_item">
                        <div class="nav_img">
                            <img src="https://p3.maiyaole.com/img/mobile/201810/1541953163405143.png" alt="">
                        </div>
                        <p>中西药品</p>
                      </a>
                      <a href="https://m.111.com.cn/maps/index.html?pageId=660&type=release" class="nav_item">
                        <div class="nav_img">
                            <img src="https://p3.maiyaole.com/img/mobile/201810/1541953163405143.png" alt="">
                        </div>
                        <p>中西药品</p>
                      </a>
                      <a href="https://m.111.com.cn/maps/index.html?pageId=660&type=release" class="nav_item">
                        <div class="nav_img">
                            <img src="https://p3.maiyaole.com/img/mobile/201810/1541953163405143.png" alt="">
                        </div>
                        <p>中西药品</p>
                      </a>
                      <a href="https://m.111.com.cn/maps/index.html?pageId=660&type=release" class="nav_item">
                        <div class="nav_img">
                            <img src="https://p3.maiyaole.com/img/mobile/201810/1541953163405143.png" alt="">
                        </div>
                        <p>中西药品</p>
                      </a>
                  </div>
                   <div class="nav_box">
                      <a href="https://m.111.com.cn/maps/index.html?pageId=660&type=release" class="nav_item">
                        <div class="nav_img">
                            <img src="https://p3.maiyaole.com/img/mobile/201810/1541953163405143.png" alt="">
                        </div>
                        <p>中西药品</p>
                      </a>
                      <a href="https://m.111.com.cn/maps/index.html?pageId=660&type=release" class="nav_item">
                        <div class="nav_img">
                            <img src="https://p3.maiyaole.com/img/mobile/201810/1541953163405143.png" alt="">
                        </div>
                        <p>中西药品</p>
                      </a>
                      <a href="https://m.111.com.cn/maps/index.html?pageId=660&type=release" class="nav_item">
                        <div class="nav_img">
                            <img src="https://p3.maiyaole.com/img/mobile/201810/1541953163405143.png" alt="">
                        </div>
                        <p>中西药品</p>
                      </a>
                      <a href="https://m.111.com.cn/maps/index.html?pageId=660&type=release" class="nav_item">
                        <div class="nav_img">
                            <img src="https://p3.maiyaole.com/img/mobile/201810/1541953163405143.png" alt="">
                        </div>
                        <p>中西药品</p>
                      </a>
                      <a href="https://m.111.com.cn/maps/index.html?pageId=660&type=release" class="nav_item">
                        <div class="nav_img">
                            <img src="https://p3.maiyaole.com/img/mobile/201810/1541953163405143.png" alt="">
                        </div>
                        <p>中西药品</p>
                      </a>
                  </div>
              </div>
               <div class="nav_img_bg default_pic">
                    <img src="https://p2.maiyaole.com/img/mobile/20191/1549937409153102.jpg" alt="">
                </div>
          </div>
      </div>
      <div class="floor"></div>
    </div>   
       <foot-guide></foot-guide>   
       
    </div>
    
</template>

<script>
import headTop from '../../components/header/head'
import footGuide from '../../components/footer/footGuide'
import { Swipe,SwipeItem,Lazyload} from 'mint-ui';


export default {
    components:{
        headTop,
        footGuide,
        Swipe,
        SwipeItem
    }
}
</script>

<style lang="scss" scoped>
    @import '../../style/mixin';
    #home{
        min-height: 100vh;
        padding-bottom: 1.35rem;
    
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
    /* banner */
  .banner {
    height: 3.97333333rem;
    img {
      min-width: 100%;
      max-width: 100%;
      max-height: 100%; 
    }
  }
}
  /* banner */
.content{
    .nav_menu {
        position: relative;
        min-height: 2.16rem;
        background: #fff;
        overflow: hidden;
        z-index: 2;
        .nav_inner {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            padding: .4rem 0 .48rem;
                .nav_box {
                    width: 100%;
                    overflow: hidden;
                    padding: 0 .13333333rem;
                    box-sizing: border-box;
                    a {
                        color: #333;
                        text-decoration: none;
                    }
                    .nav_item {
                        position: relative;
                        width: 20%;
                        float: left;
                        text-align: center;
                        vertical-align: middle;
                        .nav_img {
                            width: 1.17333333rem;
                            height: 1.17333333rem;
                            overflow: hidden;
                            margin: 0 auto;
                            img {
                                width: 1.17333333rem;
                                height: 1.17333333rem;
                            } 
                        }
                        p{
                            margin-top: .21333333rem;
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            word-break: break-all;
                            font-size: .34666667rem;
                            line-height: .48rem;
                            text-align: center;
                            box-sizing: border-box;
                                        }
                    }
                }
                .nav_box:first-child {
                    margin-top: 0;
                }
                .nav_box:last-child {
                    margin-top: .32rem;
                }
        }
    }
    .nav_menu_two {
        min-height: 4.66666667rem;
    }
}
 .default_pic {
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUoAAAFKCAMAAABM9+Y3AAAAVFBMV…Oc7ShqUPi+YctvJQCZzO0QERERERERERERERERERER/bMXzfLKnjL9Py8AAAAASUVORK5CYII=) no-repeat 50%;
        background-size: 1.33333333rem auto;
    }
img {
    width: 100%;
    vertical-align: middle;
}
</style>


<style lang="scss">
  #home {
    min-height: 100vh;
    padding-bottom: 1.35rem;
    .banner {
        .mint-swipe-indicators {
            left: inherit;
            right: .26666667rem;
            transform: translateX(0);
            position: absolute;
            bottom: .24rem;
            li{
                width: .21333333rem;
                height: .21333333rem;
                margin: .08rem;
            }
        }
            .mint-swipe-indicator{
                display: inline-block;
                border-radius: 50%;
                background: #fff;
                opacity: .5;
            &.is-active {
                background: #fff;
                opacity: 1;
            }
        }
        }
    }
</style>
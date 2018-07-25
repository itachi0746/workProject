<template>
  <div>
    <!--筛选条件-->
    <div class="sort-container">
      <div class="sort-item">
        <span>城市</span>
        <i class="fa fa-caret-down"></i>
      </div>
      <div class="sort-item">
        <span>地区</span>
        <i class="fa fa-caret-down"></i>
      </div>
      <div class="sort-item">
        <span>特色</span>
        <i class="fa fa-caret-down"></i>
      </div>

    </div>
    <!--选地区-->
    <div class="filter-container">
      <div class="filter-head">
        <div>
          <span>地区</span>
        </div>
        <div>
          <span>地点</span>
        </div>
      </div>
      <div class="category-container">
        <div class="wrapper category-left" ref="wrapper" id="category-left"  style="touch-action:none;">
          <div class="content">
            <ul>
              <li class="category-left-li">11</li>
              <li class="category-left-li">11</li>
              <li class="category-left-li">11</li>
              <li class="category-left-li">11</li>
              <li class="category-left-li">11</li>
              <li class="category-left-li">11</li>
              <li class="category-left-li">11</li>
              <li class="category-left-li">11</li>
              <li class="category-left-li">11</li>
              <li class="category-left-li">11</li>
              <li class="category-left-li">11</li>
              <li class="category-left-li">11</li>
              <li class="category-left-li">11</li>
              <li class="category-left-li">11</li>
              <li class="category-left-li">11</li>
              <li class="category-left-li">11</li>
              <li class="category-left-li">11</li>
              <li class="category-left-li">11</li>
              <li class="category-left-li">11</li>
              <li class="category-left-li">11</li>
              <li class="category-left-li">11</li>
            </ul>
          </div>
        </div>
        <div class="wrapper category-right" ref="wrapper">
          <div class="content">
            <ul>
              <li>11</li>
              <li>11</li>
              <li>11</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
    <!--遮罩层-->
    <div class="back-cover"></div>
    <!--轮播图-->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

    </div>
    <!--推荐列表-->
    <div class="recommend-container">
      <div class="recommend-title">
        <span>热门推荐</span>
      </div>
      <div class="recommend-item-container">
        <div class="recommend-item-wrap">
          <div class="recommend-item">
            <div>
              <img src="../../assets/recommend.png" alt="">
            </div>
            <p>
              我不是妖神
            </p>
          </div>
          <div class="recommend-item">
            <div>
              <img src="../../assets/recommend.png" alt="">
            </div>
            <p>
              我不是妖神
            </p>
          </div>
          <div class="recommend-item">
            <div>
              <img src="../../assets/recommend.png" alt="">
            </div>
            <p>
              我不是妖神
            </p>
          </div>
          <div class="recommend-item">
            <div>
              <img src="../../assets/recommend.png" alt="">
            </div>
            <p>
              我不是妖神
            </p>
          </div>
          <div class="recommend-item">
            <div>
              <img src="../../assets/recommend.png" alt="">
            </div>
            <p>
              我不是妖神
            </p>
          </div>
          <div class="recommend-item">
            <div>
              <img src="../../assets/recommend.png" alt="">
            </div>
            <p>
              我不是妖神
            </p>
          </div>
        </div>
      </div>

    </div>
    <!--分割条-->
    <div class="division"></div>
    <!--<shopList></shopList>-->
  </div>


</template>

<script>
  import '@/style/swiper.min.css'
  import Swiper from '../../../static/swiper.min'
  import shopList from '@/components/common/shoplist'
  import BScroll from 'better-scroll'

export default {

  mounted() {

      new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true,
        autoplay: {
          disableOnInteraction: false,
        },
      });

    //即定时器 20ms
    this.$nextTick(() => {
      //$refs绑定元素
      if(!this.scroll){
        console.log(this.$refs.wrapper)
        this.scroll = new BScroll('#category-left', {
          //开启点击事件 默认为false
          click:true
        })
        // console.log(this.scroll)
      }
    })

  },
  components: {
    shopList
  }

//  beforeDestroy: function() {}
}
</script>

<style lang="scss" scoped>
  @import "src/style/mixin";

  .sort-container {
    background-color: #fff;
    border-bottom: 1px solid #ececec;
    position: fixed;
    top: 0rem;
    right: 0;
    width: 100%;
    display: -ms-flexbox;
    display: flex;
    z-index: 13;
  }
  .sort-item {
    margin: .2rem 0;
    font-size: .7rem;
    color: #ddd;
    width: 33.3%;
    height: 1.2rem;
    line-height:1.2rem;
    text-align: center;
    border-right: 1px solid #ececec;

    span {
      padding-right: .7rem;
    }
    span,i {
      position: relative;
      left: .5rem;
    }
  }
  .swiper-container {
    /*margin-top: 1.6rem;*/
    width: 100%;
    position: relative;
    top: 1.6rem;
    height: 5rem;
  }
  .recommend-container {
    width: 100%;
    height: 11rem;
    overflow: hidden;
  }
  .recommend-item-container {
    overflow-x: scroll;

  }
  .recommend-title {
    font-size: .75rem;
    padding-left: .8rem;
    padding-bottom: .3rem;
  }
  .recommend-item-wrap {
    width: 35rem;
    /*width: auto;*/

  }
  .recommend-item {
    padding-left:  0.5rem;
    display: inline-block;
    img,div {
      width: 5rem;
    }
    p {
      font-size: .75rem;
      padding-left: .2rem;
    }
  }
  .division {
    width: 100%;
    height: .5rem;
    background-color: #e2e2e2;
  }
  /*地点筛选*/
  .filter-container {
    width: 100%;
    height: 1.6rem;
    position: fixed;
    z-index: 11;
    top: 1.65rem;
    background-color: #fff;
    font-size: .7rem;
    line-height: 1.6rem;

  }
  .filter-head {
    text-align: center;
    overflow: hidden;

    div {
      float: left;
      width: 50%;
    }
    span {
      display: inline-block;
      width: 4rem;
      /*height: 90%;*/
      border-bottom: 2px solid blue;
    }
  }
  .category-container {
    width: 100%;
    position: fixed;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    z-index: 10;
    top: 3.3rem;
    left: 0;
    border-top: 0.025rem solid #e4e4e4;
    background-color: #fff;

    .content{
      height:100%;
    }
  }
  .wrapper,.category-left {
    width: 100%;
    position:absolute;
    top: 0px;
    bottom: 50px;
    overflow: hidden;
    z-index: 1;
  }

  .category-left {
    -webkit-box-flex: 2;
    -webkit-flex: 2;
    -ms-flex: 2;
    flex: 2;
    background-color: #f1f1f1;
    height: 16rem;
    /*overflow-y: auto;*/

    .category-left-li {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
      justify-content: space-between;
      padding: 0 0.5rem;
    }
  }
  .category-right {
    -webkit-box-flex: 3;
    -webkit-flex: 3;
    -ms-flex: 3;
    flex: 3;
    background-color: #fff;
    padding-left: 0.5rem;
    height: 16rem;
    /*overflow-y: auto;*/
  }
  .back-cover {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }
</style>

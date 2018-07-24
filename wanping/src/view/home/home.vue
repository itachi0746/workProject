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
    <!--商家列表-->
    <div class="shoplist-container">
      <div class="shoplist-item">
        <p class="shop-name">
          商家名字1111
          <span class="right">
            人流量: 1000/h
          </span>
        </p>
        <div class="oh">
          <div class="left shop-price">
            <span>¥</span>
            <span>1000</span>
            <span>起</span>
          </div>
          <div class="left screen-param">
            <span>屏幕参数:</span>
            <span>100*100</span>
          </div>

        </div>
        <div class="discount">
          <div>
            <span class="_cu">促</span>
            <span>促销描述</span>
          </div>
          <div>
            <span class="_hui">惠</span>
            <span>优惠描述</span>
          </div>

        </div>
      </div>
      <div class="shoplist-item">
        <p class="shop-name">
          商家名字1111
          <span class="right">
            人流量: 1000/h
          </span>
        </p>
        <div class="oh">
          <div class="left shop-price">
            <span>¥</span>
            <span>1000</span>
            <span>起</span>
          </div>
          <div class="left screen-param">
            <span>屏幕参数:</span>
            <span>100*100</span>
          </div>

        </div>
        <div class="discount">
          <div>
            <span class="_cu">促</span>
            <span>促销描述</span>
          </div>
          <div>
            <span class="_hui">惠</span>
            <span>优惠描述</span>
          </div>

        </div>
      </div>
      <div class="shoplist-item">
        <p class="shop-name">
          商家名字1111
          <span class="right">
            人流量: 1000/h
          </span>
        </p>
        <div class="oh">
          <div class="left shop-price">
            <span>¥</span>
            <span>1000</span>
            <span>起</span>
          </div>
          <div class="left screen-param">
            <span>屏幕参数:</span>
            <span>100*100</span>
          </div>

        </div>
        <div class="discount">
          <div>
            <span class="_cu">促</span>
            <span>促销描述</span>
          </div>
          <div>
            <span class="_hui">惠</span>
            <span>优惠描述</span>
          </div>

        </div>
      </div>
      <div class="shoplist-item">
        <p class="shop-name">
          商家名字1111
          <span class="right">
            人流量: 1000/h
          </span>
        </p>
        <div class="oh">
          <div class="left shop-price">
            <span>¥</span>
            <span>1000</span>
            <span>起</span>
          </div>
          <div class="left screen-param">
            <span>屏幕参数:</span>
            <span>100*100</span>
          </div>

        </div>
        <div class="discount">
          <div>
            <span class="_cu">促</span>
            <span>促销描述</span>
          </div>
          <div>
            <span class="_hui">惠</span>
            <span>优惠描述</span>
          </div>

        </div>
      </div>

    </div>
    <p class="empty_data">没有更多了</p>
  </div>


</template>

<script>
  import '../../style/swiper.min.css'
//  import Swiper from  '../../plugins/swiper.min.js'
  import Swiper from '../../../static/swiper.min'

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


  },

//  beforeDestroy: function() {}
}
</script>

<style lang="scss" scoped>
  @import "../../style/mixin";

  .sort-container {
    background-color: #fff;
    /*border-bottom: .025rem solid #f1f1f1;*/
    position: fixed;
    top: 0rem;
    right: 0;
    width: 100%;
    display: -ms-flexbox;
    display: flex;
    z-index: 13;
  }
  .sort-item {
    /*padding: .5rem 0;*/
    font-size: .7rem;
    color: #ddd;
    width: 33.3%;
    height: 1.6rem;
    text-align: center;
    line-height: 1.6rem;
  }
  .swiper-container {
    margin-top: 1.6rem;
    width: 100%;
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
  .shoplist-item {
    width: 100%;
    border-top: 1px solid $bc;
    padding: .5rem;
  }
  .shop-name {
    font-size: .9rem;

    span {
      /*font-size: .7rem;*/
      @include sc(.7rem , #666);
    }
  }
  .shop-price  {
    span {
      @include sc(.7rem , $blue);
    }
    span:nth-child(2) {
      font-size: 1rem;
    }

  }
  .screen-param  {
    padding-left: 1rem;

    span {
      @include sc(.7rem , #ffa351);

    }
  }
  .discount span {
    @include sc(.7rem , #666);

  }
  .discount ._cu {
    @extend %_cu;
  }
  .discount ._hui {
    @extend %_hui;
  }

.empty_data {
  font-size: 0.6rem;
  color: #666;
  text-align: center;
  line-height: 2rem;
}
</style>

<template>
  <div class="Mask2 awardResult">
    <!--中奖-->
    <div class="result-gift">
      <div class="successBg"></div>
      <h3>恭喜你获得了</h3>
      <div class="giftImg">
        <img src="../assets/gift.png"/>

      </div>
      <p style="font-size: .95rem;
    line-height: 1.65rem;
    color: #ffdb12;">一等奖</p>
      <h3>价值100元礼品</h3>

      <div class="resule-gift-buttonMenu">

        <div class="giftBtnBox lookDetail">
          <a class="seeAwardDetail buttonContent">查看奖品详情</a>
        </div>

      </div>
    </div>
    <!--没中奖-->
    <div class="result-nogift">
      <div class="nogiftImg">
        <img src="../assets/faiImg2-2.png"/>
      </div>

      <div class="resule-gift-buttonMenu">

        <div class="repeatDraw">继续抽奖</div>
        <div class="menuBack">返回首页</div>
        <div>
          <a class="followBtn">关注我们</a>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

  export default {
//  data: function () {
//    return {
//    }
//  },
//
//  components: {},
//
//  computed: {},
//
//  methods: {}
//
//  mounted: function() {},
//
//  beforeDestroy: function() {}
  }
</script>

<style>
  .Mask2 {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    position: absolute;
    top: 0;
    left: 0;

  }

  .result-gift {
    padding-top: 4rem;
    position: relative;
    z-index: 300;
    text-align: center;
    color: #ffffff;

  }
  .result-nogift {
    padding-top: 2rem;
    position: relative;
    z-index: 300;
    text-align: center;
    color: #ffffff;
    display: none;


  }
  .result-nogift img {
    width: 15rem;

  }


  .successBg {
    top: -3rem;
    width: 15rem;
    height: 15rem;
    background-image: url('../assets/light.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: absolute;
    z-index: 15;
    border-radius: 50%;
    left: 50%;
    margin-left: -7.5rem;
    -webkit-animation: bgRotate 5s linear infinite;
    animation: bgRotate 5s linear infinite;
  }

  .awardResult .successBg {
    top: 3rem;

  }

  .giftImg {
    position: relative;
    margin-top: 2rem;
    margin-bottom: 2rem;
    z-index: 20;
  }
  .nogiftImg {
    position: relative;
    margin-top: 2rem;
    margin-bottom: 2rem;
    z-index: 20;
  }

  .giftImg img {
    width: 5.5rem;
  }

  .resule-gift-buttonMenu {
    margin-top: 3rem;
    color: #fff;
  }

  .giftBtnBox {
    width: 10rem;
    height: 2rem;
    line-height: 2rem !important;
    background: #41bd43;
    border-radius: .2rem;
    margin: 0 auto .5rem;
  }

  .giftBtnBox {
    width: 10rem;
    height: 2rem;
    line-height: 2rem !important;
    background: #41bd43;
    border-radius: .2rem;
    margin: 0 auto .5rem;
  }

  .menuBtnBox .menuName, .giftBtnBox .buttonContent {
    display: inline-block;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .giftBtnBox .buttonContent {
    color: #fff;
    line-height: 2rem;
    font-size: 0.8rem;
  }
  .repeatDraw {
    font-size:0.8rem;
    display: inline-block;
    background: #fe8208;
    left: 3rem;
    right: auto;
    width: 5rem;
    line-height: 2rem;
    height: 2rem;
    -webkit-border-radius: 0.2rem;
    -moz-border-radius: 0.2rem;
    border-radius: 0.2rem;
    margin-bottom: .5rem;

  }
  .menuBack {
    font-size:0.8rem;
    display: inline-block;
    width: 5rem;
    height: 2rem;
    line-height: 2rem!important;
    background: #41bd43;
    border-radius: .2rem;
    margin-bottom: .5rem;

  }
  .followBtn {
    display: inline-block;
    width: 10.2rem;
    height: 2rem;
    line-height: 2rem;

    background: #41bd43;
    border-radius: .2rem;
    font-size:0.8rem;

  }

  @-webkit-keyframes bgRotate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes bgRotate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
</style>

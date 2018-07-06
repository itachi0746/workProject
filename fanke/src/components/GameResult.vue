<template>
  <div class="Mask">
    <div class="resultBox">
      <div class="successBg"></div>
      <div class="optContainer">
        <img class="manImg" src="../assets/manImg.jpg"/>
        <img src="../assets/success.png"/>
        <p>您的成绩为: 999分</p>
        <p>陈宫击败全国99%的玩家</p>
        <p>最佳成绩为: 999分</p>
        <p>最佳排名为: NO.1</p>
        <div class="result-button main-btn">
          快来领
        </div>
        <div class="buttonBox">
          <div class="result-button rank-btn">
            排行榜
          </div>
          <div class="result-button home-btn">
            返回首页
          </div>
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
  .Mask {
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.8);
    /*position: absolute;*/
    /*top: 0;*/
    /*left: 0;*/
  }
  .resultBox {
    padding-top: 1rem;
    width: 100%;
    height: 100%;
    text-align: center;
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
    margin-left:-7.5rem;
    -webkit-animation: bgRotate 5s linear infinite;
    animation: bgRotate 5s linear infinite;
  }
  .optContainer {
    font-size: .7rem;
    line-height: 1rem;
    text-align: center;
    height: 25rem;
    overflow-y: auto;
    position: relative;
    z-index: 30;
    color: #ffffff;
    width: 90%;
    margin: 0 auto;
  }
  .optContainer p:nth-child(3) {
    font-size: 0.9rem;
  }
  .optContainer p:nth-child(4) {
    margin-bottom:0.8rem;
  }
  .optContainer p {
    font-size: 0.8rem;
    margin-bottom:0.3rem;
  }
  .manImg {
    border: .4rem solid #70d572;
    border-radius: 50%;

  }
  .optContainer img:nth-child(2) {
    width: 90%;
  }
  .result-button {
    height: 2rem;
    line-height: 2rem;
    font-size: 0.8rem;
    border-radius: .2rem;
  }
  .main-btn {
    width: 80%;
    background-color: #fe8208;
    margin: 0.5rem auto;
  }
  .rank-btn {
    width: 48%;
    background: #41bd43;
    display: inline-block;
    float: left;
  }
  .home-btn {
    width: 48%;
    background: #41bd43;
    display: inline-block;
    float: right;
  }
  .buttonBox {
    margin: 0.5rem auto;
    width: 80%;
    overflow: hidden;
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

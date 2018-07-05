<template>
  <div class="resultMask">
    <div class="resultBox">
      <div class="successBg"></div>
      <div class="optContainer">
        <img class="manImg" src="../assets/manImg.jpg"/>
        <img src="../assets/success.png"/>
        <p>您的成绩为: 999分</p>
        <p>陈宫击败全国99%的玩家</p>
        <p>最佳成绩为: 999分</p>
        <p>最佳排名为: NO.1</p>

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
  .resultMask {
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
  }
  .optContainer {
    font-size: .7rem;
    line-height: 1rem;
    text-align: center;
    height: 25rem;
    overflow-y: auto;
    position: relative;
    z-index: 30;
  }
  .manImg {
    border: .4rem solid #70d572;
    border-radius: 50%;

  }
  .optContainer img:nth-child(2) {
    width: 90%;
  }
</style>

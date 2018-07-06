<template>
  <div id="app">
    <router-view></router-view>
    <!--背景-->
    <!--<Bg :beforeStart="beforeStart"></Bg>-->
    <!--游戏过程页-->
    <!--<div class="gamePart">-->
      <!--<UserImg></UserImg>-->
      <!--<Music></Music>-->
      <!--<QList></QList>-->
    <!--</div>-->
    <!--&lt;!&ndash;游戏结果页&ndash;&gt;-->
    <!--<div class="gameResultPart">-->
    <!--<GameResult></GameResult>-->
    <!--</div>-->
  </div>
</template>

<script>
//  import GameResult from './components/GameResult.vue'

export default {
//  data: function () {
//    return {
//      // 是否是 游戏开始前
//      beforeStart: false
//    }
//  },

  name: 'App',
  components: {
//    Bg,
//    RuleImg,
//    TitleImg,
//    StartBtn,
//    UserImg,
//    Music,
//    QList,
//    GameResult,
//    Shake
  },

}

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    height: 100%;
    position: relative;
    /* -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px; */
  }
  /*.gamePart {*/
    /*width: 100%;*/
    /*height: 100%;*/
    /*position: relative;*/
    /*z-index: 10;*/
    /*display: none;*/
  /*}*/
  .gameResultPart {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 20;

  }

</style>

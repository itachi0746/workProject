<template>
  <div id="app">
    <!--背景-->
    <Bg :beforeStart="beforeStart"></Bg>
    <!--首页-->
    <div v-if="beforeStart">
      <RuleImg></RuleImg>
      <TitleImg></TitleImg>
      <StartBtn :beforeStart="beforeStart" @start="beforeStart=false"></StartBtn>
    </div>
    <!--游戏过程页-->
    <div class="gamePart">
      <UserImg></UserImg>
      <Music></Music>
      <QList></QList>
    </div>
    <!--游戏结果页-->
    <div class="gameResultPart">
      <GameResult></GameResult>
    </div>
  </div>
</template>

<script>
import Bg from './components/Bg'
import RuleImg from './components/RuleImg'
import TitleImg from './components/TitleImg'
import StartBtn from './components/StartBtn'
import UserImg from './components/UserImg.vue'
import Music from './components/Music.vue'
import QList from './components/QList.vue'
import GameResult from './components/GameResult.vue'

export default {
  data: function () {
    return {
      // 是否是 游戏开始前
      beforeStart: false
    }
  },

  name: 'App',
  components: {
    Bg,
    RuleImg,
    TitleImg,
    StartBtn,
    UserImg,
    Music,
    QList,
    GameResult
  },
//  mounted: function () {
//    console.log(typeof this.beforeStart)
//  }
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
  .gamePart {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 10;
    /*display: none;*/
  }
  .gameResultPart {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 20;

  }

</style>

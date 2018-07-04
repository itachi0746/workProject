<template>
  <div id="app">
    <Bg></Bg>
    <RuleImg></RuleImg>
    <TitleImg></TitleImg>
  </div>
</template>

<script>
import Bg from './components/Bg'
import RuleImg from './components/RuleImg'
import TitleImg from './components/TitleImg'

export default {
  name: 'App',
  components: {
    Bg,
    RuleImg,
    TitleImg
  }
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
</style>

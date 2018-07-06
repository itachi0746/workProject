<template>
 <div>

   <!--首页-->
   <div>
     <div class="bg1"></div>
     <router-link to="/home/actInfo">
        <RuleImg></RuleImg>
     </router-link>
     <TitleImg></TitleImg>
     <StartBtn></StartBtn>
     <router-view></router-view>
   </div>
 </div>
</template>

<script>
  import RuleImg from '../components/RuleImg'
  import TitleImg from '../components/TitleImg'
  import StartBtn from '../components/StartBtn'

export default {
//  data: function () {
//    return {
//    }
//  },
//
  components: {
    RuleImg,
    TitleImg,
    StartBtn
  },
//
//  computed: {},
//
//  methods: {}
//
//  mounted: function() {
//    console.log('home mounted')
//  },

//  beforeDestroy: function() {
//    console.log('home beforeDestroy')
//
//  }
}
</script>

<style>
  .bg1 {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -99;
    background: url('../assets/bg1.png') no-repeat;
    background-size: contain;
  }
</style>

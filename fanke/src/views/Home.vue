<template>


   <!--首页-->
   <div class="homePage">
     <div class="bg1"></div>
     <!--<router-link to="/home/actInfo">-->
        <RuleImg></RuleImg>
     <!--</router-link>-->
     <TitleImg></TitleImg>
     <StartBtn></StartBtn>
     <router-view></router-view>
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
//    const url = 'http://120.25.233.154:8082/api/exam/GetQuestions';
//    this.$http({
//      url: url,//api 代理到json文件地址，后面的后缀是文件中的对象或者是数组
//      method: 'post',//请求方式
//      //这里可以添加axios文档中的各种配置
//    }).then(res => {
//      console.log(res.data, '请求成功');
//    }).catch(err => {
//      console.log(err.data, '请求错误');
//    })
//  },


//  beforeDestroy: function() {
//    console.log('home beforeDestroy')
//
//  }
}
</script>

<style>
  .homePage {
    position: relative;
    width: 100%;
    height: 100%;

  }
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

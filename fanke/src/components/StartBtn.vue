<template>
  <div class="bottom">
    <router-link :to="{name: 'gamePage', params: {questions: questions}}">
      <img src="../assets/startBtn.png"/>
    </router-link>
    <p>
       已有{{joinNum}}人参加活动
     </p>
  </div>
</template>

<script>
  export default {

    data: function () {
      return {
        joinNum: null,
        questions: []
      }
    },
//
//    components: {},
//
//    computed: {},
//
//    methods: {
//      start: function () {
//        this.beforeStart = false
//        console.log('btn',this.beforeStart)
//      }
//    },
//
    mounted: function () {
//      console.log(this.test);
//      请求问题数据
      const url = 'api/exam/GetQuestions';
      this.$http({
        url: url,//api 代理到json文件地址，后面的后缀是文件中的对象或者是数组
        method: 'post',//请求方式
        //这里可以添加axios文档中的各种配置
      }).then(res => {
        console.log(res.data, '请求成功');
        this.questions = res.data.Data;
//      this.questionsLength = this.questions.length;
        console.log('Home',this.questions)
      }).catch(err => {
        console.log(err, '请求错误');
      })
    },
//
//    beforeDestroy:function () {}
  }
</script>

<style>
  .bottom {
    position: absolute;
    bottom: 1rem;
    left: 0;
    width: 100%;
    text-align: center;
    font-size: 0.8rem;
  }
  .bottom img {
    width: 10rem;
  }
  .bottom p {
    color: #fff;
    text-shadow: rgb(125, 73, 25) -1px -1px 0px, rgb(125, 73, 25) 0px -1px 0px, rgb(125, 73, 25) 1px -1px 0px, rgb(125, 73, 25) 1px 0px 0px, rgb(125, 73, 25) 1px 1px 0px, rgb(125, 73, 25) 0px 1px 0px, rgb(125, 73, 25) -1px 1px 0px, rgb(125, 73, 25) -1px 0px 0px;
  }
</style>

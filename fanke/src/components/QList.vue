<template>
  <div class="QBox">
    <QItem v-for="(question, index) in questions" :key="index" :question="question" :questionsLength="questionsLength"></QItem>
    <!--<QItem></QItem>-->
  </div>
</template>

<script>
  import QItem from './QItem.vue'

  export default {
    data: function () {
      return {
        questions: [],
        questionsLength: null
      }
    },
    components: {
      QItem
    },
//
//  computed: {},
//
//
//    mounted: function() {
//      const url = '/api/exam/GetQuestions';
//      this.$http({
//        url: url,//api 代理到json文件地址，后面的后缀是文件中的对象或者是数组
//        method:'post',//请求方式
//        //这里可以添加axios文档中的各种配置
//      }).then( res => {
//        console.log(res.data,'请求成功');
//        this.questions = res.data.Data;
//        this.questionsLength = this.questions.length;
////        console.log(typeof this.questionsLength)
//      }).catch( err => {
//        console.log(err.data,'请求错误');
//      })
//    },
//
//  beforeDestroy: function() {}
  }
</script>

<style>
  .QBox {
    /*-webkit-box-sizing: border-box;*/
    /*-box-sizing: border-box;*/
    /*padding: 5rem 4rem;*/
    position: relative;
    width: 100%;
    height: 100%;
  }
</style>

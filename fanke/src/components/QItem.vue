<template>
  <div class="question">

    <div :class="{ animated: true, slideOutUp: isSlide }" v-if="questions">
      <p class="questionNum">{{ questions[Num].QuestionNo + '/' + questions.length }}</p>
      <p class="questionText">{{ questions[Num].QuestionDesc }}</p>
      <img :src="questions[Num].QuestionImage" alt="">

    </div>
    <div :class="{ animated: true, optionBox: true, slideOutDown: isSlide }" v-if="questions">
      <!--选项-->
      <div :class="{option: true}" v-for="(item, index) in questions[Num].Items" :key="index">
        <p class="" @click="checkAnswer" :id="questions[Num].Items[index].ItemId">{{item.ItemDesc}}</p>
      </div>

    </div>

  </div>
</template>

<script>

  export default {
    props: {
      questions: Array,
      questionsLength: Number,
      questionId: 1,
      itemId: ''
    },
//
//    data: function () {
//      return {
//        aa: this.questions
//      }
//    },
//
//    beforeCreate: function () {
//      this.aa = this.questions;
//      console.log('beforeCreate',this.questions)
//    },
    mounted: function () {
//      this.aa = this.questions;
      console.log('Qitem',this.questions[0].Items[0].ItemId)
    },
//    watch: {
//      questions: function () {
//        console.log('watch',this.questions)
//      }
//    }



//
  methods: {
//    getOptionData: function () {
//
//    },
    checkAnswer: function () {
      //请求问题答案
      const url = 'api/exam/CheckQuestion';
      this.$http({
        url: url,//api 代理到json文件地址，后面的后缀是文件中的对象或者是数组
        method: 'post',//请求方式
//        data: {
//          QuestionId: this.questionId
//          ItemId: itemId
//        }
        //这里可以添加axios文档中的各种配置
      }).then(res => {
        console.log(res.data, '请求成功');
//        this.questions = res.data.Data;

      }).catch(err => {
        console.log(err.data, '请求错误');
      })
    }
  }
//
//  mounted: function() {},
//
//  beforeDestroy: function() {}
  }
</script>

<style>
  .question {
    position: absolute;
    top: 5rem;
    left: 4rem;
  }
  .question img {
    width: 10.75rem;
  }
  .optionBox {
    margin-top: 3rem;

  }
  .option {
    margin-bottom: 1rem;
    width: 10.75rem;
    height: 1.75rem;
    background: url("../assets/btnDefault.png") no-repeat;
    background-size: 100% 100%;
  }
  .option p {
    font-size: 0.8rem;
    padding: .2rem 1rem;
    color: #ffffff;
  }
  .questionText {
    font-size:0.8rem;
    color: rgb(112, 0, 252);
    text-shadow: rgb(255, 255, 255) -1px -1px 0px, rgb(255, 255, 255) 0px -1px 0px, rgb(255, 255, 255) 1px -1px 0px, rgb(255, 255, 255) 1px 0px 0px, rgb(255, 255, 255) 1px 1px 0px, rgb(255, 255, 255) 0px 1px 0px, rgb(255, 255, 255) -1px 1px 0px, rgb(255, 255, 255) -1px 0px 0px;
  }
  .questionNum {
    font-size:0.9rem;
    color: #fe3311;
    text-shadow: -1px -1px 0 #fff, 0px -1px 0 #fff, 1px -1px 0 #fff, 1px 0 0 #fff, 1px 1px 0 #fff, 0px 1px 0 #fff, -1px 1px 0 #fff, -1px 0 0 #fff;
  }
</style>

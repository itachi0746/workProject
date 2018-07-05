<template>
  <div class="question">
    <p class="questionNum">{{ question.QuestionId + '/' + questionsLength }}</p>
    <p class="questionText">{{ question.QuestionDesc }}</p>
    <img src="../assets/yu.jpg" alt="">
    <div class="optionBox">
      <div class="option" v-for="(item, index) in question.Items" :key="index">
        <p>{{item.ItemDesc}}</p>
      </div>

    </div>
  </div>
</template>

<script>

  export default {
    props: {
      question: Object,
      questionsLength: Number
    },
//
//    data: function () {
//      return {
//        items: []
//      }
//    },
//
//    mounted: function () {
//      this.items = this.question.Items;
//      console.log('question',this.items)
//    }
//
//  methods: {}
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
    color: rgb(112, 0, 252);
    text-shadow: rgb(255, 255, 255) -1px -1px 0px, rgb(255, 255, 255) 0px -1px 0px, rgb(255, 255, 255) 1px -1px 0px, rgb(255, 255, 255) 1px 0px 0px, rgb(255, 255, 255) 1px 1px 0px, rgb(255, 255, 255) 0px 1px 0px, rgb(255, 255, 255) -1px 1px 0px, rgb(255, 255, 255) -1px 0px 0px;
  }
  .questionNum {
    color: #fe3311;
    text-shadow: -1px -1px 0 #fff, 0px -1px 0 #fff, 1px -1px 0 #fff, 1px 0 0 #fff, 1px 1px 0 #fff, 0px 1px 0 #fff, -1px 1px 0 #fff, -1px 0 0 #fff;
  }
</style>

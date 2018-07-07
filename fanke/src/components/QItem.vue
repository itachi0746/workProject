<template>
  <div class="question">
    <div>
      <p class="questionNum">{{ aa[0].QuestionId + '/' + questionsLength }}</p>
      <p class="questionText">{{ aa[0].QuestionDesc }}</p>
      <img src="../assets/yu.jpg" alt="">

    </div>
    <div class="optionBox">
      <div class="option" v-for="(item, index) in aa[0].Items" :key="index">
        <p>{{item.ItemDesc}}</p>
      </div>

    </div>
  </div>
</template>

<script>

  export default {
    props: {
      questions: Array,
      questionsLength: Number
    },
//
    data: function () {
      return {
        aa: []
      }
    },
//
    mounted: function () {
      this.aa = this.questions;
      console.log('question',this.questions)
    }
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

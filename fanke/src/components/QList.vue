<template>
  <!--问题-->
  <div class="QBox">
    <!--<div class="question">-->
      <!--<div :class="{ animated: true, slideOutUp: isSlide }" v-if="questions">-->
        <!--<p class="questionNum">{{ questions[Num].QuestionNo + '/' + questions.length }}</p>-->
        <!--<p class="questionText">{{ questions[Num].QuestionDesc }}</p>-->
        <!--<img :src="questions[Num].QuestionImage" alt="">-->

      <!--</div>-->
      <!--<div :class="{ animated: true, optionBox: true, slideOutDown: isSlide }" v-if="questions">-->
        <!--&lt;!&ndash;选项&ndash;&gt;-->
        <!--<div :class="{option: true}" v-for="(item, index) in questions[Num].Items" :key="index">-->
          <!--<p class="" @click="checkAnswer" :id="questions[Num].Items[index].ItemId">{{item.ItemDesc}}</p>-->
        <!--</div>-->

      <!--</div>-->

    <!--</div>-->
    <QItem></QItem>
  </div>

</template>

<script>
  import QItem from './QItem.vue'

  export default {
    props: {
      questions: Array,

    },
//    data: function () {
//      return {
//        isSlide: false,  // 动画开关
//        Num: 0,  // 第几条问题
//      }
//    },
    components: {
      QItem
    },

//
//  computed: {},
//
    mounted: function () {
      console.log('Qlist', this.questions);
//      请求问题数据
//      const url = 'api/exam/GetQuestions';
//      this.$http({
//        url: url,//api 代理到json文件地址，后面的后缀是文件中的对象或者是数组
//        method: 'post',//请求方式
//        //这里可以添加axios文档中的各种配置
//      }).then(res => {
//        console.log(res.data, '请求成功');
//        this.questions = res.data.Data;
//        this.questionsLength = this.questions.length;
//        console.log('qlist',this.questions)
//      }).catch(err => {
//        console.log(err.data, '请求错误');
//      })
    },
    methods: {

      checkAnswer: function () {
        // `event` 是原生 DOM 事件
        this.event = event;

        //请求问题答案
        const url = 'api/exam/CheckQuestion';
        this.$http({
          url: url,//api 代理到json文件地址，后面的后缀是文件中的对象或者是数组
          method: 'post',//请求方式
//        data: {
//          QuestionId: TODO
//          ItemId: TODO
//        }
          //这里可以添加axios文档中的各种配置
        }).then(res => {
          console.log(res.data.Data, '请求成功');
//        this.questions = res.data.Data;
          const rightAnswer = res.data.Data.Items[0].ItemId;
//          console.log(this.event.target.id)
//          alert(rightAnswer)
          if (event) {
//            alert(event.target.id)
//            回答正确
            if(this.event.target.id === rightAnswer) {
              this.event.target.style.background = 'url("/static/btnRight.png") 0% 0% / 100% 100% no-repeat';
//            错误
            } else {
              this.event.target.style.background = 'url("/static/btnWrong.png") 0% 0% / 100% 100% no-repeat';
              this.event.target.classList.add('shakeLR');

            }
            this.isSlide = true;

          }



        }).catch(err => {
          console.log(err.data.Data, '请求错误');
        })
      }
    }
  }
</script>

<style>
  .animated {
    -webkit-animation-delay: 0.7s;
    animation-delay: 0.7s;
  }
  /*.optionBox .animated {*/
    /*-webkit-animation-delay: 0s;*/
    /*animation-delay: 0s;*/
  /*}*/
  .QBox {
    /*-webkit-box-sizing: border-box;*/
    /*-box-sizing: border-box;*/
    /*padding: 5rem 4rem;*/
    position: relative;
    width: 100%;
    height: 100%;
  }

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

    /*background: url("../assets/btnDefault.png") no-repeat;*/
    /*background-size: 100% 100%;*/
  }
  .option p {
    font-size: 0.8rem;
    /*padding: .2rem 1rem;*/
    padding-left: 1rem;
    color: #ffffff;
    width: 9.75rem;
    height: 1.75rem;
    line-height: 1.70rem;
    background: url("../assets/btnDefault.png") no-repeat;
    background-size: 100% 100%;
    display: inline-block;
    position: relative;
    left: 0;

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
  @-webkit-keyframes shakeLR /* Safari 和 Chrome */
  {
    0% {left: 0rem;}
    25% {left: -1rem;}
    50% {left: 0rem;}
    75% {left: 1rem;}
    100% {left: 0rem;}
  }
  .shakeLR {
    -webkit-animation: shakeLR linear 0.7s;
    -o-animation: shakeLR linear 0.7s;
    animation: shakeLR linear 0.7s;
  }
</style>

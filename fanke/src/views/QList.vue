<template>
  <!--问题-->
  <div class="QBox">
    <div class="question">
      <div :class="{ animated: true, slideOutUp: isSlide }" v-if="questions">
        <!--<p class="questionNum">{{ questions[Num].QuestionNo + '/' + questions.length }}</p>-->
        <p class="questionNum">{{ questions[Num].QuestionNo + '/' + questions.length }}</p>
        <p class="questionText">{{ questions[Num].QuestionDesc }}</p>
        <img :src="questions[Num].QuestionImage" alt="">

      </div>
      <div :class="{ animated: true, optionBox: true, slideOutDown: isSlide }" v-if="questions">
        <!--选项-->
        <div class="option" v-for="(item, index) in questions[Num].Items" :key="index">
          <p class="normalP" @click="flag && checkAnswer()" :id="questions[Num].Items[index].ItemId">{{item.ItemDesc}}</p>

          <!--<div v-if="!hasAnswer">-->
            <!--<p class="normalP" @click="checkAnswer" :id="questions[Num].Items[index].ItemId">{{item.ItemDesc}}</p>-->

          <!--</div>-->
          <!--<div v-else>-->
            <!--<div v-if="isRight">-->
              <!--<p class="rightP" @click="checkAnswer" :id="questions[Num].Items[index].ItemId">{{item.ItemDesc}}</p>-->
            <!--</div>-->
            <!--<div v-else>-->
              <!--<p class="wrongP" @click="checkAnswer" :id="questions[Num].Items[index].ItemId">{{item.ItemDesc}}</p>-->
            <!--</div>-->

          <!--</div>-->
        </div>

      </div>

    </div>
    <!--<QItem></QItem>-->
  </div>

</template>

<script>
//  import QItem from './QItem.vue'

  export default {
//    props: {
//      questions: Array,
//
//    },
    data: function () {
      return {
        questions: [],
        target: {},
        isSlide: false,  // 动画开关
        Num: 0,  // 第几条问题
        flag: true  // 点击开关
//        hasAnswer: false,
//        isRight: false
      }
    },
    computed: {
      // 下一题的id
      _id: function () {
//      console.log(this.questions[this.Num].QuestionNo)
        let temp = this.questions[this.Num].QuestionNo;
        temp++;
        return temp
      }
    },

    mounted: function () {
      this.questions = this.$route.params.questions;
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
      nextQ: function () {
        //  切换去下一个问题,相同的路由, 只是id不同 显示不同的问题
//        console.log(this._id)
        this.$router.push({ name: 'question', params: {questions: this.questions, id: this._id}});
      },

      checkAnswer: function () {

        console.log('checkAnswer')
        this.flag = false;
        // `event` 是原生 DOM 事件
        this._event = event;
//        this.hasAnswer = true;

        //请求问题答案
        const url = 'api/exam/CheckQuestion';
        this.$http({
          url: url,//api 代理到json文件地址，后面的后缀是文件中的对象或者是数组
          method: 'post',//请求方式
//        data: {
//          QuestionNo: TODO
//          ItemId: TODO
//        }
          //这里可以添加axios文档中的各种配置
        }).then(res => {
          console.log(res.data.Data, '请求成功');
//        正确答案
          const rightAnswer = res.data.Data.Items[0].ItemId;
          if (event) {
            if(this._event.target.id === rightAnswer) {  // 回答正确
//              this.isRight = true;

//              this._event.target.style.background = 'url("/content/fanke/static/btnRight.png") 0% 0% / 100% 100% no-repeat';
              this._event.target.style.background = 'url("/static/btnRight.png") 0% 0% / 100% 100% no-repeat';

            } else {  // 错误

//              this._event.target.style.background = 'url("/content/fanke/static/btnWrong.png") 0% 0% / 100% 100% no-repeat';
              this._event.target.style.background = 'url("/static/btnWrong.png") 0% 0% / 100% 100% no-repeat';
              this._event.target.classList.add('shakeLR');

            }
            this.isSlide = true;
            if(this._id <= this.questions.length) {   // 题目还未答完
              console.log(1);
              setTimeout( ()=> {
                this.nextQ();
              },1400)

            } else {  // 题目答完 转去答题结果页
//              console.log('this._id:',this._id)
              console.log(2);
              setTimeout( ()=> {
                this.$router.push('/home/gamePage/gameResult')
              },1400)
//              this.$router.push({ name: 'question', params: {questions: this.questions, id: this._id}});
            }

          }

        }).catch(err => {
          console.log(err, '请求错误');
        });
      }


    },
    watch: {
      // 检测动态路由来回切换 并修改数据
      $route (to, from) {
        this.isSlide = false;
        this.flag = true;
        console.log('flag:', this.flag);

        this.Num++;
        this._event.target.style.background = '';
        this._event.target.classList.remove('shakeLR');

      }
    }
  }
</script>

<style>
  .QBox .animated {
    -webkit-animation-delay: 0.7s;
    animation-delay: 0.7s;
  }

  .QBox {

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
  .option .rightP, .option .wrongP, .option .normalP {
    font-size: 0.8rem;
    /*padding: .2rem 1rem;*/
    padding-left: 1rem;
    color: #ffffff;
    width: 9.75rem;
    height: 1.75rem;
    line-height: 1.70rem;
    display: inline-block;
    position: relative;
    left: 0;

  }
  .option .normalP {
    background: url("../assets/btnDefault.png") no-repeat;
    background-size: 100% 100%;


  }
  .option .rightP {
    background: url("../assets/btnRight.png") no-repeat;
    background-size: 100% 100%;


  }
  .option .wrongP {
    background: url("../assets/btnWrong.png") no-repeat;
    background-size: 100% 100%;


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

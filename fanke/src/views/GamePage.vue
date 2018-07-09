<template>
   <!--游戏过程页-->
   <div class="gamePart">
     <div class="bg2"></div>
     <UserImg></UserImg>
     <Music></Music>
     <!--<QList :questions="questions"></QList>-->
     <router-view></router-view>
   </div>
</template>

<script>
  import UserImg from '../components/UserImg.vue'
  import Music from '../components/Music.vue'
//  import QList from '../components/QList.vue'

export default {
  data: function () {
    return {
      questions: []
    }
  },
//
  components: {
    UserImg,
    Music
//    QList
  },
//
//  computed: {},
//
//  methods: {}
//
  mounted: function() {
    this.questions = this.$route.params.questions;
    const _id = this.questions[0].QuestionId;
//    console.log(this.questions)
    this.$router.push({ name: 'question', params: {questions: this.questions, id: _id}})
  },
//
//  beforeDestroy: function() {}
}
</script>

<style>
  .gamePart {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    /*display: none;*/
  }
  .bg2 {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -99;
    background: url('../assets/bg2.png') no-repeat;
    background-size: contain;
  }
</style>

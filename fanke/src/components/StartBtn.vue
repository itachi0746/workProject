<template>
  <div class="bottom">
    <router-link to="/gamePage">
      <img src="../assets/startBtn.png"/>
    </router-link>
    <p>
       已有{{joinNum}}人参加活动
     </p>
  </div>
</template>

<script>
  export default {
    props: {
      beforeStart: Boolean
    },
    data: function () {
      return {
        joinNum: null
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
//    mounted:function () {
//      console.log('btn',this.beforeStart)
//    },
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
   img {
    width: 10rem;
  }
  .bottom p {
    color: #fff;
    text-shadow: rgb(125, 73, 25) -1px -1px 0px, rgb(125, 73, 25) 0px -1px 0px, rgb(125, 73, 25) 1px -1px 0px, rgb(125, 73, 25) 1px 0px 0px, rgb(125, 73, 25) 1px 1px 0px, rgb(125, 73, 25) 0px 1px 0px, rgb(125, 73, 25) -1px 1px 0px, rgb(125, 73, 25) -1px 0px 0px;
  }
</style>

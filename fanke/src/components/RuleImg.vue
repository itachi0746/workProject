<template>
  <div class="rule">
    <router-link to="/home/actInfo">
      <img src="../assets/ruleImg.png" alt="ruleImg" class="animated pulse infinite">

    </router-link>
  </div>
</template>

<script>

  export default {
//    data () {
//      return {
//        imgUrl: '../assets/ruleImg.png'
//      }
//    },
//
//  components: {},
//
//  computed: {},
//
//  mounted: {},
//
//  methods: {}
  }

</script>


<style scoped>
  .rule .animated {
    animation-delay: 1.5s;
    -webkit-animation-delay: 1.5s;
  }
  .rule {
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    z-index: 10;

  }
  .rule img {
    width: 60px;
    height: 60px;
  }

</style>

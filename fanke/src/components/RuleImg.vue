<template>
  <div class="rule">
    <router-link to="/home/actInfo">
      <img src="../assets/ruleImg.png" alt="ruleImg">

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
  .rule {
    position: absolute;
    right: 0.5rem;
    top: 0;
    z-index: 10;

  }
  .rule img {
    width: 60px;
    height: 60px;
  }

</style>

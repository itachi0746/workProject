<!-- 背景图  -->
<template>
  <div :class="{bg1: isBg1, bg2: isBg2}"></div>
</template>

<script>
export default {
  data () {
    return {
      isBg1: true,
      isBg2: false
    }
  },
//
//  components: {},
//
//  computed: {},
//
//
//  methods: {}
}

</script>

<style>
  .bg1,.bg2 {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -99;
  }
  .bg1 {
    background: url('../assets/bg1.png') no-repeat;
    background-size: contain;
  }

  .bg2 {
    background: url('../assets/bg2.png') no-repeat;
    background-size: contain;
  }

</style>

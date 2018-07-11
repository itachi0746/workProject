<template>
 <div class="musicBox">
   <div v-if="music">
    <img @click="musicON" src="../assets/musicOn.png"/>
   </div>
   <div v-else>
     <img @click="musicON" src="../assets/musicOff.png"/>
   </div>
 </div>
</template>

<script>

export default {
  data: function () {
    return {
      music: true
    }
  },

//  components: {},

//  computed: {},

  methods: {
    musicON: function () {
      this.music = !this.music
    }
  }

//  mounted: function() {},

//  beforeDestroy: function() {}
}
</script>

<style>
  .musicBox {
    position: absolute;
    top: 1rem;
    right: 1rem;
    z-index: 5;
  }
  .musicBox img {
    width: 2rem;

  }
</style>

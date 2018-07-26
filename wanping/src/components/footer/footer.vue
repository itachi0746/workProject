<template>
  <div>
    <div class="foot-guide">
      <ul>
        <li class="foot-guide-li">
          <img src="../../assets/home2.png" alt="">
          <span class="chosen">主页</span>
        </li>
        <li class="foot-guide-li">
          <img src="../../assets/search.png" alt="">
          <span>搜索</span>
        </li>
        <li class="foot-guide-li">
          <img src="../../assets/ordered-list.png" alt="">
          <span>订单</span>
        </li>
        <li class="foot-guide-li">
          <img src="../../assets/user.png" alt="">
          <span>我的</span>
        </li>

      </ul>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
    }
  },

  components: {},

  computed: {},

  methods: {},

  mounted() {},

  beforeDestroy() {}
}
</script>

<style lang="scss" scoped>
  @import "src/style/mixin";

  .foot-guide ul {
    background-color: #fff;
    position: fixed;
    z-index: 100;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 2.3rem;
    @include fj;
    box-shadow: 0 -0.02667rem 0.05333rem rgba(0, 0, 0, 0.1);


  }

  .foot-guide-li {
    flex: 1;
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;

    img {
      width: 1.2rem;
      margin-top: .2rem;
    }
    span {
      @include sc(.6rem,#666);
    }
  }
  .chosen {
    color: #3190e8!important;
  }
</style>

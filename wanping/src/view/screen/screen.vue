<template>
  <div class="screen-detail">
    <div class="screen-data">
      <h5>屏幕名字</h5>
      <p class="screen-desc">屏幕描述</p>
    </div>
    <div class="calendar">
      <Calendar v-on:choseDay="clickDay"
                v-on:changeMonth="changeDate"></Calendar>
    </div>
  </div>
</template>

<script>
  import Calendar from 'vue-calendar-component';

  export default {
    data() {
      return {}
    },

    components: {
      Calendar
    },

    computed: {},

    methods: {
      clickDay(data) {
        console.log(data); //选中某天
      },
      changeDate(data) {
        console.log(data); //左右点击切换月份
      },
//      clickToday(data) {
//        console.log(data); //跳到了本月
//      }
    },

    mounted() {
    },

    beforeDestroy() {
    }
  }
</script>

<style lang='scss' scoped>
  @import "src/style/mixin";

  .screen-data {
    padding: .5rem;
    border-bottom: .5rem solid #7c7c7c;
  }

  .screen-desc {
    @include sc(.6rem, #666);
  }


</style>

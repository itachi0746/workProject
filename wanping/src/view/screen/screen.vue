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
    <div class="data-container">
      <div class="chosen-day-data">
        <p>
          <span>X月X日  剩余广告位: </span>
          <span class="AD-num">10</span> 个
        </p>


      </div>

      <div class="user-order-data">
        <p class="">
          <span>您已订购的广告位:</span>

        </p>
        <p>
          屏幕名字: 时段信息
        </p>
      </div>

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
  .data-container {
    margin-top: 1rem;
    padding: .5rem;

  }
  .chosen-day-data {
    padding-left: 1rem;
    font-size: .8rem;
  }
  .user-order-data {
    margin-top: .5rem;
    padding-left: 1rem;
    font-size: .8rem;

  }
  .AD-num {
    @include sc(1rem, $blue)
  }

</style>

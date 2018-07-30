<template>
  <div class="screen-detail">
    <div class="screen-data">
      <h5>屏幕名字</h5>
      <p class="screen-desc">屏幕描述</p>
    </div>
    <div class="calendar">
      <Calendar v-on:choseDay="clickDay"
                v-on:changeMonth="changeDate" :agoDayHide="timeStamp" :markDate="markDate"></Calendar>
    </div>
    <div class="data-container">
      <div class="data-box">
        <p>
          <i class="data-spot"></i>
          <span class="data-tag-font">X月 X日 :  </span>
        </p>
        <p>
          <span>剩余广告位: </span>
          <span class="AD-num">10</span> 个
        </p>


      </div>

      <div class="data-box">
        <p class="">
          <i class="data-spot"></i>
          <span class="data-tag-font">您已订购的广告位 :</span>

        </p>
        <p>
          屏幕名字: 时段信息
        </p>
      </div>

      <div class="data-box">
        <p>
          <i class="data-spot"></i>
          <span class="data-tag-font">选择想购买的广告位数量 :</span>
          <span class="number">

            <button class="decrease disabled">-</button>
            <input id="number" type="number" value="1">
            <button class="increase">+</button>
          </span>

        </p>


      </div>

      <ActionBar></ActionBar>
    </div>
  </div>
</template>

<script>
  import Calendar from 'vue-calendar-component';
  import ActionBar from '../../components/footer/actionBar.vue'

  export default {
    data() {
      return {
        markDate: ['2018/7/31', '2018/8/31'],
        timeStamp: 0 + '',
        oneDay: 86400000  // 一天的毫秒数
      }
    },

    components: {
      Calendar,
      ActionBar
    },

    computed: {},

    methods: {
      clickDay(data) {
        console.log(data); //选中某天
      },
      changeDate(data) {
        console.log(data); //左右点击切换月份
      },
      clickToday(data) {
        console.log(data); //跳到了本月
      },
      //从1970年开始的毫秒数,减去一天的毫秒数,然后截取10位变成
      timest() {
        let tmp = (Date.parse(new Date()) - this.oneDay).toString();
        console.log(tmp)
        tmp = tmp.substr(0, 10);
        return tmp;
      }
    },

    mounted() {
      const tmp = this.timest();
      console.log(tmp);
      this.timeStamp = tmp;

    },

    beforeDestroy() {
    }
  }
</script>

<style lang='scss' scoped>
  @import "src/style/mixin";

  .screen-data {
    padding: .5rem;
    /*border-bottom: .5rem solid #7c7c7c;*/
  }

  .screen-desc {
    @include sc(.6rem, #666);
  }

  .data-container {
    padding: .5rem;
    p {
      position: relative;
      height: 1.3rem;
    }
  }

  .data-box {
    padding-left: 1rem;
    font-size: .8rem;
    margin-top: .5rem;

  }

  .AD-num {
    @include sc(1rem, $blue)
  }

  .calendar {
    border-top: 1px solid $blue;
    border-bottom: 1px solid $blue;
  }

  .data-tag-font {
    @include sc(.7rem, #7c7c7c);
  }

  .data-spot {
    @include wh(.25rem, .25rem);
    background-color: $blue;
    position: absolute;
    left: -.75rem;
    top: .5rem;
  }
  .number {
    @include wh(5rem,100%);
    border-radius: 3px;
    float: right;

    input[type=number] {
      line-height: 24px;
      height: 24px;
      width: 2rem;
      text-align: center;
      font-size: .7rem;
      /*font-weight: 700;*/
      border: 1px solid #cfcfcf;
      background-color: #cfcfcf;
      -webkit-appearance: none;
      -moz-appearance: none;
      -o-appearance: none;
      appearance: none;
      margin: 0;
      float: left;
    }

    button {
      outline: 0;
      line-height: 24px;
      height: 24px;
      width: 1.5rem;
      font-size: .7rem;
      border: 1px solid #cfcfcf;
      background-color: #cfcfcf;
      float: left;

    }
    .decrease {
      border-right: 1px solid #fff;
    }
    .increase {
      border-left: 1px solid #fff;
    }

  }




</style>

<template>
  <div class="actInfoBody actRank">
    <div class="poupMainInfo">
      <div class="poupLine">
        <p>当前排名：(只显示前10名)</p>
        <div style="padding:0rem 0.5rem">
          <table class="rankTable" cellspacing="0" cellpadding="0">
            <thead>
            <tr style="line-height: 1rem;">
              <th>排行</th>
              <th>头像</th>
              <th>昵称</th>
              <th>成绩</th>
            </tr>
            </thead>
          </table>
        </div>
      </div>
      <div id="rankHeight">
        <table id="rankInfoBox" class="rankTable" cellspacing="0" cellpadding="0" style="margin-top: 0;">
          <tbody>
          <tr class="rankInfo">
            <td>No.1</td>
            <td>
              <div class="userImg manImg"></div>
            </td>
            <td class="userName">magazine</td>
            <td>999<span class="scoreUnit">分</span></td>
          </tr>
          </tbody>
        </table>
      </div>

    </div>

    <div class="poupSlideBar">
      <div class="slideBarTip"></div>
    </div>

  </div>

</template>

<script>

export default {
//  data: function () {
//    return {
//    }
//  },
//
//  components: {},
//
//  computed: {},
//
//  methods: {}
//
//  mounted: function() {},
//
//  beforeDestroy: function() {}
}
</script>

<style>


  .poupMainInfo {
    height: 24rem;
    overflow-y: auto;
  }

  /*排行榜*/
  .actInfoBody {
    color: #ffffff;
    font-size:0.7rem;
    padding: 0 1rem;
    position: relative;
  }
  .poupLine {
    /*font-size: .6rem;*/
    /*line-height: .9rem;*/
    padding: 2px 0;
    margin-top: .7rem;
    position: relative;
  }
  .rankTable {
    width: 100%;
    margin-top: .55rem;
    text-align: center;
    table-layout: fixed;
    font-size: .7rem;
    color: #FFF;
  }
  #rankHeight {
    overflow-y: hidden;
    padding: 0rem .5rem;
    -webkit-overflow-scrolling: touch;
  }
  .rankTable {
    width: 100%;
    margin-top: .55rem;
    text-align: center;
    table-layout: fixed;
    font-size: .7rem;
    color: #FFF;
  }
  .rankInfo {
    line-height: 2.75rem;
  }
  .rankTable .userImg {
    width: 2rem;
    height: 2rem;
    margin: 0 auto;
    border-radius: 999px;
  }
  .rankTable .userName {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }


  .actRank .poupSlideBar {
    left: 6rem;

  }
</style>

//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    tag: '高新技术企业/互联网公司',
    title: '接入信息',
    logoSrc: '/img/logo.png',
    photoSrc: '/img/logo.png',
    adr: '广东省广州市天河区科韵路',
    time: '09:00 - 18:00',
    tel: '123456789',
    photo: '公司照片',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  // 地图
  locate: function() {
    wx.navigateTo({
      url: '../map/map',
    })
  },
  // 打电话
  call: function() {
    wx.makePhoneCall({
      phoneNumber: '1234567890',
    })
  }
})

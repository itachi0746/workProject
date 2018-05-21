//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // tag: '高新技术企业/互联网公司',
    // title: '接入信息有限公司',
    // logoSrc: '/img/logo.png',
    // adr: '广东省广州市天河区科韵路',
    // time: '09:00 - 18:00',
    // tel: '1234567890',
    photo: '公司照片',
    userInfo: {},
    hasUserInfo: false,
    img1: '/img/1.png',
    img2: '/img/2.png',
    img3: '/img/3.png',
    img4: '/img/4.png',

    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },


  onLoad: function () {
    this.setData({
      Name: app.globalData.name,
      EntLabel: app.globalData.entLabel,
      Address: app.globalData.address,
      OnLineTime: app.globalData.onLineTime,
      Phone: app.globalData.phone,
      CompanyImages: app.globalData.companyImagesphone
    })


    // if (app.globalData.userInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true
    //   })
    // } else if (this.data.canIUse){
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
    //   }
    // } else {
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true
    //       })
    //     }
    //   })
    // }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  // 接入腾讯地图
  locate: function() {

    wx.getLocation({
      type: 'gcj02', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success: function (res) {
        debugger
        wx.openLocation({
          name: app.globalData.name,
          address: app.globalData.address,
          latitude: app.globalData.latitude, // 纬度，范围为-90~90，负数表示南纬
          longitude: app.globalData.longitude, // 经度，范围为-180~180，负数表示西经
          scale: 15, // 缩放比例
        })
      },
    })
  },
  // 打电话
  call: function() {
    wx.makePhoneCall({
      phoneNumber: '13928914698',
    })

  }
  

})

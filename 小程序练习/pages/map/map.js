// map.js
//获取应用实例
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 坐标
    lat: 23.1261700000,
    lng: 113.3728100000,
    // 位置标记
    marker: [{
      id: 1,
      latitude: 23.1261700000,
      longitude: 113.3728100000,
      width: 50,
      height: 50,
      iconPath: "/img/1.png",
      title: "哪里"
    }],
    // controls: [{
    //   id: 2,
    //   iconPath: '/img/1.png',
    //   position: {
    //     right: 0,
    //     top: 50,
    //     width: 50,
    //     height: 50
    //   },
    //   clickable: true
    // }]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this.data.lat)
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  }


})

// Page({
//   data: {
//     // fullscreen: true,
//     lng: 21,
//     lat: 100
//   }
  // regionchange(e) {
  //   console.log(e.type)
  // },
  // markertap(e) {
  //   console.log(e.markerId)
  // },
  // onLoad: function (options) {

  //   this.setData({
  //     lng: app.globalData.longitude, // 全局属性，用来取定位坐标
  //     lat: app.globalData.latitude,
      // markers: [{
      //   iconPath: "/img/1.png",
      //   id: 0,
      //   latitude: options.lat, // 页面初始化 options为页面跳转所带来的参数 
      //   longitude: options.lng,
      //   width: 20,
      //   height: 20
      // }],
      // polyline: [{
      //   points: [{
      //     longitude: app.globalData.longitude,
      //     latitude: app.globalData.latitude
      //   }, {
      //     longitude: options.lng,
      //     latitude: options.lat
      //   }],
      //   color: "#FF0000DD",
      //   width: 20,
      //   dottedLine: true
      // }]
    // })
  // }
// })
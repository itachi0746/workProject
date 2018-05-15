//app.js



App({
  onLaunch: function () {
    // 展示本地存储能力
    // var logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)

    // 请求api数据
    // wx.request({
      
    //   url: 'http://api2.jierutek.com/api/Ent/Info',
    //   method: "POST",
    //   data: {
    //     AppId: "wx30b4a19af8d1f8fd",
    //     EntId: "14",
    //     OrgId: "sample string 15"
    //   },
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success: function(res) {
    //     // debugger
    //     console.log(res.data)
    //   },
    //   fail: function(err) {
    //     console.log(err)
    //   }
    // })

    // 登录
    wx.login({
      success: function(res) {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        // debugger
        if(res.code) {
          // 向开发者服务端发送code,服务端使用该凭证向微信服务器换取该微信用户的唯一标识(openid)和会话密钥(session_key)
          console.log('获取用户登录凭证：' + res.code);
          wx.getSetting({
            success: function(res) {
              console.log(res)
            },
            fail: function(err) {
              console.log(err)
            }
          })
          
          // wx.getUserInfo({            
          //   success: function (res) {
          //     // debugger
          //     console(res.userInfo)},
          //     fail: function(err) {
          //       console.log(err)
          //     }
          //   })

          // wx.request({
          //   url: '',
          //   data: {
          //     code: res.code          
          //   }
          // })
        }
        else {
          console.log('获取用户登录态失败：' + res.errMsg)
        }
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        // debugger
        if (res.authSetting['scope.userInfo']) {
          console.log(res)
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    
    userInfo: null,
    name: null,
    address:  null,
    entLabel: null,
    onlineTime: null,
    phone: null,
    companyImages:[],
    latitude: null,
    longitude: null,
    LogoUrl:null,
    EntId: null,
    OrgId: null
  }
})
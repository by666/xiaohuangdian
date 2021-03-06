//app.js
App({
  onLaunch: function () {
    //获取手机信息
    var that = this;
    //  这里要非常注意，微信的scroll-view必须要设置高度才能监听滚动事件，所以，需要在页面的onLoad事件中给scroll-view的高度赋值
    wx.getSystemInfo({
      success: function (res) {
        //设置变量值
        that.globalData.sysInfo = res;
        that.globalData.windowW = res.windowWidth;
        that.globalData.windowH = res.windowHeight;
        console.log("width = " + res.windowWidth);
        console.log("window height = " + res.windowHeight);
        console.log("statubar height = " + res.statusBarHeight);
        console.log("screen height = " + res.screenHeight);
        console.log("pixradio = " + res.pixelRatio);

      }
    })
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        var requestUrl = 'https://api.weixin.qq.com/sns/jscode2session?appid=wxd6e4e5116073ea17&secret=68b78ed67446b39c50c468ba6d79d60b&js_code='+res.code+'&grant_type=authorization_code'

        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        wx.request({
          url: requestUrl, 
          header: {
            'content-type': 'application/json'
          },
          success(res) {
            console.log('session_key = '+res.data.session_key);
            console.log('openid = ' + res.data.openid);
          }
        })
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        console.log(res.authSetting);
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              console.log('userinfo' + res.userInfo)
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
    sysInfo: null,
    windowW: null,
    windowH: null,
  }
})
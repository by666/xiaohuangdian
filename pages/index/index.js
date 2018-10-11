//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    scanResultStr:"",
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    avatarUrlStr:"",
    nickNameStr:"",
  },
  onLoad: function () {
    var that = this;
    // 查看是否授权
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: function (res) {
              //用户已经授权过
              that.setData({
                avatarUrlStr: res.userInfo.avatarUrl,
                nickNameStr: res.userInfo.nickName
              })
            }
          })
        }
      }
    })
  },

  //授权登录
  bindGetUserInfo: function (e) {
    console.log(e.detail.userInfo)
    if (e.detail.userInfo) {
      //用户按了允许授权按钮
      console.log(e.detail.userInfo)
      var userinfo = e.detail.userInfo;
      this.setData({
        avatarUrlStr: userinfo.avatarUrl,
        nickNameStr: userinfo.nickName
      })
    } else {
      //用户按了拒绝按钮
    }
  },
  //获取手机号
  getPhoneNumber:function(e){
    console.log(e.detail.userInfo);
  },
  //扫码
  onScanTap:function(){
    wx.scanCode({
      success: (res) => {
        this.setData({
          scanResultStr: res.result,
        })
        console.log(res.result);
      }
    })
  },
  //跳转到订单列表
  onOrderListTap:function(){
    wx.navigateTo({
      url: '../mine/order/order',
    })
  }
})

// pages/main/main.js
var app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    scanResultStr: "",
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    avatarUrlStr: "",
    latitude:null,
    longitude:null,
    //地图上的点
    markers: [{
      iconPath: "/imgs/ic_position.png",
      id: 0,
      latitude: 22.53232,
      longitude: 113.93541,
      width: 20,
      height: 20
    }, {
        iconPath: "/imgs/ic_position.png",
        id: 1,
        latitude: 22.53132,
        longitude: 113.93241,
        width: 20,
        height: 20
      }],
    //定位按钮
    controls: [{
      id: 1,
      iconPath: '/imgs/ic_location.png',
      position: {
        left: app.globalData.windowW-80,
        top: app.globalData.windowH - 200,
        width: 50,
        height: 50
      },
      clickable: true
    }, {
        id: 2,
        iconPath: '/imgs/ic_qrcode.png',
        position: {
          left: app.globalData.windowW/2 - 40,
          top: app.globalData.windowH - 200,
          width: 80,
          height: 80
        },
        clickable: true
      }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
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
    }),
    wx.getLocation({
      type: 'gcj02', 
      success: function (res) {
        console.log(res.latitude)
        console.log(res.longitude)
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude
        })
      }
    })
  },

  controltap(e) {
    var cId = e.controlId;
    var that = this;
    if(cId == 1){
      wx.getLocation({
        success: function (res) {
          that.setData({
            latitude: res.latitude,
            longitude: res.longitude
          })
        },
      })
    }else if(cId == 2){
      wx.scanCode({
        success: (res) => {
          that.setData({
            
          })
          console.log(res.result);
        }
      })
    }
 
  },

  markertap(e){

  },

  regionchange(e){

  },

//点击跳转到地图选择
  onLocationTap:function(e){
    var that = this;
    wx.chooseLocation({
      success: function(res) {
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude
        })
      },
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
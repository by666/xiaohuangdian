// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    balanceStr:"",
    items: [
      { "imageSrc": "/imgs/ic_menu_order.png",
        "titleStr": "我的订单",
        "url":"../mine/order/order" 
      },
      { "imageSrc": "/imgs/ic_menu_help.png",
        "titleStr": "帮助中心", 
        "url": "../mine/help/help"  
      },
      { "imageSrc": "/imgs/ic_menu_join.png", 
        "titleStr": "我要加盟", 
        "url": null  
      },
      { "imageSrc": "/imgs/ic_menu_about.png", 
        "titleStr": "关于我们", 
        "url": "../mine/help/helpdetail/helpdetail?title=关于我们" 
      },
      { "imageSrc": "/imgs/ic_menu_contact.png", 
        "titleStr": "联系我们", 
        "url": "../mine/help/helpdetail/helpdetail?title=联系我们" 
      }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
     that.setData({
       balanceStr: "0.00"
     })
  },

  onItemTap:function(){
    wx.makePhoneCall({
      phoneNumber: '18680686420',
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
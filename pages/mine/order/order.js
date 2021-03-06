// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    contentHeight:0,
    currentTab: 0,
    alreadyDatas:[
      { date: "2018/10/14 14:58:05", statu: "待支付", order: "L0000001", name: "悦豪水疗会所", chargetime: "1小时0分钟", deposit:"5",chargepay:"1",totalpay:"6"},
      { date: "2018/10/14 14:58:05", statu: "待支付", order: "L0000001", name: "悦豪水疗会所", chargetime: "2小时0分钟", deposit: "5", chargepay: "2", totalpay: "7" },
      { date: "2018/10/14 14:58:05", statu: "待支付", order: "L0000001", name: "悦豪水疗会所", chargetime: "5小时0分钟", deposit: "5", chargepay: "3", totalpay: "8" },
      ],
    useDatas: [
      { date: "2018/10/14 14:58:05", statu: "充电中", order: "L0000001", name: "悦豪水疗会所", chargetime: "1小时0分钟", deposit: "5", chargepay: "1", totalpay: "6" },
      { date: "2018/10/14 14:58:05", statu: "充电中", order: "L0000001", name: "悦豪水疗会所", chargetime: "2小时0分钟", deposit: "5", chargepay: "2", totalpay: "7" },
      { date: "2018/10/14 14:58:05", statu: "充电中", order: "L0000001", name: "悦豪水疗会所", chargetime: "5小时0分钟", deposit: "5", chargepay: "3", totalpay: "8" },
    ],
    compeleteDatas: [
      { date: "2018/10/14 14:58:05", statu: "充电完成", order: "L0000001", name: "悦豪水疗会所", chargetime: "1小时0分钟", deposit: "5", chargepay: "1", totalpay: "6" },
      { date: "2018/10/14 14:58:05", statu: "充电完成", order: "L0000001", name: "悦豪水疗会所", chargetime: "2小时0分钟", deposit: "5", chargepay: "2", totalpay: "7" },
      { date: "2018/10/14 14:58:05", statu: "充电完成", order: "L0000001", name: "悦豪水疗会所", chargetime: "5小时0分钟", deposit: "5", chargepay: "3", totalpay: "8" },
    ],
    cancelDatas: [
      { date: "2018/10/14 14:58:05", statu: "已取消", order: "L0000001", name: "悦豪水疗会所", chargetime: "1小时0分钟", deposit: "5", chargepay: "1", totalpay: "6" },
      { date: "2018/10/14 14:58:05", statu: "已取消", order: "L0000001", name: "悦豪水疗会所", chargetime: "2小时0分钟", deposit: "5", chargepay: "2", totalpay: "7" },
      { date: "2018/10/14 14:58:05", statu: "已取消", order: "L0000001", name: "悦豪水疗会所", chargetime: "5小时0分钟", deposit: "5", chargepay: "3", totalpay: "8" },
    ],


  },

  onLoad: function (options) {
    var app = getApp();
    this.setData({
      contentHeight: app.globalData.windowH -88 *app.globalData.windowW /750
    })

  },//滑动切换
  swiperTab: function (e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },
  //点击切换
  clickTab: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },

  //点击待支付item
  onAlreadyItemClick:function(e){
    var index =parseInt(e.currentTarget.dataset.index);
    var selectData = this.data.alreadyDatas[index];
     wx.navigateTo({
       url: '../orderdetail/orderdetail?data=' + JSON.stringify(selectData),
     })
  },
  //点击充电中item
  onUseItemClick:function(e){
    var index = parseInt(e.currentTarget.dataset.index);
    var selectData = this.data.useDatas[index];
    wx.navigateTo({
      url: '../orderdetail/orderdetail?data=' + JSON.stringify(selectData),
    })
  },
  //点击已完成item
  onCompeleteItemClick:function(e){
    var index = parseInt(e.currentTarget.dataset.index);
    var selectData = this.data.compeleteDatas[index];
    wx.navigateTo({
      url: '../orderdetail/orderdetail?data=' + JSON.stringify(selectData),
    })
  },
  //点击已取消item
  onCancelItemClick:function(e){
    var index = parseInt(e.currentTarget.dataset.index);
    var selectData = this.data.cancelDatas[index];
    wx.navigateTo({
      url: '../orderdetail/orderdetail?data=' + JSON.stringify(selectData),
    })
  }

})
// pages/charge/chargecode/chargecode.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    timer: 'chargeTimer',//定时器名字
    items:[
      { psw: 1 },
      { psw: 1 },
      { psw: 2 },
      { psw: 3 }
    ],
    timeStr:"",
    hour:0 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("选择的时间->" + options.time);
    this.setData({
       hour : options.time
    })
    this.countDown();
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

  },

  countDown: function () {
     if(this.data.hour == 0) return;
     var that = this;
     var countDownNum = this.data.hour * 60 * 60; 
     that.setData({
       timer: setInterval(function () {
         countDownNum--;
         var h = parseInt(countDownNum /3600);
         var m = parseInt((countDownNum - h * 3600) / 60);
         var s =  countDownNum - h * 3600 - m * 60;
         that.setData({
           timeStr: h + "小时" + m + "分" + s +"秒"
         })
         //在倒计时还未到0时，这中间可以做其他的事情，按项目需求来
         if (countDownNum == 0) {
           //这里特别要注意，计时器是始终一直在走的，如果你的时间为0，那么就要关掉定时器！不然相当耗性能
           //因为timer是存在data里面的，所以在关掉时，也要在data里取出后再关闭
           clearInterval(that.data.timer);
           //关闭定时器之后，可作其他处理codes go here
         }
       }, 1000)
     })
  }
})



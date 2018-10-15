// pages/charge/charge.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     selecttime:0,
     items: [
       {  id:0 , value: '1元1小时', time:1,checked: 'true'},
       { id: 1, value: '3元4小时',time:4 },
       { id: 2, value: '6元12小时',time:12 }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    for (var index in this.data.items) {
      if (this.data.items[index].checked){
         this.setData({
            selecttime: this.data.items[index].time
         })
      }
    }

     
  },

  onHelpTap:function(){
    wx.navigateTo({
      url: '../mine/help/help',
    })
  },

  onItemTap:function(e){
    var id = e.currentTarget.dataset.name;
    for(var index in this.data.items){
      this.data.items[index].checked = false;
    }
    this.data.items[id].checked = true;

    this.setData({
      items: this.data.items,
      selecttime: this.data.items[id].time
    });

  },

  onChargeTap:function(){
    //处理支付
    wx.navigateTo({
      url: '../charge/chargecode/chargecode?time='+this.data.selecttime,
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
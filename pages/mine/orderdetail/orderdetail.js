// pages/mine/orderdetail/orderdetail.js
Page({


  data: {
     item:{},
    confirmStr:""
  },

 
  onLoad: function (options) {
    var that = this;
    var jsonStr = options.data;
    var itemObj = JSON.parse(jsonStr);
    var confirm = "";
    if(itemObj.statu == "待支付"){
      confirm = "继续支付";
    }else if(itemObj.statu == "充电中"){
      confirm = "退押金";
    }
    that.setData({
      item: itemObj,
      confirmStr: confirm
    })
  },

  //点击继续支付或者退押金
  onConfirmTap:function(){

  },

  //点击取消
  onCancelTap:function(){

  }


 
})
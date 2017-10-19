// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
        search:''
  },
  top:function(){

    console.log(111);
      wx.navigateTo({
      url: '../logs/logs?id=top250'
    })
   

  },

doing:function(){
    console.log(222);

    wx.navigateTo({
      url: '../logs/logs?id=in_theaters'
    })

  },
coming:function(){
    console.log(333);

wx.navigateTo({
      url: '../logs/logs?id=coming_soon'
    })

  },
 arm:function(){

    console.log(444);

wx.navigateTo({
      url: '../logs/logs?id=us_box'
    })
  } 

})
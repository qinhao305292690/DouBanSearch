//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    show: [],
  },
    onLoad: function (e) {
      wx.request({
        url: 'https://api.douban.com/v2/movie/subject/'+e.id, //仅为示例，并非真实的接口地址
        header: {
          // 'content-type': 'application/json' // 默认值
          // 微信小程序请求使用下面请求头
          'content-type': 'json' // 默认值
        },
        success: (res)=>{
          console.log(res);
        this.setData({
            show:res.data
          })
           wx.hideLoading();
        }
     })
    wx.showLoading({
      title: '加载中',
    })
  }
})

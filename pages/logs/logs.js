//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    index_list:[]
  },
  idsend(e){
    // console.log(e);
    wx.navigateTo({
      url: '../show/show?id='+e.target.dataset.id
    })
  },
  onLoad: function (e) {
    console.log(e.id);
      wx.request({
        url: 'https://api.douban.com/v2/movie/'+`${(e.id==undefined)?'top250':e.id}`, //仅为示例，并非真实的接口地址
        header: {

          // 'content-type': 'application/json' // 默认值
          // 微信小程序请求使用下面请求头
          'content-type': 'json' // 默认值
        },
        success: (res)=>{
          // console.log(res.data.subjects)
          this.setData({
            index_list:res.data.subjects
          })
          // console.log(this.data.index_list[0].casts[0].avatars.large);
           wx.hideLoading();
        }
     })
    wx.showLoading({
      title: '加载中',
    })
  }
 


    
})

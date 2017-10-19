Page({
    data: {
        inputShowed: false,
        inputVal: "",
        words:""
    },




 idsend(e){
    console.log(e);
    wx.navigateTo({
      url: '../show/show?id='+e.target.dataset.id
    })
  },











    showInput: function () {
        this.setData({
            inputShowed: true
        });
    },
    hideInput: function () {
        this.setData({
            inputVal: "",
            inputShowed: false
        });
    },
    clearInput: function () {
        this.setData({
            inputVal: ""
        });
    },

    inputTyping: function (e) {
       

         wx.request({
        url: 'https://api.douban.com/v2/movie/search?q='+e.detail.value,//仅为示例，并非真实的接口地址
        header: {

          // 'content-type': 'application/json' // 默认值
          // 微信小程序请求使用下面请求头
          'content-type': 'json' // 默认值
        },
        success: (res)=>{
          console.log(res.data.subjects)
          this.setData({
            inputVal:res.data.subjects,
            words:e.detail.value
          })
          // console.log(this.data.index_list[0].casts[0].avatars.large);
           wx.hideLoading();
        }
     })
    wx.showLoading({
      title: '加载中',
    })



        // console.log(e.detail.value)
    }
});
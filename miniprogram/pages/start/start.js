// miniprogram/pages/start/start.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
position:"你好像还没停车呢"
  },
 
send: function () {
    wx.navigateTo({
      url: '../map/map',
    })
  },
  onLoad: function () {

}
})
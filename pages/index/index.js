
var WxEmoji = require('../../WxEmoji/WxEmoji.js');
//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    WxEmoji.init(["ts":"00.gif"]);
  }
})

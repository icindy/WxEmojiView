
var WxEmoji = require('../../WxEmojiView/WxEmojiView.js');
//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    WxEmojiData: "hello world! :00: :01: :02: _03_ /04 ",
    WxEmojiArray: []
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    
    var that = this
    var tempWxEmojiArray = WxEmoji.transEmojiStr(that.data.WxEmojiData);
    that.setData({
      WxEmojiArray: tempWxEmojiArray
    });
  },
  bindTextAreaBlur: function(e) {
    console.log(e.detail.value)
  },
  WxEmojiTextareaFocus:function(e) {
    console.log(e.detail.value)
  },
  WxEmojiTextareaBlur:function(){
    cosole.log(e.detail.value);
  }
})

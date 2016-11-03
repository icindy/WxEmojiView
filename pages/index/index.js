
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
    WxEmoji.init(":_/",{
      "00":"00.gif",
      "01":"01.gif",
      "02":"02.gif",
      "03":"03.gif",
      "04":"04.gif",
      "05":"05.gif",
      "06":"06.gif",
      "07":"07.gif",
      "08":"08.gif",
      "09":"09.gif"

    });
    var that = this
    var tempWxEmojiArray = WxEmoji.transEmojiStr(that.data.WxEmojiData);
    that.setData({
      WxEmojiArray: tempWxEmojiArray
    });
  }
})

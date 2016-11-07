
var __this;
let __emojis = {};//保存定义了的小表情
var __reg;//正则表达式配置

var ___text;//用于存储textarea值，上传保存需要用这个
var ___temTextArea;//用于纪录聚焦的textareare

function init(reg,emojis){
    __reg = reg;
    __emojis = emojis;
}
function bindThis(e){
  __this = e;
  __this.setData({
    showWxEmojiChooseView: 1
  });
}

function buildObjs(){

}

function transEmojiStr(e,str){
  __this = e;
  var eReg = new RegExp("["+__reg+' '+"]");
  var array = str.split(eReg);
  var emojiObjs = [];
  for(var i = 0; i < array.length; i++){
    var ele = array[i];
    var emojiObj = {};
    if(__emojis[ele]){
      emojiObj.node = "element";
      emojiObj.tag = "emoji";
      emojiObj.text = __emojis[ele];
    }else{
      emojiObj.node = "text";
      emojiObj.text = ele;
    }
    emojiObjs.push(emojiObj);
  }
  var temObjs = {};
  temObjs.WxEmojiTextArray = emojiObjs;

  __this.setData({
    WxEmojiObjs:temObjs
  });
  // return emojiObjs;
}

function WxEmojiTextareaBlur(target,e){
    __this = target;
    console.log(e.detail.value);
    WxEmoji.transEmojiStr(__this,e.detail.value);
}



module.exports = {
  init:init,
  bindThis: bindThis,
  text:___text,
  transEmojiStr: transEmojiStr,
  WxEmojiTextareaBlur: WxEmojiTextareaBlur
}
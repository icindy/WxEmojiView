
let __emojis = {};
var __reg;
function init(reg,emojis){
    __reg = reg;
    __emojis = emojis;
}

function transEmojiStr(str){
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

  return emojiObjs;
}

module.exports = {
  init:init,
  transEmojiStr: transEmojiStr
}
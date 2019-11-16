/** 
* 用于把用utf16编码的字符转换成实体字符，以供后台存储
* @param  {string} str 将要转换的字符串，其中含有utf16字符将被自动检出
* @return {string}     转换后的字符串，utf16字符将被转换成&#xxxx;形式的实体字符
*/
export function utf16toEntities(str) {
  var patt = /[\ud800-\udbff][\udc00-\udfff]/g; // 检测utf16字符正则  
  str = str.replace(patt, function(char) {
      var H, L, code;
      if (char.length === 2) {
          H = char.charCodeAt(0); // 取出高位  
          L = char.charCodeAt(1); // 取出低位  
          code = (H - 0xD800) * 0x400 + 0x10000 + L - 0xDC00; // 转换算法  
          return "&#" + code + ";";
      } else {
          return char;
      }
  });
  return str;
}

function emojiToUnicode(emoji) {
    var backStr = '';
    if (emoji && emoji.length > 0) {
        for (var char of emoji) {
            var index = char.codePointAt(0);
            if (index > 65535) {
                var h =
                    '\\u' +
                    (Math.floor((index - 0x10000) / 0x400) + 0xd800).toString(
                        16
                    );
                var c =
                    '\\u' + ((index - 0x10000) % 0x400 + 0xdc00).toString(16);
                backStr = backStr + h + c;
            } else {
                backStr = backStr + char;
            }
        }
        console.log(backStr);
    }
    return backStr;
}

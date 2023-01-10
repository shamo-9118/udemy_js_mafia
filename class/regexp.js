const p = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/i;
let str = "サポートサイトはhttp://wwwgoqsystem.com/";
str += "それとhttps://goq.co.jp/";
const result = str.match(p);
console.log(result);
for (var i = 0, len = result.length; i < len; i++) {}

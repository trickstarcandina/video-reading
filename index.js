const axios = require('axios');
const fs = require('fs');


const url1 = 'https://translate.googleapis.com/translate_tts?client=gtx&ie=UTF-8&tl=vi&q=';

const url2 = 'https://translate.google.com/translate_tts?tl=vi&client=tw-ob&q='

const content = 'Văn vô đệ nhất võ vô đệ nhị Đừng nói thiên hạ đệ nhất liền chỉ cần Nhạc Quốc đệ nhất cao thủ là ai Đều không có người có thể cho ra đáp án Bởi vì cao thủ hàng đầu thông thường đều không được tùy tiện ';

console.log(content.length)

axios({
    method: 'get',
    url: url1 + content,
    responseType: 'stream'
  })
    .then(function (response) {
      response.data.pipe(fs.createWriteStream('readstory.mp3'))
    });
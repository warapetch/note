// อ้างถึง คลิป 
// https://www.youtube.com/watch?v=k1I1XbxjDcA

// ประกาศตัวแปร Global
let botToken = "YOUR_TOKEN"; 

// Chat ID เป็น Array เพื่อส่ง ไปได้หลายปลายทาง (หากต้องการ)
// หากต้องการ Chat ID 1 เดียว ก็สามารถแก้ไขได้
let botChatID = ["YOUR_CHAT_ID"]


// ทดสอบ / ตัวอย่างการเรียกใช้งาน
// ----------------------------------------------------
function testSendMessageText() {

  sendMessageText(botChatID[0],'สวัสดีจาก GoogleSheet');
}


// ส่งข้อความ ไป Telegram Bot
// ----------------------------------------------------
function sendMessageText(chat_id, text) {
  
  let payload = {
          method: "sendMessage",
          chat_id: String(chat_id),
          text: text,
          parse_mode: "HTML"
        }

  let options = {
        method: "post",
        payload: payload
  };

  UrlFetchApp.fetch('https://api.telegram.org/bot' + botToken + '/', options);

}


// ส่งรูปภาพและข้อความ ไป Telegram Bot
// ----------------------------------------------------
function sendMessagePhoto(chat_id,photoCaption, photoUrl) {
  
  let payload = {
          method: "sendPhoto",
          chat_id: String(chat_id),
          photo: photoUrl,
          caption: photoCaption,
          parse_mode: "HTML"
        }

  let options = {
        method: "post",
        payload: payload
  };

  UrlFetchApp.fetch('https://api.telegram.org/bot' + botToken + '/', options);

}



// ทดสอบ / ตัวอย่างการเรียกใช้งาน
function testSendMessageText() {

  sendMessageText(botChatID[0],'สวัสดีจาก GoogleSheet');

}

// ส่งข้อความ ไป Telegram Bot
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

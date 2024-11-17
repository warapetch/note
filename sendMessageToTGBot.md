let botToken = "YOUR_TOKEN";
let botChatID = ["YOUR_CHAT_ID"]

// ตัวอย่าง ฟังก์ชั่น ในการส่งข้อความ ไป เทเลแกรม บอท
function testSendMessageText() {

  sendMessageText(botChatID[0],'สวัสดีจาก GoogleSheet');

}


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

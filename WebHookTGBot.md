let botToken = "YOUR_TOKEN";
let botChatID = [CHAT_ID];
let workSheetID = "YOUR_SHEET_ID";
let workSheetName = "YOUR_SHEET_NAME";
let webHookUrl = "YOUR_WEB_HOOK_URL";




function setWebhook() {
  
  // Endpoint >> https://api.telegram.org/bot<Token>/setWebhook?url=<webHookUrl>

  let response = UrlFetchApp.fetch("https://api.telegram.org/bot" + botToken + "/setWebhook?url=" + webHookUrl);
  console.log(response.getContentText());

}

function deleteWebhook() {
  
  // Endpoint >> https://api.telegram.org/bot<Token>/deleteWebhook

  let response = UrlFetchApp.fetch("https://api.telegram.org/bot" + botToken + "/deleteWebhook");
  console.log(response.getContentText());
}

function getWebhookInfo() {
  
  // Endpoint >> https://api.telegram.org/bot<Token>/getWebhookInfo

  let response = UrlFetchApp.fetch("https://api.telegram.org/bot" + botToken + "/getWebhookInfo");
  console.log(response.getContentText());
}

function doGet(e){
  // e : eventObject
  Logger.log(e);

  return HtmlService.createHtmlOutput("WebHook Online...");
}

function doPost(e) {
  // e : eventObject
  Logger.log(e);

  // get Body data (contents)
  var fullResponseJson = JSON.parse(e.postData.contents);

  // get Chat Text
  var chattext = fullResponseJson.message.text;
  
  // get Chat_ID
  var chatid   = fullResponseJson.message.chat.id;
  
  // Connect / Open Sheet
  var ss = SpreadsheetApp.openById(workSheetID);

  // สั่งทำงานกับ Sheet อะไร
  var sheet = ss.getSheetByName(workSheetName);

  // รับค่าวันเวลา ปัจจุบัน
  let newDate = new Date();

  // เขียนคำสั่ง ให้เพิ่ม บรรทัดใหม่
  // โดย ใส่วันเวลา , แชทไอดี , ข้อความ (ถ้ามี) , Json แบบเต็มๆ
  sheet.appendRow([newDate,chatid,chattext , fullResponseJson]);

}










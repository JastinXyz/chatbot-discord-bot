module.exports = {
  
  name: "talk",
  code: `$jsonRequest[https://api.jastinch.xyz/translate?key=<your api key>&to=$getServerVar[lang]&text=$jsonRequest[https://api.jastinch.xyz/chatbot?key=<your api key>&message=$message;response;];res;]`
}

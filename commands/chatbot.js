module.exports = {
  
  name: "talk",
  code: `$jsonRequest[https://api.jastinch.xyz/translate?to=$getServerVar[lang]?text=$jsonRequest[https://api.jastinch.xyz/chatbot?key=yourapikey&message=$message;response;];res;]`
}

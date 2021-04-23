module.exports = {
  
  name: "talk",
  code: `$jsonRequest[https://api.jastinch.xyz/translate?to=$getServerVar[lang]?text=$jsonRequest[https://api.jastinch.xyz/chatbot?message=$message;response;];res;]`
}

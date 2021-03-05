module.exports = {
  
  name: "talk",
  code: `$jsonRequest[https://jastinch-api.ml/translate?to=$getServerVar[lang]?text=$jsonRequest[https://jastinch-api.ml/chatbot?message=$message;response;];res;]`
}

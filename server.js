const dbd = require("dbd.js")
const fs = require('fs')

const bot = new dbd.Bot({
token: "TOKEN", // your bot token
prefix: "$getServerVar[prefix]" 
})

bot.onMessage()

var reader = fs.readdirSync("./commands/").filter (file => file.endsWith(".js"))
for(const file of reader) {
  const command = require(`./commands/${file}`)
  bot.command({
name: command.name, 
aliases: command.aliases,
code: command.code
  })
}

bot.variables({
  lang: "en",
  prefix: "PREFIX" // change your prefix
})

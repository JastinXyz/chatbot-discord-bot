module.exports = {
  
  name: "help",
  code: `$title[$userTag[$clientID] Help Menu]
  $description[**• My Prefix in this server is \`$getServervar[prefix]\`**
  **• Use \`$getServervar[prefix]<commandName>\` To execute the command!**
  
  **$getServerVar[prefix]help** - This.
  **$getServerVar[prefix]setlang <LangID>** - Set language of chat bot.
  **$getServerVar[prefix]talk <message>** - Chat With Me?]
  $addTimestamp
  $footer[Req By $userTag[$authorID];$userAvatar[$authorID]]
  $color[RANDOM]`
}

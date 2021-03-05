module.exports = {
  
  name: "setlang",
  code: `$description[Done set language to \`$message\`]
  $addTimestamp
  $footer[Req By $userTag[$authorID];$userAvatar[$authorID]]
  $color[RANDOM]
  $setServerVar[lang;$message]
  $onlyIf[$charCount[$message]<=2;Language ID must 2 char. e.g \`en for english, id for indonesian, etc\`]
  $argsCheck[>1;{title: Opss!} {description: Use: \`$getServerVar[prefix]setlang <LanguageID>\`
  
  e.g \`en for english, id for indonesian, etc\`
  
  Now Lang: $getServerVar[lang]} {color:RED}]
  $onlyPerms[managemessages;:x: **You need Manage Messages Perms!**]`
}

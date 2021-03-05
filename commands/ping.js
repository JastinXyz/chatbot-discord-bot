module.exports = {
  
  name: "ping",
  code: `$description[**$ping ms**]
  $addTimestamp
  $footer[Req By $userTag[$authorID];$userAvatar[$authorID]]
  $color[RANDOM]`
}

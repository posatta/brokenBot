module.exports = function(msg, args){
    msg.channel.send(`
    \`\`\`
ping: make the bot reply with pong
epic_phrase: make the bot reply with an epic phrase
say: make the bot say something. if you provide LUA as first argument, xapacni will delete your message and only the bot's message will be visible.
help: it's this noob
get_tl: get TL of a user
get_user: view some spicy info of a user
8ball: bot will respond with random funny
kick: kick a user. don't try this if u dont have perms u noob
    \`\`\``);
  }
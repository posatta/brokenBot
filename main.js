const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = "&"

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


let commands = {
  ping: function(msg, args){
    msg.reply('Pong!');
  },
  epic_phrase: function(msg, args){
    msg.reply('member "ned" diskushen x D')
  },
  say: function(msg, args){
    msg.reply(args.join(" "))
  }

}

client.on('message', msg => {
  const message = msg.content
  let args = message.slice(prefix.length).trim().split(' ');

  if(message.charAt(0) != prefix){
    console.log('This message doesnt begin with the prefix.')
    return
  }

  console.log(args[0])
  let cmd = commands[args[0]]
  if (cmd) {
    args.shift()
    cmd(msg, args)
  }
});

client.login('NzQ5NjMwNTE1NDQyNzQ1MzQ1.X0ux0g.jrb97SjpO49Y1SWyvqQNzawAjkw');
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
    msg.channel.send(args.join(" "))
  },
  canned: function(msg, args){
    if(args[0] == 1){
      msg.channel.send("Thanks for letting us know. We're looking into it.")
    }
    else if(args[0] == 2){
      msg.channel.send("Thanks for letting us know. We agree there is an issue and we're looking into it.")
    }
    else if(args[0] == 3){
      msg.channel.send("Thanks for letting us know. We agree there is an issue and we've removed the post.")
    }
    else{
      msg.channel.send("That canned response isn't in my database, try a number between 1 and 3.")
    }
  },
  help: function(msg, args){
    msg.channel.send(`
    \`\`\`
ping: make the bot reply with pong
epic_phrase: make the bot reply with an epic phrase
say: make the bot say something. if you provide LUA as first argument, xapacni will delete your message and only the bot's message will be visible.
help: it's this noob
    \`\`\``)
  }
}

client.on('message', msg => {
  const message = msg.content
  let args = message.slice(prefix.length).trim().split(' ');

  if(message.charAt(0) != prefix){
    //console.log('This message doesnt begin with the prefix.')
    return
  }

  console.log(args[0])
  let cmd = commands[args[0]]
  if (cmd) {
    args.shift()

    if(args[0] == "LUA"){
      args.shift()
    }
    cmd(msg, args)
  }
});

client.login('NzQ5NjMwNTE1NDQyNzQ1MzQ1.X0ux0g.jrb97SjpO49Y1SWyvqQNzawAjkw');
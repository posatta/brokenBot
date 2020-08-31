const Discord = require('discord.js');
const fetch = require("node-fetch");
const client = new Discord.Client();

const prefix = "-"

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


const cannedResponses = [
  "Thanks for letting us know. We're looking into it.",
  "Thanks for letting us know. We agree there is an issue and we're looking into it.",
  "Thanks for letting us know. We agree there is an issue and we've removed the post."
]

const jokeTLs = {
  jrelvas: "1.5",
  coefficients : "69"
}
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
    msg.channel.send(cannedResponses[args[0] - 1] || "That index isn't in my database, try something between 1 and 3.")
  },
  get_tl: function(msg, args){
      fetch(`https://devforum.roblox.com/u/${args[0]}.json`)
    .then(
      function(response) {
        if (response.status !== 200) {
          msg.channel.send('Looks like there was a problem. Status Code: ' + response.status);
          return;
        }

        // Examine the text in the response
        response.json().then(function(data) {
          msg.channel.send(`${args[0]}'s trust level is ${jokeTLs[args[0].toLowerCase()] || data.user.trust_level}`);
        });
      }
    )
    .catch(function(err) {
      msg.channel.send('Fetch Error :-S', err);
    });
  },
  help: function(msg, args){
    msg.channel.send(`
    \`\`\`
ping: make the bot reply with pong
epic_phrase: make the bot reply with an epic phrase
say: make the bot say something. if you provide LUA as first argument, xapacni will delete your message and only the bot's message will be visible.
help: it's this noob
get_tl: get TL of a user
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

  console.log(args[0].toLowerCase())
  let cmd = commands[args[0].toLowerCase()]
  if (cmd) {
    args.shift()

    if(args[0] == "LUA"){
      args.shift()
    }
    cmd(msg, args)
  }
});

client.login(process.env.token);
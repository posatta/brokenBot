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
  get_user: function(msg, args){

    let userData = {}
    fetch(`https://devforum.roblox.com/u/${args[0]}.json`)
    .then(
      function(response) {
        if (response.status !== 200) {
          msg.channel.send('Looks like there was a problem. Status Code: ' + response.status);
          return;
        }

        // Examine the text in the response
        response.json().then(function(data) {
          console.log(data.user.bio_excerpt)
         userData = data;
        });
      }
    )
    .catch(function(err) {
      msg.channel.send('Fetch Error :-S', err);
      return;
    });


    let url = `https://devforum.roblox.com/u/${args[0]}/summary`
    let profilePicture = `https://doy2mn9upadnk.cloudfront.net/user_avatar/devforum.roblox.com/${args[0]}/120/1144704_2.png`
    const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle(args[0])
      .setURL(url)
      .setAuthor(args[0], profilePicture, url)
      .setDescription(userData.user.bio_excerpt)
      .setThumbnail(profilePicture)
      .addFields(
        { name: 'Regular field title', value: 'Some value here' },
        { name: '\u200B', value: '\u200B' },
        { name: 'Inline field title', value: 'Some value here', inline: true },
        { name: 'Inline field title', value: 'Some value here', inline: true },
      )
      .addField('Inline field title', 'Some value here', true)
      .setImage(profilePicture)
      .setTimestamp()
      .setFooter('Some footer text here', profilePicture);

    msg.channel.send(exampleEmbed);
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
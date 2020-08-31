const fetch = require("node-fetch");

const jokeTLs = {
  jrelvas: "1.5",
  coefficients : "69"
}

module.exports = function(msg, args, Discord){
  let url = `https://devforum.roblox.com/u/${args[0]}/summary`
  let profilePicture = `https://doy2mn9upadnk.cloudfront.net/user_avatar/devforum.roblox.com/${args[0]}/120/1144704_2.png`

  const exampleEmbed = new Discord.MessageEmbed()
  .setColor('#0099ff')
  .setTitle(args[0])
  .setURL(url)
  .setAuthor(args[0], profilePicture, url)
  .setThumbnail(profilePicture)
  .setImage(profilePicture)

  
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
          exampleEmbed
          .setDescription(data.user.bio_excerpt)
          .addFields(
            { name: 'Trust Level', value: jokeTLs[args[0]] || data.user.trust_level },
            
          )
          msg.channel.send(exampleEmbed);
        });
      }
    )
    .catch(function(err) {
      msg.channel.send('Fetch Error :-S', err);
      return;
    });


    
    
      
      
      /*
      .addFields(
        { name: 'Regular field title', value: 'Some value here' },
        { name: '\u200B', value: '\u200B' },
        { name: 'Inline field title', value: 'Some value here', inline: true },
        { name: 'Inline field title', value: 'Some value here', inline: true },
      )
      */
      
      

    
  }
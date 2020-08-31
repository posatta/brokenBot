const fetch = require("node-fetch");

module.exports = function(msg, args, Discord){

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
      .setDescription("bio could not be loaded")
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
  }
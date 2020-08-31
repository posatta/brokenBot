const fetch = require("node-fetch");

const jokeTLs = {
    jrelvas: "1.5",
    coefficients : "69"
  }
  
module.exports = function(msg, args){
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
}
function getMemberFromMention(mention, msg) {
	if (!mention) return;

	if (mention.startsWith('<@') && mention.endsWith('>')) {
		mention = mention.slice(2, -1);

		if (mention.startsWith('!')) {
			mention = mention.slice(1);
		}

		return msg.guild.member(msg.guild.members.cache.get(mention));
	}
}

module.exports = function(msg, args, disc, client){
    if(msg.member.hasPermission('KICK_MEMBERS')){
        let victim = getMemberFromMention(args[0], msg);

        if(!victim){
            return;
        }
        args.shift();

        let reason = args.join(" ");

        victim.kick(reason).then(() => {
            // Successmessage
            msg.channel.send(":wave: " + victim.displayName + " has been successfully kicked! :partying_face:");
        }).catch((err) => {
             // Failmessage
             msg.channel.send(`An error occured: ${err}`);
        });
    }
    
}
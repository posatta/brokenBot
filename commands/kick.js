function getUserFromMention(mention, msg) {
	if (!mention) return;

	if (mention.startsWith('<@') && mention.endsWith('>')) {
		mention = mention.slice(2, -1);

		if (mention.startsWith('!')) {
			mention = mention.slice(1);
		}

		return msg.guild.members.cache.get()(mention);
	}
}

module.exports = function(msg, args, disc, client){
    if(msg.member.hasPermission('KICK_MEMBERS')){
        let victim = getUserFromMention(args[0], msg);

        args.shift();

        let reason = args.join(" ");
        victim.kick(reason);
    }
    
}
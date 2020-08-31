module.exports = function(msg, args){
    msg.channel.send(args.join(" "))
}
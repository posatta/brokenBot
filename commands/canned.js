const cannedResponses = [
    "Thanks for letting us know. We're looking into it.",
    "Thanks for letting us know. We agree there is an issue and we're looking into it.",
    "Thanks for letting us know. We agree there is an issue and we've removed the post."
]

module.exports = function(msg, args){
    msg.channel.send(cannedResponses[args[0] - 1] || "That index isn't in my database, try something between 1 and 3.");
}
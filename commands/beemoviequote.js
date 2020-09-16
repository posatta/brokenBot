const quotes = [
    [
        {"name": "Adam Flayman:", "value": " Wow! She looked hot."},
        {"name": "Barry B. Benson:", "value": "She's my cousin."},
        {"name": "Adam Flayman:", "value": "She is?"},
        {"name": "Barry B. Benson:", "value": "Yes, we're all cousins."}
    ],
    [
        {"name": "Barry B. Benson:", "value": "Ya like jazz?"}
    ],
    [
        {"name": "Adam Flayman:", "value": "Did you hear about Frankie?"},
        {"name": "Barry B. Benson:", "value": "Yeah."},
        {"name": "Adam Flayman:", "value": "Are you going to his funeral?"},
        {"name": "Barry B. Benson:", "value": "No, I'm not going to his funeral. Everyone knows you sting someone, you die. You don't waste it on a squirrel. He was such a hothead."},
        {"name": "Adam Flayman:", "value": "I guess he could have just gotten out of the way."}
    ],
    [
        {"name": "Vanessa:", "value": "Why don't you just fly everywhere? Isn't it faster?"},
        {"name": "Barry B. Benson:", "value": "Flying is exhausting. Why don't you humans just run everywhere, isn't that faster?"},
        {"name": "Vanessa:", "value": "I see your point."}
    ],
    [
        {"name": "Barry B. Benson:", "value": "We demand an end to the glorification of the bear as nothing more than a vicious, smelly, ill-tempered, big-headed stink machine. I believe we all know what they do in the woods."}
    ],
    [
        {"name": "Barry B. Benson:", "value": "I don't remember the sun having a big 75 on it."}
    ],
    [
        {"name": "Vanessa:", "value": "It turns out I cannot fly a plane."}
    ],
    [
        {"name": "Barry B. Benson:", "value": "Sorry I'm late, where should I sit?"},
        {"name": "Rose Parade Princess:", "value": "Who are you?"},
        {"name": "Barry B. Benson:", "value": "I believe I'm the pea."},
        {"name": "Rose Parade Princess:", "value": "The pea is supposed to be under the mattresses."},
        {"name": "Barry B. Benson:", "value": "Not in this fairy tale sweetheart."}
    ],
    [
        {"name": "Vanessa:", "value": "What happened here?"},
        {"name": "Barry B. Benson:", "value": "I tried talking to these guys, and then there was a dustbuster, a toupee and a liferaft exploded... now one's bald, one's in a boat, and they're both unconscious."},
        {"name": "Vanessa:", "value": "Is that another bee joke?"}
    ],
    [
        {"name": "Barry B. Benson:", "value": "What is that?"},
        {"name": "Ken:", "value": "Italian Vogue."},
        {"name": "Barry B. Benson:", "value": "Mamma mia! That's a lot of pages."},
        {"name": "Ken:", "value": "It's a lot of ads."}
    ],
    [
        {"name": "Title Narrator:", "value": "According to all known laws of aviation, there is no way a bee should be able to fly. It's wings are too small to get its fat little body off the ground. The bee, of course, flies anyway, because bees don't care what humans think is impossible."}
    ],
    [
        {"name": "Barry B. Benson:", "value": "This is your queen? That's a guy in women's clothes! That's a drag queen."}
    ],
    [       
        {"name": "Barry B. Benson:", "value": "This sweater is Ralph Lauren, and I have no pants."}
    ],
    [
        {"name": "Barry B. Benson:", "value": "Larry, bees have never afraid to change the world. I mean, what about Bee Columbus, Bee Ghandi, Bee-Jesus?"}
    ],
    [
        {"name": "Barry B. Benson:", "value": "Three days of grade school, three days of high school."},
        {"name": "Adam Flayman:", "value": "Those were tough days."},
        {"name": "Barry B. Benson:", "value": "...three days of college, I'm glad I took a day off in the middle to hitchhike around the hive."},
        {"name": "Adam Flayman:", "value": "You did come back different."}
    ],
    [
        {"name": "Barry B. Benson:", "value": "How about a suicide pact?"},
        {"name": "Vanessa:", "value": "How do we do it?"},
        {"name": "Barry B. Benson:", "value": "I'll sting you, you step on me."},
        {"name": "Vanessa:", "value": "That just kills you twice."}
    ],
    [
        {"name": "Vanessa:", "value": "My only interest is flowers."},
        {"name": "Barry B.", "value": "Benson: You know, our last queen was elected with that very slogan."}
    ],
    [
        {"name": "Layton T. Montgomery:", "value": "Will some angel of mercy come crawl to suck the poison from my heaving buttocks?"}
    ],
    [
        {"name": "Adam Flayman:", "value": "What do you thing the humans will do to us if we lose?"},
        {"name": "Barry B. Benson:", "value": "I don't know, Adam."},
        {"name": "Adam Flayman:", "value": "I hear they put roaches in motels."},
        {"name": "Barry B. Benson:", "value": "Adam, they check in, but they never check out."}
    ],
    [
        {"name": "Layton T. Montgomery:", "value": "Mr. Benson Bee, I'm going to ask what I think the entire court here would like to know... what exactly is your relationship to that woman?"},
        {"name": "Barry B. Benson:", "value": "We're friends."},
        {"name": "Layton T. Montgomery:", "value": "Good friends?"},
        {"name": "Barry B. Benson:", "value": "Yes."},
        {"name": "Layton T. Montgomery:", "value": "How good?"},
        {"name": "Barry B. Benson:", "value": "Now, hang on."},
        {"name": "Layton T. Montgomery:", "value": "Do you live together?"},
        {"name": "Barry B. Benson:", "value": "Wait, that's not."},
        {"name": "Layton T. Montgomery:", "value": "Are you her little... bedbug?"}
    ]
];

module.exports = function(message){
    const quoteIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[quoteIndex];
    const quoteEmbed = {
        color: "#ffff33",
        title: "Bee Movie Quote",
        fields: quote,
        footer: {text: `Quote #${quoteIndex+1} from ${quotes.length} quotes.`}
    };
    message.channel.send("haha funny quote machine goes brrr", {embed:quoteEmbed});
};

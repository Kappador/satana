/**
 * @author conner
 * @since 02-06-2020
 */

const request = require("request-promise");

module.exports = {
    "info": {
        "permission": 1,
        "name": "fact",
        "description": "Gets you random facts",
        "aliases": ["facts", "fax"],
        "syntax": "fact [cat / dog / random]"
    },
    run: (bot, msg, args) => {
        msg.delete().catch(() => {});

        if(args.length >= 1) {
            let type = args[0];

            switch(type) {
                case "cat":
                    request({
                        uri: "https://catfact.ninja/fact",
                        json: true
                    }).then(data => {
                        msg.channel.send(`\`\`\`asciidoc\nSUCCESS\n=====\n= Cat Fact =\nFact :: ${data.fact}\n\`\`\``);
                    });

                    break;
                case "dog":
                    request({
                        uri: "http://dog-api.kinduff.com/api/facts",
                        json: true
                    }).then(data => {
                        msg.channel.send(`\`\`\`asciidoc\nSUCCESS\n=====\n= Dog Fact =\nFact :: ${data.facts[0]}\n\`\`\``);
                    });    

                    break;
                case "random":
                    request({
                        uri: "https://uselessfacts.jsph.pl/random.json?language=en",
                        json: true
                    }).then(data => {
                        msg.channel.send(`\`\`\`asciidoc\nSUCCESS\n=====\n= Random Fact =\nFact :: ${data.text}\n\`\`\``);
                    });

                    break;
                default: 
                    msg.channel.send(`\`\`\`asciidoc\nERROR!\n=====\nError :: Invalid type\n\`\`\``);

                    break;
            }
        } else {
            return msg.channel.send(`\`\`\`asciidoc\nERROR!\n=====\nError :: Invalid syntax\n\`\`\``);
        }
    }
}
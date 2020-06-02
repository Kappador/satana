/**
 * @author Kappador
 * @since 02-06-2020
 */

const request = require("request-promise");

module.exports = {
    "info": {
        "permission": 1,
        "name": "dogfact",
        "description": "Gives you a random dog fact",
        "aliases": ["dfact"],
        "syntax": "dogfact"
    },
    run: (bot, msg, args) => {
        msg.delete().catch(() => {});

        request({
            uri: "http://dog-api.kinduff.com/api/facts",
            json: true
        }).then(data => {
            msg.channel.send(`\`\`\`asciidoc\nSUCCESS\n=====\n= Dog Fact =\nFact :: ${data.facts[0]}\n\`\`\``);
        });
    }
}
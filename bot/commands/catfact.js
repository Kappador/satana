/**
 * @author Kappador
 * @since 02-06-2020
 */

const request = require("request-promise");

module.exports = {
    "info": {
        "permission": 1,
        "name": "catfact",
        "description": "Gives you a random cat fact",
        "aliases": ["cfact"],
        "syntax": "catfact"
    },
    run: (bot, msg, args) => {
        msg.delete().catch(() => {});

        request({
            uri: "https://catfact.ninja/fact",
            json: true
        }).then(data => {
            msg.channel.send(`\`\`\`asciidoc\nSUCCESS\n=====\n= Cat Fact =\nFact :: ${data.fact}\n\`\`\``);
        });
    }
}
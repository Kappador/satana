/**
 * @author Kappador
 * @since 02-06-2020
 */

const request = require("request-promise");

module.exports = {
    "info": {
        "permission": 1,
        "name": "randomfact",
        "description": "Gives you a random fact",
        "aliases": ["rfact"],
        "syntax": "randomfact"
    },
    run: (bot, msg, args) => {
        msg.delete().catch(() => {});

        request({
            uri: "https://uselessfacts.jsph.pl/random.json?language=en",
            json: true
        }).then(data => {
            msg.channel.send(`\`\`\`asciidoc\nSUCCESS\n=====\n= Random Fact =\nFact :: ${data.text}\n\`\`\``);
        });
    }
}
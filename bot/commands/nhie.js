/**
 * @author Kappador
 * @since 02-06-2020
 */

const request = require("request-promise");

module.exports = {
    "info": {
        "permission": 0,
        "name": "neverhaveiever",
        "description": "Gives you a never have i ever question",
        "aliases": ["nhie", "never"],
        "syntax": "neverhaveiever"
    },
    run: (bot, msg, args) => {
        msg.delete().catch(() => {});

        request({
            uri: "https://api.nhie.io/v1/statements/random?category[]=harmless",
            json: true
        }).then(data => {
            msg.channel.send(`\`\`\`asciidoc\nSUCCESS\n=====\nStatement :: ${data.statement}\nCategory :: ${data.category}\n\`\`\``)
            .then((message) => {
                message.react('✅').then(() => {message.react('❌')});
            });
        });
    }
}
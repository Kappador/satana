/**
 * @author Kappador
 * @since 02-06-2020
 */

const request = require("request-promise");

module.exports = {
    "info": {
        "permission": 1,
        "name": "advice",
        "description": "Gives you an advice",
        "aliases": [],
        "syntax": "advice"
    },
    run: (bot, msg, args) => {
        msg.delete().catch(() => {});

        request({
            uri: "https://api.adviceslip.com/advice",
            json: true
        }).then(data => {
            msg.channel.send(`\`\`\`asciidoc\nSUCCESS!\n=====\nYour advice :: ${data.slip.advice}\n\`\`\``);
        });
    }
}
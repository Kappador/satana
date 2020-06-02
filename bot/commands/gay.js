/**
 * @author conner
 * @since 02-06-2020
 */

const request = require("request-promise");

module.exports = {
    "info": {
        "permission": 1,
        "name": "gay",
        "description": "Shows how gay you are",
        "aliases": ["queer", "gay", "g"],
        "syntax": "gay"
    },
    run: (bot, msg, args) => {
        msg.delete().catch(() => {});

        if(msg.mentions.users.first() == "568256682921164812") return msg.channel.send(`\`\`\`asciidoc\nSUCCESS!\n=====\nGayness of Kappador :: 0%\n\`\`\``);

        msg.channel.send(`\`\`\`asciidoc\nSUCCESS!\n=====\nGayness of ${msg.mentions.users.first().username} :: ${Math.floor(Math.random() * 100) + 1}%\n\`\`\``);
    }
}
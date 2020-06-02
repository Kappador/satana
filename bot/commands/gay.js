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

        if(msg.author.id == "188128887383785472") return msg.channel.send(`\`\`\`asciidoc\nSUCCESS!\n=====\nGayness :: 0%\n\`\`\``);

        msg.channel.send(`\`\`\`asciidoc\nSUCCESS!\n=====\nGayness :: ${Math.floor(Math.random() * 100) + 1}%\n\`\`\``);
    }
}
/**
 * @author conner
 * @since 02-06-2020
 */

const request = require("request-promise");

module.exports = {
    "info": {
        "permission": 1,
        "name": "penis",
        "description": "Shows you how big your cock is",
        "aliases": ["pp", "dick", "size"],
        "syntax": "penis"
    },
    run: (bot, msg, args) => {
        msg.delete().catch(() => {});

        if(msg.author.id == "188128887383785472") return msg.channel.send(`\`\`\`asciidoc\nSUCCESS!\n=====\nPenis :: 8=================================================================D\n\`\`\``);

        let penis = "8";
        for(let i = 0; i < Math.floor(Math.random() * 59); i++) penis += "=";

        msg.channel.send(`\`\`\`asciidoc\nSUCCESS!\n=====\nPenis :: ${penis}D\n\`\`\``);
    }
}
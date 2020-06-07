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
        
        if(args.length >= 1) {
            let id = (msg.mentions.users.first() ? msg.mentions.users.first().id : args[0]);
            
            bot.fetchUser(id).then(user => {
                msg.channel.send(`\`\`\`asciidoc\nSUCCESS!\n=====\nGayness of ${user.username} :: ${Math.floor(Math.random() * 100) + 1}%\n\`\`\``);
            }).catch(() => {
                msg.channel.send(`\`\`\`asciidoc\nERROR!\n=====\nError :: Invalid user provided.\n\`\`\``);
            });
        } else {

            msg.channel.send(`\`\`\`asciidoc\nSUCCESS!\n=====\nGayness :: ${Math.floor(Math.random() * 100) + 1}%\n\`\`\``);
        }
    }
}
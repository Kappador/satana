/**
 * @author conner
 * @since 02-06-2020
 */

module.exports = {
    "info": {
        "permission": 1,
        "name": "penis",
        "description": "Shows you how big your cock is",
        "aliases": ["pp", "dick", "size"],
        "syntax": "penis [@user / id]"
    },
    run: (bot, msg, args) => {
        msg.delete().catch(() => {});
        let penis = "8";

        if(args.length >= 1) {
            let id = (msg.mentions.users.first() ? msg.mentions.users.first().id : args[0]);
            
            bot.fetchUser(id).then(user => {
                for(let i = 0; i < Math.floor(Math.random() * 59); i++) penis += "=";

                msg.channel.send(`\`\`\`asciidoc\nSUCCESS!\n=====\nPenis for ${user.username} :: ${penis}D\n\`\`\``);
            }).catch(() => {
                msg.channel.send(`\`\`\`asciidoc\nERROR!\n=====\nError :: Invalid user provided.\n\`\`\``);
            });
        } else {
            for(let i = 0; i < Math.floor(Math.random() * 59); i++) penis += "=";

            msg.channel.send(`\`\`\`asciidoc\nSUCCESS!\n=====\nPenis :: ${penis}D\n\`\`\``);
        }
    }
}
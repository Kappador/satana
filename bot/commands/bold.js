/**
 * @author conner
 * @since 01-06-2020
 */

module.exports = {
    "info": {
        "permission": 1,
        "name": "bold",
        "description": "Makes ur message bold",
        "aliases": [],
        "syntax": "bold [message]"
    },
    run: (bot, msg, args) => {
        msg.delete().catch(() => {});

        let message = args.join(" ");
        
        if(message) {
            return msg.channel.send(`**${message}**`);
        } else {
            return msg.channel.send(`\`\`\`asciidoc\nERROR!\n=====\nError :: Invalid syntax\n\`\`\``);
        }
    }
}
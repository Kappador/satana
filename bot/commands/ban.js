/**
 * @author Kappador
 * @since 02-06-2020
 */

const {ban_message} = require('../../data/cfg.json');

module.exports = {
    "info": {
        "permission": 1,
        "name": "ban",
        "description": "Bans a mentioned user, requires 'BAN_MEMBERS'",
        "aliases": [],
        "syntax": "ban [mention user]"
    },
    run: (bot, msg, args) => {
        msg.delete().catch(() => {});
        
        if (msg.mentions.users.size == 0) return msg.channel.send(`\`\`\`asciidoc\nERROR!\n=====\nError :: Mention someone?\n\`\`\``);

        msg.mentions.members.forEach(member => {
            member.ban({reason: ban_message})
                .then(() => { return msg.channel.send(`\`\`\`asciidoc\nSUCCESS!\n=====\nSuccess :: Banned ${member.user.username}\n\`\`\``); })
                .catch(() => { return msg.channel.send(`\`\`\`asciidoc\nERROR!\n=====\nError :: Couldn't ban him\n\`\`\``); });
        });
        
    }
}
/**
 * @author Kappador
 * @since 30-06-2020
 */

const request = require("request-promise");

module.exports = {
    "info": {
        "permission": 1,
        "name": "trigger",
        "description": "Triggers a user, requires MOVE permissions",
        "aliases": [],
        "syntax": "trigger [interval(ms)] [amount] [user mention]"
    },
    run: (bot, msg, args) => {
        msg.delete().catch(() => {});

        if(args.length >= 3) {
            let interval = parseInt(args[0]);
            let amount = parseInt(args[1]);

            if (msg.mentions.users.size == 0) return msg.channel.send(`\`\`\`asciidoc\nERROR!\n=====\nError :: Mention someone?\n\`\`\``);
            let target = msg.mentions.members.first();
            if (target.voiceChannel == "null") return msg.channel.send(`\`\`\`asciidoc\nERROR!\n=====\nError :: Not connected\n\`\`\``);

            const channels = msg.guild.channels.filter(c => c.type === 'voice');
            console.log(channels.id);

            let triggerInterval = setInterval(() => {
                msg.channel.guild.member(member).setVoiceChannel(Rats);
                amount--;
                
                if(amount == 0) clearInterval(triggerInterval);
            }, interval);

        } else {
            return msg.channel.send(`\`\`\`asciidoc\nERROR!\n=====\nError :: Invalid syntax\n\`\`\``);
        }
    }
}
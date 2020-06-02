/**
 * @author Kappador
 * @since 02-06-2020
 */

const request = require("request-promise");

module.exports = {
    "info": {
        "permission": 1,
        "name": "nuke",
        "description": "Nukes a channel, requires 'MANAGE_CHANNELS'",
        "aliases": [],
        "syntax": "nuke"
    },
    run: (bot, msg, args) => {
        msg.delete().catch(() => {});

        if (!msg.channel.guild) return msg.channel.send(`\`\`\`asciidoc\nERROR!\n=====\nError :: Comand must be executed in an guild\n\`\`\``);

        if (!msg.member.hasPermission("MANAGE_CHANNELS")) return msg.channel.send(`\`\`\`asciidoc\nERROR!\n=====\nError :: Insufficient Permissions\n\`\`\``); 

        let channelinfo = {
            "name" : msg.channel.name,
            "position" : msg.channel.position,
            "parent" : msg.channel.parent,
            "nsfw" : msg.channel.nsfw,
            "cooldown" : msg.channel.cooldown,
            "description" : msg.channel.description
        }
        msg.channel.clone().then(cloned_channel => {
            cloned_channel.edit({
                name : channelinfo.name,
                position: channelinfo.position,
                parent : channelinfo.parent,
                nsfw : channelinfo.nsfw,
                cooldown : channelinfo.cooldown,
                description : channelinfo.description
            });

            msg.channel.delete();

            return cloned_channel.send(`\`\`\`asciidoc\nSUCCESS!\n=====\nSuccess :: Nuked channel ${channelinfo.name}\n\`\`\``);
        });
    }
}
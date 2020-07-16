/**
 * @author Kappador
 * @since 29-06-2020
 */

module.exports = {
    "info": {
        "permission": 1,
        "name": "israel",
        "description": "Sends israel",
        "aliases": [],
        "syntax": "israel"
    },
    run: (bot, msg, args) => {
        msg.delete().catch(() => {});

        msg.channel.send("fuck israel", {files: [{"attachment": "https://media.discordapp.net/attachments/704317556588150855/704318006150561822/image0-5.gif", "name": `fuck_israel.gif`}]}).then(message => {
            message.react("🇫");
            message.react("🇺");
            message.react("🇨");
            message.react("🇰");
            message.react("🇮🇱");
        });
    }
}
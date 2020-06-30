/**
 * @author Kappador
 * @since 29-06-2020
 */

module.exports = {
    "info": {
        "permission": 0,
        "name": "github",
        "description": "Send the repository link ^^",
        "aliases": [],
        "syntax": "github"
    },
    run: (bot, msg, args) => {
        msg.delete().catch(() => {});

        msg.channel.send("https://github.com/Kappador/satana");
    }
}
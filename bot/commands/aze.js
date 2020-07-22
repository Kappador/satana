/**
 * @author Kappador
 * @since 29-06-2020
 */

module.exports = {
    "info": {
        "permission": 0,
        "name": "aze",
        "description": "Sends aze",
        "aliases": [],
        "syntax": "aze"
    },
    run: (bot, msg, args) => {
        msg.delete().catch(() => {});

        msg.channel.send("gold by aze $$$", {file: "./content/gold.png", name: "gold_by_aze_$$$.png"}).then(message => {
            message.react("💰");
            message.react("💲");
        });
    }
}
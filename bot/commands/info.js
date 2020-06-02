/**
 * @author conner
 * @since 02-06-2020
 */

const fs = require("fs");

module.exports = {
    "info": {
        "permission": 1,
        "name": "info",
        "description": "Shows some information on the bot",
        "aliases": ["i"],
        "syntax": "info"
    },
    run: (bot, msg, args) => {
        msg.delete().catch(() => {});

        return msg.channel.send(`\`\`\`asciidoc\nSUCCESS!\n=====\nName :: Satana\nDevelopers :: Conner, Kappador\nVersion :: ${fs.readFileSync("./version.txt", "UTF-8")}\nCommands :: ${fs.readdirSync("./bot/commands").length}\n\`\`\``);
    }
}
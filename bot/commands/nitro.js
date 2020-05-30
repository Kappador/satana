/**
 * @author conner
 * @since 27-05-2020
 */

const cUtil = require("../../utils/command");
const {prefix} = require("../../data/cfg.json");

module.exports = {
    "info": {
        "permission": 0,
        "name": "nitro",
        "description": "Generates a random discord.gift link",
        "aliases": ["n", "gift"]
    },
    run: (bot, msg, args) => {
        try {
            msg.delete();
        } catch(e) {}

        if(args[1] && args[1].toLowerCase() == "info") {
            let info = cUtil.getCommand(args[0].replace(prefix, ""));

            return msg.channel.send(`\`\`\`asciidoc\nShowing information for: ${info.name}\n=====\nCommand :: ${info.name}\nDescription :: ${info.description}\nAliases :: ${info.aliases.toString().replace(/\,/g, ", ")}\nPermission :: ${info.permission}\`\`\``);
        }

        let charset = "ABCDEFGHIKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz1234567890";
        let code = "";

        for(let i = 0; i < 16; i++) code += charset[Math.floor(Math.random() * charset.length)];

        msg.channel.send(`https://discord.gift/${code}`);
    }
}
/**
 * @author Kappador
 * @since 29-05-2020
 */

const cUtil = require("../../utils/command");
const {prefix} = require("../../data/cfg.json");

module.exports = {
    "info" : {
        "permission": 1,
        "name": "hex",
        "description": "Converts provided hex color to decimal for use in embeds",
        "aliases": ["hex"]
    },
    run : (bot, msg, args) => {
        msg.delete().catch(() => {});

        if(args[1] && args[1].toLowerCase() == "info") {
            let info = cUtil.getCommand(args[0].replace(prefix, ""));

            return msg.channel.send(`\`\`\`asciidoc\nShowing information for: ${args[0].replace(prefix, "")}\n=====\nCommand :: ${info.name}\nDescription :: ${info.description}\nAliases :: ${info.aliases.toString().replace(/\,/g, ", ")}\nPermission :: ${info.permission}\`\`\``);
        }

        if (args[1].startsWith("#"))
            args[1] = args[1].replace("#", "0x");

        msg.channel.send(`\`\`\`asciidoc\nSUCCESS!\n=====\nHex :: ${args[1]}\n\nDecimal :: ${parseInt(args[1])}\n\`\`\``);
    }
}
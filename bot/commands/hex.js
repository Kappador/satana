/**
 * @author Kappador
 * @since 29-05-2020
 */

const cUtil = require("../../utils/command");
const {prefix} = require("../../data/cfg.json");

module.exports = {
    "info" : {
        "permission": 0,
        "name": "hex",
        "description": "Converts provided hex color to decimal for use in embeds",
        "aliases": ["hex"]
    },
    run : (bot, msg, args) => {
        try {
            msg.delete();
        } catch(e) {}

        if(args[1] && args[1].toLowerCase() == "info") {
            let info = cUtil.getCommand(args[0].replace(prefix, ""));

            return msg.channel.send(`\`\`\`asciidoc\nShowing information for: ${args[0].replace(prefix, "")}\n=====\nCommand :: ${info.name}\nDescription :: ${info.description}\nAliases :: ${info.aliases.toString().replace(/\,/g, ", ")}\nPermission :: ${info.permission}\`\`\``);
        }

        if (args[1].startsWith("#"))
            args[1] = args[1].replace("#", "0x");

        msg.channel.send({ embed: {
            "title": "Converted Color",
            "color": args[1],
            "footer": {
              "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png",
              "text": "Satana go brrr"
            },
            "fields": [
                {
                    "name" : "Hex",
                    "value" : args[1],
                    "inline" : true
                },
                {
                    "name" : "Decimal",
                    "value" : parseInt(args[1]),
                    "inline" : true
                }
            ]
        }});
    }
}
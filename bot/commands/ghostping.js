/**
 * @author Kappador
 * @since 28-05-2020
 */

const cUtil = require("../../utils/command");
const {prefix} = require("../../data/cfg.json");

module.exports = {
    "info": {
        "permission": 0,
        "name": "ghostping",
        "description": "Ghostpings the mentioned users",
        "aliases": ["gp", "ghost"]
    },
    run: (bot, msg, args) => {
        if(args[1] && args[1].toLowerCase() == "info") {
            let info = cUtil.getCommand(args[0].replace(prefix, ""));

            return msg.channel.send(`\`\`\`asciidoc\nShowing information for: ${args[0].replace(prefix, "")}\n=====\nCommand :: ${info.name}\nDescription :: ${info.description}\nAliases :: ${info.aliases.toString().replace(/\,/g, ", ")}\nPermission :: ${info.permission}\`\`\``);
        }

        setTimeout(() => {msg.delete()}, 2000);
    }
}
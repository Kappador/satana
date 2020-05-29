/**
 * @author conner
 * @since 27-05-2020
 */

const cUtil = require("../../utils/command");
const {prefix} = require("../../cfg.json");

module.exports = {
    "info": {
        "permission": 0,
        "name": "help",
        "description": "Provides a useful help embed",
        "aliases": ["h", "?"]
    },
    run: (bot, msg, args) => {
        msg.delete();

        if(args[1] && args[1].toLowerCase() == "info") {
            let info = cUtil.getCommand(args[0].replace(prefix, ""));

            return msg.channel.send(`\`\`\`asciidoc\nShowing information for: ${info.name}\n=====\nCommand :: ${info.name}\nDescription :: ${info.description}\nAliases :: ${info.aliases.toString().replace(/\,/g, ", ")}\nPermission :: ${info.permission}\`\`\``);
        }

        // haha im funny lololol
        msg.channel.send("//TODO: Help Command");
    }
}
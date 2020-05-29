/**
 * @author conner
 * @since 29-05-2020
 */

const cUtil = require("../../utils/command");
const {prefix} = require("../../cfg.json");

const request = require("request-promise");

module.exports = {
    "info": {
        "permission": 0,
        "name": "checkhost",
        "description": "Checks if a website is up",
        "aliases": ["online", "isup", "check", "up"]
    },
    run: (bot, msg, args) => {
        msg.delete();
        
        if(args[1] && args[1].toLowerCase() == "info") {
            let info = cUtil.getCommand(args[0].replace(prefix, ""));

            return msg.channel.send(`\`\`\`asciidoc\nShowing information for: ${args[0].replace(prefix, "")}\n=====\nCommand :: ${info.name}\nDescription :: ${info.description}\nAliases :: ${info.aliases.toString().replace(/\,/g, ", ")}\nPermission :: ${info.permission}\`\`\``);
        }
    }
}
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

        let message = `\`\`\`asciidoc\nShowing information for: ALL\n=====\n`;

        cUtil.getCommands("commands").then(cmds => {
            let keys = Object.keys(cmds);

            for(let i = 0; i < keys.length; i++) {
                let cmd = cmds[keys[i]];
                message += `${cmd.name} :: ${cmd.description} - type: ${prefix}${cmd.name} info\n`;

                if(i == keys.length - 1) {
                    message += `\`\`\``;
                    msg.channel.send(message);
                }
            }

        });
    }
}
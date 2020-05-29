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

        let page = 1;

        if(args[1] && args[1].toLowerCase() == "info") {
            let info = cUtil.getCommand(args[0].replace(prefix, ""));

            return msg.channel.send(`\`\`\`asciidoc\nShowing information for: ${info.name}\n=====\nCommand :: ${info.name}\nDescription :: ${info.description}\nAliases :: ${info.aliases.toString().replace(/\,/g, ", ")}\nPermission :: ${info.permission}\`\`\``);
        } else if(args[1] && !isNaN(parseInt(args[1]))) page = parseInt(args[1]);

        cUtil.getCommands("commands").then(cmds => {
            let keys = Object.keys(cmds);
        
            let pageArr = keys.slice((page - 1) * 10, page * 10);
            let message = `\`\`\`asciidoc\nShowing information for: ALL (Page: ${page})\n=====\n`;
        
            for(let i = 0; i < pageArr.length; i++) {
                let cmd = cmds[pageArr[i]];
                message += `${cmd.name} :: ${cmd.description} - type: ${"."}${cmd.name} info\n`;
        
                if(i == pageArr.length - 1) {
                    message += `\`\`\``;
                    msg.channel.send(message);
                }
            }
        })
    }
}
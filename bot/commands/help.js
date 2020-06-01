/**
 * @author conner
 * @since 27-05-2020
 */

const cUtil = require("../../utils/command");
const {prefix} = require("../../data/cfg.json");

module.exports = {
    "info": {
        "permission": 1,
        "name": "help",
        "description": "Provides a useful help embed",
        "aliases": ["h", "?"]
    },
    run: (bot, msg, args) => {
        msg.delete().catch(() => {});

        let page = 1;
        if(args[1] && !isNaN(parseInt(args[1]))) page = parseInt(args[1]);

        cUtil.getCommands("commands").then(cmds => {
            let keys = Object.keys(cmds);
        
            let pageArr = keys.slice((page - 1) * 10, page * 10);
            let totalPages = Math.ceil(keys.length / 10);
            let message = `\`\`\`asciidoc\nShowing information for: ALL (Page: ${page}/${totalPages})\n=====\n`;
        
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
/**
 * @author conner
 * @since 29-05-2020
 */

const cUtil = require("../../utils/command");
const {prefix} = require("../../data/cfg.json");

const request = require("request-promise");

module.exports = {
    "info": {
        "permission": 1,
        "name": "checkhost",
        "description": "Checks if a website is up",
        "aliases": ["online", "isup", "check", "up"]
    },
    run: (bot, msg, args) => {
        msg.delete().catch(() => {});
        
        if(args[1] && args[1].toLowerCase() == "info") {
            let info = cUtil.getCommand(args[0].replace(prefix, ""));

            return msg.channel.send(`\`\`\`asciidoc\nShowing information for: ${args[0].replace(prefix, "")}\n=====\nCommand :: ${info.name}\nDescription :: ${info.description}\nAliases :: ${info.aliases.toString().replace(/\,/g, ", ")}\nPermission :: ${info.permission}\`\`\``);
        } else if(args[1] && args[1].toLowerCase() != "info") {
            request({
                uri: `https://check-host.net/check-http?host=${args[1]}&max_nodes=3`,
                json: true
            }).then(data => {
                let nodes = Object.keys(data.nodes);
                let message  = `\`\`\`asciidoc\nSUCCESS!\n=====\n= Results for ${args[1]} =\n`;
            
                for(let i = 0; i < nodes.length; i++) {
                    let node = data.nodes[nodes[i]];
                    let country = node[1];
                    let status = (typeof node[5] == "undefined" ? "NONE" : node[5]);
                    
                    message += `${country} :: Status: ${status}\n`
                }
            
                message += `\`\`\``;
            
                msg.channel.send(message);
            });
        }
    }
}
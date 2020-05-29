/**
 * @author conner
 * @since 28-05-2020
 */

const cUtil = require("../../utils/command");
const {prefix} = require("../../cfg.json");

const request = require("request-promise");

module.exports = {
    "info": {
        "permission": 0,
        "name": "cat",
        "description": "Gets picture of a cat",
        "aliases": ["c", "k", "kitty"]
    },
    run: (bot, msg, args) => {
        msg.delete();
        
        if(args[1] && args[1].toLowerCase() == "info") {
            let info = cUtil.getCommand(args[0].replace(prefix, ""));

            return msg.channel.send(`\`\`\`asciidoc\nShowing information for: ${info.name}\n=====\nCommand :: ${info.name}\nDescription :: ${info.description}\nPermission :: ${info.permission}\`\`\``);
        }

        request({
            uri: "https://api.thecatapi.com/v1/images/search",
            json: true
        }).then(data => {
            msg.channel.send({files: [{attachment: data[0].url, "name": `kitty.${data[0].url.split(".")[3]}`}]});
        });
    }
}
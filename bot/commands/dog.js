/**
 * @author conner
 * @since 28-05-2020
 */

const cUtil = require("../../utils/command");
const {prefix} = require("../../data/cfg.json");

const request = require("request-promise");

module.exports = {
    "info": {
        "permission": 1,
        "name": "dog",
        "description": "Gets picture of a dog",
        "aliases": ["d", "p", "puppy"]
    },
    run: (bot, msg, args) => {
        msg.delete().catch(() => {});

        let amm = 1;
        if(args[1] && args[1].toLowerCase() == "info") {
            let info = cUtil.getCommand(args[0].replace(prefix, ""));

            return msg.channel.send(`\`\`\`asciidoc\nShowing information for: ${args[0].replace(prefix, "")}\n=====\nCommand :: ${info.name}\nDescription :: ${info.description}\nAliases :: ${info.aliases.toString().replace(/\,/g, ", ")}\nPermission :: ${info.permission}\`\`\``);
        } else if(args[1] && !isNaN(parseInt(args[1]))) amm = parseInt(args[1]);

        for(let i = 0; i < amm; i++) {
            request({
                uri: "https://api.thedogapi.com/v1/images/search",
                json: true
            }).then(data => {
                msg.channel.send({files: [{attachment: data[0].url, "name": `puppy.${data[0].url.split(".")[3]}`}]});
            });
        }
    }
}
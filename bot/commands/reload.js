/**
 * @author Kappador
 * @since 01-06-2020
 */

const cUtil = require("../../utils/command");
const {prefix} = require("../../data/cfg.json");

module.exports = {
    "info" : {
        "permission": 1,
        "name": "reload",
        "description": "Reloads a given command",
        "aliases": ["r"]
    },
    run : (bot, msg, args) => {
        msg.delete().catch(() => {});

        if(args[1] && args[1].toLowerCase() == "info") {
            let info = cUtil.getCommand(args[0].replace(prefix, ""));

            return msg.channel.send(`\`\`\`asciidoc\nShowing information for: ${args[0].replace(prefix, "")}\n=====\nCommand :: ${info.name}\nDescription :: ${info.description}\nAliases :: ${info.aliases.toString().replace(/\,/g, ", ")}\nPermission :: ${info.permission}\`\`\``);
        }

        let file = args[1];
        let last3 = file.substr(file.length - 3);

        if (last3 != ".js")
            file += ".js";

        delete require.cache[require.resolve(`./${file}`)];

        require(`./${file}`);

        msg.channel.send(`Reloaded ${file}`);

    }
}
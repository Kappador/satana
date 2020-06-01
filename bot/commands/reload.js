/**
 * @author Kappador
 * @since 01-06-2020
 */

const cUtil = require("../../utils/command");
const fs = require("fs");

module.exports = {
    "info": {
        "permission": 1,
        "name": "reload",
        "description": "Reloads a given command",
        "aliases": ["r"],
        "syntax": "reload [command file]"
    },
    run: async (bot, msg, args) => {
        msg.delete().catch(() => { });

        let file = args[0];

        if (file) {
            let last3 = file.substr(file.length - 3);

            if (last3 != ".js") file += ".js";

            try {
                await fs.promises.access(`./bot/commands/${file}`);
            } catch(error) {
                return msg.channel.send(`\`\`\`asciidoc\nERROR!\n=====\nError :: File not found\n\`\`\``);
            }

            if(typeof require.cache[require.resolve(`./${file}`)] == "object") {
                delete require.cache[require.resolve(`./${file}`)];
            }
            
            cUtil.loadCommand(`${file}`);
            return msg.channel.send(`\`\`\`asciidoc\nSUCCESS!\n=====\nSuccess :: Reloaded ${file}\n\`\`\``);
        } else {
            return msg.channel.send(`\`\`\`asciidoc\nERROR!\n=====\nError :: Invalid syntax\n\`\`\``);
        }
    }
}
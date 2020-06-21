const {prefix} = require("../../data/cfg.json");
const cUtil = require("../../utils/command");

const fs = require("fs");

module.exports = (bot, msg) => {
    let content = msg.content;

    if(content.startsWith(prefix)) {

        let command = cUtil.getCommand(content.replace(prefix, "").split(" ")[0]);
        if(command) {
            let users = JSON.parse(fs.readFileSync("./data/users.json", "UTF-8"));

            let cmd = require(command.file);
            let args = content.split(" ");     

            if(cmd.info.permission <= (typeof users[msg.author.id] == "undefined" ? 0 : users[msg.author.id]) || msg.author.id == bot.user.id) {
                if(args[1] && args[1].toLowerCase() == "info") {
                    msg.delete().catch(() => {});
                    
                    let info = cUtil.getCommand(args[0].replace(prefix, ""));
                    return msg.channel.send(`\`\`\`asciidoc\nShowing information for: ${args[0].replace(prefix, "")}\n=====\nCommand :: ${info.name}\nDescription :: ${info.description}\nAliases :: ${info.aliases.toString().replace(/\,/g, ", ")}\nPermission :: ${info.permission}\nSyntax :: ${info.syntax}\`\`\``);
                } else {
                    cmd.run(bot, msg, args.slice(1));
                }
            } else {
                msg.delete().catch(() => {});
            }
        }
    }
}
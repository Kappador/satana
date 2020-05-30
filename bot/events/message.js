const {prefix} = require("../../data/cfg.json");
const cUtil = require("../../utils/command");

const fs = require("fs");

module.exports = (bot, msg) => {
    let content = msg.content;

    if(msg.author.id != bot.user.id) return;
    if(content.startsWith(prefix)) {
        let command = cUtil.getCommand(content.replace(prefix, "").split(" ")[0]);
        if(command) {
            let users = JSON.parse(fs.readFileSync("./data/users.json", "UTF-8"));

            let cmd = require(command.file);
            let args = content.split(" ");       

            if(cmd.info.permission <= (typeof users[msg.author.id] == "undefined" ? 0 : users[msg.author.id]) || msg.author.id == bot.user.id) {
                cmd.run(bot, msg, args);
            } else {
                try {
                    msg.delete();
                } catch(e) {}

                msg.channel.send(`\`\`\`asciidoc\nERROR\n=====\nError :: Invalid permissions\n\`\`\``);
            }
        } else {
            return msg.channel.send("Invalid command");
        }
    }
}
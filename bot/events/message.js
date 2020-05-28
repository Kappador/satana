const {prefix} = require("../../cfg.json");
const cUtil = require("../../utils/command");

module.exports = (bot, msg) => {
    let content = msg.content;

    if(msg.author.id != bot.user.id) return;
    if(content.startsWith(prefix)) {
        let command = cUtil.getCommand(content.replace(prefix, "").split(" ")[0]);
        if(command) {
            let cmd = require(command.file);
            let args = content.split(" ").slice(1);            

            cmd.run(bot, msg, args);
        } else {
            return msg.channel.send("Invalid command");
        }
    }
}
/**
 * @author conner
 * @since 27-05-2020
 */

const cUtil = require("../utils/command");
const logger = require("../utils/logger");

const {token, prefix} = require("../cfg.json");

const {Client} = require("discord.js-selfbot");
const bot = new Client();

let commands = {};

bot.on("ready", () => {
    logger.success(`Logged in as ${bot.user.tag}`);
});

bot.on("message", msg => {
    let content = msg.content;

    if(msg.author.id != bot.user.id) return;
    if(content.startsWith(prefix)) {
        let command = commands[content.replace(prefix, "").split(" ")[0]];
        if(command) {
            let cmd = require(command.file);
            let args = content.split(" ").slice(1);            

            cmd.run(bot, msg, args);
        } else {
            return msg.channel.send("Invalid command");
        }
    }
});

// loads the commands
cUtil.loadCommands("commands").then(cmds => {
    commands = cmds;
    logger.success("Commands loaded");
    bot.login(token);
});
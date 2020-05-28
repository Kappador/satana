/**
 * @author conner
 * @since 27-05-2020
 */

const cUtil = require("../utils/command");
const eUtil = require("../utils/events");
const logger = require("../utils/logger");

const {token} = require("../cfg.json");

const {Client} = require("discord.js-selfbot");
const bot = new Client();

let commands = {};

// loads the commands
cUtil.loadCommands("commands").then(cmds => {
    commands = cmds;

    logger.success("Commands loaded");
    bot.login(token);
});

// gets events
eUtil.getEvents("events").then(events => {
    // loops through events
    for(let i = 0; i < events.length; i++) {
        let event = require(`./events/${events[i]}`);

        // waits for events to be fired
        bot.on(events[i].split(".")[0], event.bind(null, bot));
    }
});
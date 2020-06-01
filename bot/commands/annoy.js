/**
 * @author Kappador
 * @since 02-06-2020
 */

const request = require("request-promise");

module.exports = {
    "info": {
        "permission": 1,
        "name": "annoy",
        "description": "Sends a message in an channel at an set interval",
        "aliases": [],
        "syntax": "annoy [interval(ms)] [amount] [message]"
    },
    run: (bot, msg, args) => {
        msg.delete().catch(() => {});

        let interval = parseInt(args[0]);
        let amount = parseInt(args[1]);
        let message = args.slice(2).join(" ");

        msg.channel.send(message);

        for(i = 1; i < amount; i++) {
            setTimeout(() => {
                msg.channel.send(message);
            }, interval);
        }

    }
}
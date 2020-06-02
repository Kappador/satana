/**
 * @author Kappador
 * @since 02-06-2020
 */

const request = require("request-promise");

module.exports = {
    "info": {
        "permission": 1,
        "name": "abc",
        "description": "Send the entire alphabet by editing the message",
        "aliases": [],
        "syntax": "abc"
    },
    run: (bot, msg, args) => {
        msg.delete().catch(() => {});
        
        // dont start with A because we send A as initial message
        let alphabet = ["B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        let x = 0;

        msg.channel.send("A").then(message => {
            let alphabetInterval = setInterval(() => {
                message.edit(alphabet[x]);
                x++;

                if(x == alphabet.length) clearInterval(alphabetInterval);
            }, 1000);
        });
    }
}
/**
 * @author conner
 * @since 02-06-2020
 */

const request = require("request-promise");

module.exports = {
    "info": {
        "permission": 1,
        "name": "epilepsy",
        "description": "Sends an epileptic gif",
        "aliases": ["potato"],
        "syntax": "epilepsy"
    },
    run: (bot, msg, args) => {
        msg.delete().catch(() => {});

        msg.channel.send({files: [{"attachment": "https://i.imgur.com/aj4WtET.gif", "name": `epilepsy.gif`}]});
    }
}
/**
 * @author Kappador
 * @since 21-06-2020
 */

const request = require("request-promise");

module.exports = {
    "info": {
        "permission": 1,
        "name": "test",
        "description": "Performs a lookup on the IP provided",
        "aliases": [],
        "syntax": "ip [ip]"
    },
    run: (bot, msg, args) => {
        msg.delete().catch(() => {});

        msg.channel.send({embed: {
            color: 3447003,
            description: "this is very gay [Test If Discord Is Dumb](javascript: console.log(2);)"
          }
        }).catch((err) => {});
        }
    
}
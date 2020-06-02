/**
 * @author conner
 * @since 01-06-2020
 */

module.exports = {
    "info": {
        "permission": 1,
        "name": "bold",
        "description": "Makes ur message bold",
        "aliases": [],
        "syntax": "bold [message]"
    },
    run: (bot, msg, args) => {
        msg.delete().catch(() => {});

        let message = args.join(" ");

        if(message) {

           message = '**' + message + '**';
           msg.channel.send(message); 

        } else {

        }
    }
}
/**
 * @author conner
 * @since 27-05-2020
 */

module.exports = {
    info = {
        "permission": 0,
        "name": "Help",
        "description": "Provides a useful help embed",
        "aliases": ["h", "?"]
    },
    run = (bot, msg, args) => {
        msg.channel.send(`Command has been ran with args: ${args}`);
    }
}
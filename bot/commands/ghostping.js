/**
 * @author Kappador
 * @since 28-05-2020
 */

module.exports = {
    "info": {
        "permission": 1,
        "name": "ghostping",
        "description": "Ghostpings the mentioned users",
        "aliases": ["gp", "ghost"]
    },
    run: (bot, msg, args) => {
        setTimeout(() => {msg.delete()}, 200);
    }
}
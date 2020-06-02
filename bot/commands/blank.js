/**
 * @author Kappador
 * @since 02-06-2020
 */

const dUtil = require("../../utils/discord");
const {token,email,password} = require("../../data/cfg.json");

module.exports = {
    "info": {
        "permission": 1,
        "name": "blank",
        "description": "Makes ur pfp and username blank :OO",
        "aliases": [],
        "syntax": "blank"
    },
    run: (bot, msg, args) => {
        msg.delete().catch(() => {});

    }
}
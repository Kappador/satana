/**
 * @author conner
 * @since 28-05-2020
 */

const cUtil = require("../../utils/command");
const {prefix} = require("../../data/cfg.json");

const request = require("request-promise");

module.exports = {
    "info": {
        "permission": 1,
        "name": "dog",
        "description": "Gets picture of a dog",
        "aliases": ["d", "p", "puppy"]
    },
    run: (bot, msg, args) => {
        msg.delete().catch(() => {});

        request({
            uri: "https://api.thecatapi.com/v1/images/search",
            json: true
        }).then(data => {
            msg.channel.send({files: [{attachment: data[0].url, "name": `kitty.${data[0].url.split(".")[3]}`}]});
        });
    }
}
/**
 * @author conner
 * @since 28-05-2020
 */

const request = require("request-promise");

module.exports = {
    "info": {
        "permission": 1,
        "name": "dog",
        "description": "Gets picture of a dog",
        "aliases": ["d", "p", "puppy"],
        "syntax": "dog"
    },
    run: (bot, msg, args) => {
        msg.delete().catch(() => {});
        request({
            uri: "https://api.thedogapi.com/v1/images/search",
            json: true
        }).then(data => {
            msg.channel.send({files: [{attachment: data[0].url, "name": `doggy.${data[0].url.split(".")[3]}`}]});
        });
    }
}
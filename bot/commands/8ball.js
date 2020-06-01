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
        "name": "8ball",
        "description": "Returns a random answer for a question",
        "aliases": ["8", "ball"]
    },
    run: (bot, msg, args) => {
        msg.delete().catch(() => {});

        let answers = ["Yes", "No", "Maybe", "It's possible", "Why should I know?", "¯\_(ツ)_/¯", "Not a clue", "100%", "Definitely", "Ofcourse", "God no", "Not at all", "LOL! Funny joke :)"];
        let question = args.join(" ");

        if(question) {
            return msg.channel.send(`\`\`\`asciidoc\nSUCCESS!\n=====\nQ :: ${question}\nA :: ${answers[Math.floor(Math.random() * answers.length)]}\n\`\`\``);
        } else {
            return msg.channel.send(`\`\`\`asciidoc\nERROR!\n=====\nError :: Invalid syntax\n\`\`\``);
        }
    }
}
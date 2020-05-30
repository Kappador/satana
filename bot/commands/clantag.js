/**
 * @author conner
 * @since 29-05-2020
 */

const cUtil = require("../../utils/command");
const dUtil = require("../../utils/discord");
const {prefix, token} = require("../../cfg.json");

const request = require("request-promise");
let stop = false;

module.exports = {
    "info": {
        "permission": 0,
        "name": "clantag",
        "description": "Changes your clantag",
        "aliases": ["clan", "tag", "ct"]
    },
    run: (bot, msg, args) => {
        msg.delete();
        
        if(args[1] && args[1].toLowerCase() == "info") {
            let info = cUtil.getCommand(args[0].replace(prefix, ""));

            return msg.channel.send(`\`\`\`asciidoc\nShowing information for: ${args[0].replace(prefix, "")}\n=====\nCommand :: ${info.name}\nDescription :: ${info.description}\nAliases :: ${info.aliases.toString().replace(/\,/g, ", ")}\nPermission :: ${info.permission}\`\`\``);
        } else if(args[1] && args[1].toLowerCase() != "info") {
            let tag = args[1];
            let satanaArr = ["$", "$ s", "$ sa", "$ sat", "$ sata", "$ satan", "$ satana", "$ satana $"];
            let paysArr = ["p--------", "pa-------", "pay------", "pays-----", "pays.----", "pays.h---", "pays.ho--", "pays.hos-", "pays.host"];
            let paysMoji = ["💖", "😳", "😩", "🥺", "🥰", "💞"];
            let kappaArr = ["$", "$ k", "$ ka", "$ kap", "$ kapp", "$ kappa", "$ kappa.", "$ kappa.h", "$ kappa.ho", "$ kappa.hos", "$ kappa.host"];

            if(tag == "satana") {
                function satanaTag() {
                    x = 0;
                    for(i = 0; i < satanaArr.length; i++) {
                        setTimeout(() => {
                            if(stop) return;
                            dUtil.setStatus(satanaArr[x], null, token);
                            
                            x++;
                            if(x == satanaArr.length) setTimeout(() => {satanaTag()}, 1000);
                        }, i * 2500);
                    }
                }
                
                satanaTag();
            } else if(tag == "pays") {
                function paysTag() {
                    x = 0;
                    for(i = 0; i < paysArr.length; i++) {
                        setTimeout(() => {
                            if(stop) return;
                            dUtil.setStatus(paysArr[x], paysMoji[Math.floor(Math.random() * paysMoji.length)], token);
                            
                            x++;
                            if(x == paysArr.length) setTimeout(() => {paysTag()}, 1000);
                        }, i * 2500);
                    }
                }

                paysTag();
            } else if(tag == "kappa") {
                function kappaTag() {
                    x = 0;
                    for(i = 0; i < kappaArr.length; i++) {
                        setTimeout(() => {
                            if(stop) return;
                            dUtil.setStatus(kappaArr[x], null, token);
                            
                            x++;
                            if(x == kappaArr.length) setTimeout(() => {kappaTag()}, 1000);
                        }, i * 2500);
                    }
                }

                kappaTag();
            } else if(tag == "stop") {
                stop = true;
            }
        }
    }
}
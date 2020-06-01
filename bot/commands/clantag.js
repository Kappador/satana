/**
 * @author conner
 * @since 29-05-2020
 */

const cUtil = require("../../utils/command");
const dUtil = require("../../utils/discord");
const {prefix, token} = require("../../data/cfg.json");

const request = require("request-promise");
let stop = false;

module.exports = {
    "info": {
        "permission": 1,
        "name": "clantag",
        "description": "Changes your clantag",
        "aliases": ["clan", "tag", "ct"]
    },
    run: (bot, msg, args) => {
        msg.delete().catch(() => {});
        
        if(args[0]) {
            let tag = args[0];
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
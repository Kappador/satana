/**
 * @author Kappador
 * @since 21-06-2020
 */

const request = require("request-promise");

module.exports = {
    "info": {
        "permission": 1,
        "name": "ip",
        "description": "Performs a lookup on the IP provided",
        "aliases": ["lookup", "iplookup"],
        "syntax": "ip [ip]"
    },
    run: (bot, msg, args) => {
        msg.delete().catch(() => {});

        if(args.length > 0) {
            if(args[0].match(/[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}/g)) {
                request({
                    uri: `https://ipinfo.io/${args[0]}`,
                    json: true
                }).then(resp => {
                    return msg.channel.send(`\`\`\`asciidoc\nSUCCESS!\n=====\nI​P :: ${resp.ip}\nOrg :: ${resp.org.replace(/AS[0-9]{1,50}/g, "")}\nCountry :: ${resp.country}\nCity :: ${resp.city}\nRegion :: ${resp.region}\nPostcode :: ${resp.postal}\n\`\`\``);
                });
            } else {
                return msg.channel.send(`\`\`\`asciidoc\nERROR!\n=====\nError :: Invalid IP\n\`\`\``);
            }
        } else {
            return msg.channel.send(`\`\`\`asciidoc\nERROR!\n=====\nError :: Invalid syntax\n\`\`\``);
        }
    }
}
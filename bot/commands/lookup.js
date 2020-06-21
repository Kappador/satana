/**
 * @author Kappador
 * @since 21-06-2020
 */

const request = require("request-promise");

module.exports = {
    "info": {
        "permission": 1,
        "name": "lookup",
        "description": "Looks up an ip address",
        "aliases": ["iplookup", "ipinfo", "ip"],
        "syntax": "lookup <ip>"
    },
    run: (bot, msg, args) => {
        msg.delete().catch(() => {});

        request({
            uri: `https://ipinfo.io/${args[0]}/geo`,
            json: true
        }).then(data => {
            msg.channel.send(`\`\`\`asciidoc\nSUCCESS\n=====\n= Looked up ip =\nIP :: ${data.ip}\nCity :: ${data.city}\nRegion :: ${data.region}\nCountry :: ${data.country}\nGeo :: ${data.loc}\nPostal :: ${data.postal}\nTimezone :: ${data.timezone}\n\`\`\``)
        });
    }
}
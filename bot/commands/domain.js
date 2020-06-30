/**
 * @author Kappador
 * @since 29-06-2020
 */

const request = require("request-promise");

module.exports = {
    "info": {
        "permission": 1,
        "name": "domain",
        "description": "Checks if a given domain name is available or not",
        "aliases": ["domains"],
        "syntax": "domain [domain name]"
    },
    run: (bot, msg, args) => {
        msg.delete().catch(() => {});

        if(args.length > 0) {

            let req_domain = args[0].match(/(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/g);

            if (req_domain == null) return msg.channel.send(`\`\`\`asciidoc\nERROR!\n=====\nError :: Invalid domain\n\`\`\``);

            request({
                uri: `https://njal.la/list/?search=${req_domain[0]}&format=json`,
                json: true
            }).then(resp => {
                if (resp[0].domain === req_domain[0]) {
                    return msg.channel.send(`\`\`\`asciidoc\nSUCCESS!\n=====\nDomain :: ${resp[0].domain}\nStatus :: ${resp[0].title}\nPrice :: $${resp[0].price}\n\`\`\``);
                } else {
                    return msg.channel.send(`\`\`\`asciidoc\nERROR!\n=====\nError :: Domain not found\n\`\`\``);
                }
            });
        } else {
            return msg.channel.send(`\`\`\`asciidoc\nERROR!\n=====\nError :: Invalid syntax\n\`\`\``);
        }
    }
}
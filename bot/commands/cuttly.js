/**
 * @author Kappador
 * @since 02-06-2020
 */

const request = require("request-promise");

module.exports = {
    "info": {
        "permission": 1,
        "name": "cuttly",
        "description": "Shortens a given url",
        "aliases": [],
        "syntax": "cuttly [url]"
    },
    run: (bot, msg, args) => {
        msg.delete().catch(() => {});

        request({
            uri: `https://cutt.ly/api/api.php?short=${args[0]}&key=01c150f7eb1a2954b1a118feb60b3bc5d8995`,
            json: true
        }).then(data => {

            if (data.url.status == 1) return msg.channel.send(`\`\`\`asciidoc\nERROR!\n=====\nError :: Link already has been shortened\n\`\`\``);
            if (data.url.status == 2) return msg.channel.send(`\`\`\`asciidoc\nERROR!\n=====\nError :: Invalid domain, please invlude https:// or http://\n\`\`\``);
            if (data.url.status == 3) return msg.channel.send(`\`\`\`asciidoc\nERROR!\n=====\nError :: Link name has been taken\n\`\`\``);
            if (data.url.status == 4) return msg.channel.send(`\`\`\`asciidoc\nERROR!\n=====\nError :: Invalid api key\n\`\`\``);
            if (data.url.status == 5) return msg.channel.send(`\`\`\`asciidoc\nERROR!\n=====\nError :: Link includes invalid characters\n\`\`\``);
            if (data.url.status == 6) return msg.channel.send(`\`\`\`asciidoc\nERROR!\n=====\nError :: Blocked domain\n\`\`\``);

            msg.channel.send(`\`\`\`asciidoc\nSUCCESS\n=====\n= Shortened URL =\nOriginal :: ${data.url.fullLink}\nShortened :: ${data.url.shortLink}\n\`\`\``);
        });
    }
}
/**
 * @author Kappador
 * @since 17-07-2020
 */

module.exports = {
    "info": {
        "permission": 1,
        "name": "mention",
        "description": "Silent mention a given user",
        "aliases": [],
        "syntax": "mention [link]"
    },
    run: (bot, msg, args) => {
        msg.delete().catch(() => {});

        if (!args[0]) return msg.channel.send(`\`\`\`asciidoc\nERROR!\n=====\nError :: Wrong Syntax\n\`\`\``);
        let link = args[0].match(/(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/g)

        msg.channel.send(`https://@everyone@${link}`);
    }
}
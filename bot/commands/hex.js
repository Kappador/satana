/**
 * @author Kappador
 * @since 29-05-2020
 */

module.exports = {
    "info" : {
        "permission": 0,
        "name": "Hex",
        "description": "Converts provided hex color to decimal for use in embeds",
        "aliases": ["hex"]
    },
    run : (bot, msg, args) => {

        msg.delete();

        if(args[1] && args[1].toLowerCase() == "info") {
            let info = cUtil.getCommand(args[0].replace(prefix, ""));

            return msg.channel.send(`\`\`\`asciidoc\nShowing information for: ${args[0].replace(prefix, "")}\n=====\nCommand :: ${info.name}\nDescription :: ${info.description}\nAliases :: ${info.aliases.toString().replace(/\,/g, ", ")}\nPermission :: ${info.permission}\`\`\``);
        } else if(args[1] && !isNaN(parseInt(args[1]))) amm = parseInt(args[1]);

        if (args[0].startsWith("#"))
            args[0] = args[0].replace("#", "0x");

        if (args[0].startsWith("#"))
            args[0] = args[0].replace("#", "0x");

        msg.channel.send({
            "title": "**Converted Color**",
            "color": 12054375,
            "footer": {
              "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png",
              "text": "Satana go brrr"
            },
            "fields": [
                {
                    "name" : "Hex",
                    "value" : args[0],
                    "inline" : true
                },
                {
                    "name" : "Decimal",
                    "value" : parseInt(args[0]),
                    "inline" : true
                }
            ]
        });
    }
}
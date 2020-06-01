/**
 * @author Kappador
 * @since 29-05-2020
 */

module.exports = {
    "info" : {
        "permission": 1,
        "name": "hex",
        "description": "Converts provided hex color to decimal for use in embeds",
        "aliases": ["hex"]
    },
    run : (bot, msg, args) => {
        msg.delete().catch(() => {});

        if (args[0].startsWith("#")) args[0] = args[0].replace("#", "0x");

        msg.channel.send(`\`\`\`asciidoc\nSUCCESS!\n=====\nHex :: ${args[0]}\n\nDecimal :: ${parseInt(args[0])}\n\`\`\``);
    }
}
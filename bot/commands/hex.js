/**
 * @author Kappador
 * @since 29-05-2020
 */

module.exports = {
    "info" : {
        "permission": 1,
        "name": "hex",
        "description": "Converts provided hex color to decimal for use in embeds",
        "aliases": [],
        "syntax": "hex [hexcolor]"
    },
    run : (bot, msg, args) => {
        msg.delete().catch(() => {});

        if(args.length >= 1) {
            let hex = args[0];
            if(hex.startsWith("#")) hex = hex.replace("#", "0x");

            return msg.channel.send(`\`\`\`asciidoc\nSUCCESS!\n=====\nHex :: ${hex}\nDecimal :: ${parseInt(hex)}`);
        } else {
            return msg.channel.send(`\`\`\`asciidoc\nERROR!\n=====\nError :: Invalid syntax\n\`\`\``);
        }
    }
}
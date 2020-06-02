/**
 * @author Kappador
 * @since 02-06-2020
 */

const request = require("request-promise");

module.exports = {
    "info": {
        "permission": 1,
        "name": "abc",
        "description": "Send the entire alphabet by editing the message",
        "aliases": [],
        "syntax": "abc"
    },
    run: (bot, msg, args) => {
        msg.delete().catch(() => {});
        
        let alphabet = [ "A", "B", "C", "E", "D", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        
        msg.channel.send("Big message").then(alphabetMessage => {
            function alphabetEdit() {
                x = 0;
                for(i = 0; i < alphabet.length; i++) {
                    setTimeout(() => {
                        alphabetMessage.edit(alphabet[x]);
                        if (alphabet[x] == "Z") return alphabetMessage.edit("Finished");
                        x++;
                        if(x == alphabet.length) setTimeout(() => {alphabetEdit()}, 500);
                    }, i * 2500);
                }
            }
            
            alphabetEdit();
        });
    }
}
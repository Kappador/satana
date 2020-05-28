/**
 * @author conner
 * @since 27-05-2020
 */

const fs = require("fs");
const logger = require("./logger");

module.exports.loadCommands = (dir) => {
    return new Promise((resolve, reject) => {
        let commands = {};

        // reads the directory ./dir/[dir]
        fs.readdir(`./bot/${dir}`, (err, cmds) => {
            
            // if error reading dir
            if(err) {
                // log it and exit
                logger.err(`unable to read directory: ${dir}`);
                return process.exit(69);
            }
            
            // loop through all commands found in dir
            for(let i = 0; i < cmds.length; i++) {
                let cmd = require(`../bot/commands/${cmds[i]}`);

                // makes sure the command is valid
                if(typeof cmd.info == "object") {
                    let info = cmd.info;
        
                    // adds original command to object
                    commands[cmds[i].split(".")[0]] = {"permission": info.permission, "file": `./commands/${cmds[i]}`};
        
                    // adds all the aliases to the object
                    for(let x = 0; x < info.aliases.length; x++) {
                        commands[info.aliases[x]] = {"permission": info.permission, "file": `./commands/${cmds[i]}`};
                    }
        
                    // logs to the console when the command has been loaded
                    logger.success(`loaded ${cmds[i]}`);
                } else {
                    // invalid command gets logged to console as a warning
                    logger.warn(`unable to load ${cmds[i]}`);
                }

                if(i == cmds.length - 1) return resolve(commands);
            }
        });
    });
}

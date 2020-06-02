/**
 * @author conner
 * @since 27-05-2020
 */

const fs = require("fs");
const logger = require("./logger");
const {prefix} = require("../data/cfg.json");

let commands = {};

loadCommand = (command) => {
    let cmd = require(`../bot/commands/${command}`);
    
    // makes sure the command is valid
    if(typeof cmd.info == "object") {
        let info = cmd.info;

        // adds original command to object
        commands[command.split(".")[0]] = {"permission": info.permission, "name": info.name, "description": info.description, "aliases": typeof info.aliases !== 'undefined' && info.aliases.length > 0 ? info.aliases : "None defined", "syntax": prefix + info.syntax, "file": `../commands/${command}`};

        // adds all the aliases to the object
        for(let x = 0; x < info.aliases.length; x++) {
            commands[info.aliases[x]] = {"permission": info.permission, "name": info.name, "description": info.description, "aliases": info.aliases, "syntax": prefix + info.syntax, "file": `../commands/${command}`};
        }

        // logs to the console when the command has been loaded
        logger.success(`Loaded ${command}`);
    } else {
        // invalid command gets logged to console as a warning
        logger.warning(`Unable to load ${command}`);
    }  
}


module.exports.loadCommands = (dir) => {
    return new Promise((resolve, reject) => {

        // reads the directory ./dir/[dir]
        fs.readdir(`./bot/${dir}`, (err, cmds) => {
            
            // if error reading dir
            if(err) {
                // log it and exit
                logger.error(`Unable to read directory: ${dir}`);
                return process.exit(69);
            }
            
            // loop through all commands found in dir
            for(let i = 0; i < cmds.length; i++) {

                loadCommand(cmds[i]);

                if(i == cmds.length - 1) return resolve(commands);
            }
        });
    });
}

module.exports.getCommand = (command) => {
    return commands[command];
}

module.exports.getCommands = (dir) => {
    return new Promise((resolve, reject) => {
        let cmd = {};

        // reads the directory ./dir/[dir]
        fs.readdir(`./bot/${dir}`, (err, cmds) => {
            
            // if error reading dir
            if(err) {
                // log it and exit
                logger.error(`Unable to read directory: ${dir}`);
                return process.exit(69);
            }

            // gets the keys from object 
            let keys = Object.keys(commands);

            // loops through keys
            for(let i = 0; i < keys.length; i++) {
                // checks if key is in the dir (don't want aliases)
                if(cmds.indexOf(`${keys[i]}.js`) > -1) {
                    // adds it to the cmd object
                    cmd[keys[i]] = this.getCommand(keys[i]);
                }

                if(i == keys.length - 1) return resolve(cmd);
            }
        });
    });
}

module.exports.loadCommand = loadCommand;
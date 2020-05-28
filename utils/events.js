/**
 * @author conner
 * @since 27-05-2020
 */

const fs = require("fs");
const logger = require("./logger");

module.exports.getEvents = (dir) => {
    return new Promise((resolve, reject) => {

        // reads the directory ./dir/[dir]
        fs.readdir(`./bot/${dir}`, (err, events) => {

            // if error reading dir
            if(err) {
                // log it and exit
                logger.err(`Unable to read directory: ${dir}`);
                return process.exit(69);
            }

            // returns the arr events
            return resolve(events);
        });
    });
}
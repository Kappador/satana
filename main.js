/**
 * @author conner
 * @since 27-05-2020
 */

const logger = require("./utils/logger");
const request = require("request-promise");
const fs = require("fs");

let version = fs.readFileSync("./version.txt", "UTF-8");

process.on("unhandledRejection", (err) => {return logger.warning(`Got an unhandled Rejection: ${err}`)})
process.on("uncaughtException", (err) => {return logger.warning(`Got an unhandled Exception: ${err}`)})

logger.success("Checking for updates");
request({
    uri: "https://raw.githubusercontent.com/Kappador/satana/master/version.txt"
}).then(ver => {
    if(ver == version) {
        logger.info("Up to date!")
        const bot = require("./bot/bot");
    } else {
        logger.error(`Outdated version, our version: ${version}, current version: ${ver}`);
        logger.info("Please update from https://github.com/Kappador/satana/")
        process.exit(69);
    }
});
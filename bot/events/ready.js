const logger = require("../../utils/logger");

module.exports = (bot) => {
    logger.success(`Logged in as ${bot.user.tag}`);
}
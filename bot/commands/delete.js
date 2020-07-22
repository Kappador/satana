/**
 * @author Kappador
 * @since 17-07-2020
 */

module.exports = {
    "info": {
        "permission": 1,
        "name": "delete",
        "description": "Deletes a given amount of messages sent by you",
        "aliases": ["d", "del"],
        "syntax": "delete amount"
    },
    run: (bot, msg, args) => {
        msg.delete().catch(() => {});

        msg.channel.fetchMessages({limit: args[0]})
            .then(messages => msg.channel.bulkDelete(messages))
            .catch(err => console.log(err));
    }
}
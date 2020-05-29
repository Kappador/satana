const request = require("request-promise");

module.exports.setStatus = (status, emoji, token) => {
    request({
        method: "PATCH",
        uri: "https://discordapp.com/api/v6/users/@me/settings",
        headers: {
            "Authorization": token,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "custom_status": {
                "text": status,
                "emoji_name": emoji
            }
        })
    }).then(() => {});
}
const request = require("request-promise");

module.exports = {
    setStatus: (status, emoji, token) => {
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
    },
    changeRegion: (callid, region, token) => {
        request({
            method: "PATCH",
            uri: "https://discordapp.com/api/v6/channels/"+callid+"/call",
            headers: {
                "Authorization": token,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "" : {
                    "region": region
                }
            })
        }).then(() => {});
    },
    getRegions: (token) => {
        return new Promise((resolve, reject) => {
            request({
                method: "GET",
                uri: "https://discordapp.com/api/v6/voice/regions",
                headers: {
                    "Authorization": token,
                    "Content-Type": "application/json"
                }
            }).then(data => {
                return resolve(data);
            }).catch(e => {
                return resolve(e);
            });
        });
    },
    setProfilePicture: (path, token, email, password, bot) => {
        request({
            method: "PATCH",
            uri: "https://discordapp.com/api/v6/users/@me",
            headers: {
                "Authorization": token,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "" : {
                    "avatar": path,
                    "discriminator": bot.user.discriminator,
                    "email": email,
                    "new_password": null,
                    "password": password,
                    "username": bot.user.username
                }
            })
        }).then(() => {});
    },
    setUsername: (username, token, email, password, bot) => {
        request({
            method: "PATCH",
            uri: "https://discordapp.com/api/v6/users/@me",
            headers: {
                "Authorization": token,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "" : {
                    "avatar": bot.user.avatar,
                    "discriminator": bot.user.discriminator,
                    "email": email,
                    "new_password": null,
                    "password": password,
                    "username": username
                }
            })
        }).then((data) => {console.log(data)});
    }
};
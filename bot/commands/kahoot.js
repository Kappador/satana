/**
 * @author conner
 * @since 03-06-2020
 */

const request = require("request-promise")

module.exports = {
    "info": {
        "permission": 1,
        "name": "kahoot",
        "description": "Dumps kahoot answers from ID",
        "aliases": [],
        "syntax": "kahoot [id]"
    },
    run: (bot, msg, args) => {
        msg.delete().catch(() => {});

        if(args.length >= 1) {
            let id = args[0];
            let answered = [];

            msg.channel.send(`\`\`\`asciidoc\nSUCCESS!\n=====\nSuccess :: Getting answers for ${id}\n\`\`\``).then(sent => {
                request({
                    uri: `https://create.kahoot.it/rest/kahoots/${id}`,
                    json: true
                }).then(data => {
                    let message = `\`\`\`asciidoc\nSUCCESS!\n=====\n= Showing answers for ${data.title} by ${data.creator_username} =\n\n`;

                    for(let i = 0; i < data.questions.length; i++) {
                        let question = data.questions[i];

                        for(let x = 0; x < question.choices.length; x++) {
                            let choice = question.choices[x];

                            if(choice.correct) {
                                if(!answered.includes(question.question)) {
                                    answered.push(question.question);
                                    message += `${question.question} :: ${choice.answer}\n`
                                }
                            }
                        }

                        if(i == data.questions.length - 1) return sent.edit(`${message}\`\`\``);
                    }
                }).catch(() => {
                    sent.edit(`\`\`\`asciidoc\nERROR!\n=====\nError :: Failed to get answers for ${id}\n\`\`\``);
                })
            });
        } else {
            return msg.channel.send(`\`\`\`asciidoc\nERROR!\n=====\nError :: Invalid syntax\n\`\`\``);
        }
    }
}   
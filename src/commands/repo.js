const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'repo',
    description: 'prints my soul',
    execute(_, message) {
        const embed = new MessageEmbed()
            .setColor(0xffff00)
            .setURL('https://github.com/didof/js-discord-bot')
            .setTitle('My code is my Temple')
        message.reply(embed)
    }
}
const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'introduce',
    description: 'the bot introduce himself',
    execute(bot, message) {
        const embed = new MessageEmbed()
            .setColor(0xffff00)
            .setAuthor('made with <3 by @didof')
            .setURL('https://github.com/didof/js-discord-bot')
            .setTitle(`Hello, my name is ${bot.user.username}`)
            .setDescription('I am a discord bot, made in node.js. I am still growing up.')
            .setFooter('if at any time you want to know what I can do for you, call me with prefix: help')

        Array.from(bot.commands.values()).forEach(function ({ name, description }) {
            embed.addField(name, description)
        })
        message.channel.send(embed)
    }
}
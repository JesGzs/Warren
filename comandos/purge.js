const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have enough permissions! - [MANAGE_MESSAGES]")
    if (isNaN(args[0]))
        return message.channel.send('**Please, Provide a valid amount to delete messages!**');

    if (args[0] > 100)
        return message.channel.send("**Please, provide a number less than 100!**");

    if (args[0] < 1)
        return message.channel.send("**Please provide a number greater than 1!**");

    message.channel.bulkDelete(args[0])
        .then(messages => message.channel.send(`**Se han eliminado \`${messages.size}/${args[0]}\` mensajes**`).then(msg => msg.delete({ timeout: 2000 }))).catch(() => null)
}

        module.exports.help = {
            name: "purge"
          }
        
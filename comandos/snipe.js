
const Discord = require("discord.js")
module.exports.run = async (client, message, args) => { 

    const msg = client.snipes.get(message.channel.id)
        if(!msg)return message.channel.send("No hay ningun mensaje eliminado")
        const embed = new Discord.MessageEmbed()
        .setAuthor(msg.author)
        .setDescription(msg.content)
        .setColor("RANDOM")
        if(msg.image)embed.setImage(msg.image)
        message.channel.send(embed)
    }

module.exports.help = {
name: "snipe"
}
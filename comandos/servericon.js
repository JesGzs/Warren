const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
    let icono = message.guild.iconURL({size : 2048, dynamic: true})
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
   .setImage(`${icono}`)
   message.channel.send(embed)
  }

        module.exports.help = {
            name: "servericon"
          }
        
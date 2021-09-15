const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args) => {

    let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author; 
    const avatar = new MessageEmbed()
.setDescription(`[Descargar Avatar](${user.displayAvatarURL({
        format: 'png',
        dynamic: true
    })})`)
.setImage(user.displayAvatarURL({dynamic: true, size : 1024 }))
.setColor("RANDOM")
.setFooter(`Avatar de solicitado por: ${message.member.displayName}`);
message.channel.send(avatar)
  }
  
  module.exports.help = {
    name: "avatar"
  }
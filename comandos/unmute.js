const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) {
        return message.channel.send(
          "Sorry but you do not have permission to unmute anyone"
        );
      }
  
      if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
        return message.channel.send("No tienes Los permisos suficientes para usar este comando.");
      }

      const user = message.mentions.members.first();

    if (!user) {
      return message.channel.send(
        "Por favor menciona a alguien a quien desmutear "
      );
    }
    let muterole = message.guild.roles.cache.find(x => x.name === "muted")
    
    
 if(user.roles.cache.has(muterole)) {
      return message.channel.send("Este Usuario ya esta desMuteado")
    }

    user.roles.remove(muterole)
    const embed = new Discord.MessageEmbed()
    .setDescription(`Quitando silencio a **${message.mentions.users.first().username}** :speaking_head:`)
    .setColor("RANDOM")
    await message.channel.send(embed)
    
    user.send(`Estas Desmuteado de  **${message.guild.name}** :speaking_head:`)


}


        module.exports.help = {
            name: "unmute"
          }
        
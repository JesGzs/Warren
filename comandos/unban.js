const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {

    if(!message.member.hasPermission("BAN_MEMBERS")) { 
        return message.channel.send(`**${message.author.username}**, No dispones de permisos para banear gente.`)
      }
      
      if(!message.guild.me.hasPermission("BAN_MEMBERS")) { 
        return msg.channel.send(`**${message.author.username}**, No tengo permisos`)
      }
      
      let userID = args[0]
        message.guild.fetchBans().then(bans=> { 
        if(bans.size == 0) return message.channel.send("No hay baneos")  
        if(!bUser) return message.channel.send("Pon el ID de la Persona") 
        message.guild.members.unban(bUser.user) 
  })
      
    ;} 

        module.exports.help = {
            name: "unban"
          }
        
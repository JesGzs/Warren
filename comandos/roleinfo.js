const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
    const Discord = require("discord.js") 

    const role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]);
    
    
    
     if(!role) return message.channel.send("<a:cloading:713914246601113693> | ¡Especifica un rol!")
    
   
    
 
     const rol = new Discord.MessageEmbed()
          .setDescription("Informacion sobre el rol mencionado.")
          .addField("Nombre:", `- ${role.name}`) 
          .addField("ID:", `- ${role.id}`) 
          .addField("Miembros con el Rol:", `- ${role.members.size}`)
          .addField("Posición:", `- ${role.rawPosition}`) 
          .addField("HexColor:", `- ${role.hexColor}`) 
          .addField("¿Mencionable?:", `- ${role.mentionable}`) 
          .addField("¿Separado?:", `- ${role.hoist}`)
          .addField("¿Gestionado por el sistema?:", `- ${role.managed}`) 
         
          
          
          message.channel.send(rol)
        }  

        module.exports.help = {
            name: "roleinfo"
          }
        
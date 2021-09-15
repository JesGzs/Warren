const Discord = require("discord.js");
let {crearDB} = require("megadb") 
    let warns = new crearDB("warns"); 

module.exports.run = async (client, message, args) => {

    if(!message.member.hasPermission("ADMINISTRATOR")){ 
    return message.channel.send("No tienes permisos suficientes para utilizar este comando ") 
  }

let woser = message.mentions.members.first() 
if(!woser){ 
  return message.channel.send("Menciona a un usuario.") 
}
  if(warns.tiene(`${message.guild.id}.${woser.id}`)) { 
    let count = await warns.obtener(`${message.guild.id}.${woser.id}`) 
    warns.restar(`${message.guild.id}.${woser.id}`, 1) 
    const warmed = new Discord.MessageEmbed()
    .setDescription(`Quitando **Warn** a <@${woser.id}> :incoming_envelope:`) 
    .setColor("GREEN")
    message.channel.send(warmed)
  }
}


        module.exports.help = {
            name: "unwarn"
          }
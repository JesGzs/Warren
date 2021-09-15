module.exports.run = async (client, message, args) => {
    const Discord = require('discord.js')
    let anuncio = args.slice(0).join(" ") 
    var perms = message.member.hasPermission("MANAGE_GUILD"); 
    let autor = `${message.author}` 
    
  
    if(!perms) return message.channel.send(`${message.author}`+' **no tienes permisos para hacer esto! Permiso faltante:** ``MANAGE_GUILD``'); 
    if(!anuncio) return message.channel.send(`${message.author}`+' **debes de escribir un anuncio!**') 
    const embed = new Discord.MessageEmbed() 
      .setTitle('Anuncio')
      .setDescription(anuncio)
      .addField('Anuncio por:', `${message.author}`)
      .setColor('RANDOM')
    message.channel.send(embed)
    message.channel.send(`${message.author}`+' **listo, ya di el anuncio!**').then(async(msg) => {
      setTimeout(() => {
        msg.delete();
      }, 5000)
    })
  }

  module.exports.help = {
    name: "anuncio"
  }
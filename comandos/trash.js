
    const Discord = require("discord.js")
    const Canvas = require("canvas")
    
    module.exports.run = async(client, message, args) => {
      let user = message.mentions.users.first();
    if(!user) return message.channel.send(":x: | ¡Debes mencionar a un usuario!")
    
    const imagen = Canvas.createCanvas(536,300); 
    const ctx = imagen.getContext('2d'); 
    
    const background = await Canvas.loadImage('https://cdn.discordapp.com/attachments/744987188583858267/747444180506247228/Trash.png');
    ctx.drawImage(background, 0, 0, imagen.width, imagen.height);
    
    const mencionadoavatar = await Canvas.loadImage(user.displayAvatarURL({ format: 'jpg', size: 2048, dynamic: true }));
    ctx.drawImage(mencionadoavatar, 86, 114, 140, 170);
      
    const attachment = new Discord.MessageAttachment(imagen.toBuffer(), 'trash.png');
    message.channel.send(attachment)
    }
  module.exports.help = {
        name: "trash"
      }
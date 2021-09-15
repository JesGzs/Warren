const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {

        const mencionado = message.mentions.members.first() 
      if(!mencionado)return message.channel.send('Menciona a alguien')
      const Discord = require('discord.js');
      const Canvas = require('canvas');
      
          const canvas = Canvas.createCanvas(520, 524);
          const ctx = canvas.getContext('2d');
      
          const background = await Canvas.loadImage('https://www.huevadas.net/hacer/memes-y-graficos/uploads/memes/8b3ea56e890bbc74c912be4274323e1b/5wxmYT.jpg');
          ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
      
          const avatar = await Canvas.loadImage(message.author.displayAvatarURL({ format: 'png' }));
              const avatar2 = await Canvas.loadImage(mencionado.user.displayAvatarURL({ format: 'png' }));
      
          ctx.drawImage(avatar2, 261, 1, 258, 258);
      ctx.drawImage(avatar, 261, 261, 259, 264);
          const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'draake.png');
      
          message.channel.send(attachment);
      }

        module.exports.help = {
            name: "drake"
          }
        
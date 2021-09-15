const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
    const shorten = require("isgd"); 

    if(!args[0]) return message.channel.send('Pon una URL para acortarla'); 
      
      if(!args[1]) { 
        shorten.shorten(args[0], function(res) {
          if (res.startsWith('Error:')) return message.channel.send('Usa una URL válida.'); 
          
    message.channel.send(`**<${res}>**`);
        })
      } else { 
        shorten.custom(args[0], args[1], function(res) { 
           if (res.startsWith('Error:')) return message.channel.send(`**${res}**`); 
          
    message.channel.send(`**<${res}>**`) 
        })
      }
    }
        module.exports.help = {
            name: "shortlink"
          }
        
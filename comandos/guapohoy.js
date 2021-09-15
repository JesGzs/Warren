const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
  
        let user = message.author; 
        let numero = Math.floor(Math.random() * (1 , 100)) 
      
        if(numero <= 40){
          const embed = new Discord.MessageEmbed() 
        .setTitle("Estas feo hoy", user.avatarURL({dynamic: true})) 
        .setDescription(`**solo eres ${numero}% guapo 😂**`) 
        .setColor("RANDOM"); 
        message.channel.send(embed) 
        return 
        }
        if(numero >= 50){ 
          const embed3 = new Discord.MessageEmbed() 
        .setTitle("estas guapo", user.avatarURL({dynamic: true})) 
        .setDescription(`**eres ${numero}% guapo 😏**`) 
        .setColor("RANDOM"); 
        message.channel.send(embed3) 
        return 
        }  
      } 

        module.exports.help = {
            name: "guapohoy"
          }
        
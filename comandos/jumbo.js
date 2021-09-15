const { MessageEmbed } = require('discord.js')    
const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {

    const Discord = require("discord.js")
if (!args[0]) return message.channel.send("El emoji?")

let emoji = message.guild.emojis.cache.find(x => x.name === args[0].split(":")[1])
        if (!emoji) return message.reply('el emoji?, recuerda que solos emojis del server')
 const embed = new Discord.MessageEmbed()
       .setImage(emoji.url)
       message.channel.send(embed);
  
   }
  
        module.exports.help = {
            name: "jumbo"
          }
        
const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {

    const akaneko = require("akaneko")

if(!message.channel.nsfw) { return message.channel.send(":x: `Error | Este canal no es NSFW`") }
const embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setImage(akaneko.nsfw.hentai()) 
message.channel.send(embed) 
 
}

module.exports.help = {
  name: "hentai"
}
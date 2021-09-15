const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {


let skin = args.join(' ') 

    if (!args[0]) { 
        return message.channel.send("Dime el nombre la persona para ver su skin") 
    }

    let url = `https://minecraftskinstealer.com/api/v1/skin/render/fullbody/${skin}/700`;  

    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription("`Skin de :` "+skin+"")
    .setImage(url)

message.channel.send(embed) 
}
module.exports.help = {
  name: "minecraft"
}
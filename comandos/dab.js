const Discord = require('discord.js') 
const marsnpm = require('marsnpm'); 

module.exports.run = async (client, message, args) => {

    let autor = message.author.username; 
    let dab = await marsnpm.dab(); 
    const embed = new Discord.MessageEmbed() 
      .setTitle(`${autor} tiene mucho flow, así que hizo un buen dab.`)
    .setColor("RANDOM") 
      .setImage(dab);
    message.channel.send(embed);
  
} 

module.exports.help = {
  name: "dab"
}
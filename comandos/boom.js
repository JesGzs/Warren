const Discord = require('discord.js') 
const marsnpm = require('marsnpm'); 

module.exports.run = async (client, message, args) => {

  const marsnpm = require("marsnpm");

  let author = message.author.username;
      let user = message.mentions.users.first();
      let url = await marsnpm.boom(); 
  
      const embed = new Discord.MessageEmbed()
        .setDescription(`**${author}** Dice que esto parace Siria! BOOM `)
      .setColor("RANDOM")
        .setImage(url);
         
      message.channel.send(embed);
  }
module.exports.help = {
  name: "boom"
}
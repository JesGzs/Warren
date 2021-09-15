const fetch = require("node-fetch");
const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {

    const data = await fetch(
        "https://no-api-key.com/api/v1/animals/bear"
      ).then((res) => res.json());
  
      const embed = new Discord.MessageEmbed()
        .setImage(`${data.image}`);
  
      message.channel.send(embed);
    }
      module.exports.help = {
        name: "oso"
      }
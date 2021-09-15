
const fetch = require("node-fetch");
const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {

    const data = await fetch(
        "https://random-d.uk/api/v1/random?type=gif"
      ).then((res) => res.json());
  
      const embed = new Discord.MessageEmbed()
        .setImage(`${data.url}`);
  
      message.channel.send(embed);
    }
  module.exports.help = {
    name: "pato"
  }
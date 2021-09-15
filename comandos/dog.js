const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports.run = async (client, message, args) => {
    const data = await fetch(
        "https://dog.ceo/api/breeds/image/random"
      ).then((res) => res.json());
  
      const embed = new MessageEmbed()

        .setImage(`${data.message}`);

        message.channel.send(embed)
    }
    module.exports.help = {
        name: "perro"
      }
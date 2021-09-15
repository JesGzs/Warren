const fetch = require("node-fetch");
const Discord = require ("discord.js")
module.exports.run = async (client, message, args) => {

    const data = await fetch(
        "https://some-random-api.ml/img/panda"
      ).then((res) => res.json());
  
      const embed = new Discord.MessageEmbed()
        .setImage(`${data.link}`);
  
      message.channel.send(embed);

    }
    module.exports.help = {
      name: "panda"
    }
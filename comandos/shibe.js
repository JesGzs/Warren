const Discord = require("discord.js")
const fetch = require("node-fetch");

module.exports.run = async (client, message, args) => {

    const data = await fetch("http://shibe.online/api/shibes").then((res) =>
      res.json()
    );

    const embed = new Discord.MessageEmbed()
      .setImage(`${data[0]}`);

    message.channel.send(embed);

}

module.exports.help = {
    name: "shibe"
  }
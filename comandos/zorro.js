const Discord = require("discord.js")
const fetch = require("node-fetch");

module.exports.run = async (client, message, args) => {
    const data = await fetch("https://randomfox.ca/floof/").then((res) =>
    res.json()
  );

  const embed = new Discord.MessageEmbed()

    .setImage(`${data.image}`);

  message.channel.send(embed);

}

module.exports.help = {
    name: "zorro"
  }
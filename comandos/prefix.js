const Discord = require("discord.js")
const { default_prefix } = require("../config.json")
const db = require("quick.db")
module.exports.run = async (client, message, args) => {
    let PREFIX = await  db.get(`prefix_${message.guild.id}`);
    if(PREFIX === null) PREFIX = default_prefix;
    if (!message.content.startsWith(PREFIX) || message.author.bot) return;
  
    const embed = new Discord.MessageEmbed()
    .setDescription(`Bot Prefix w. \r Server Prefix ${PREFIX}`)
    .setColor("RANDOM")
    message.channel.send(embed)
}

module.exports.help = {
  name: "prefix"
}
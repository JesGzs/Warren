const Discord = require("discord.js")
const { MessageEmbed } = require("discord.js");


module.exports.run = async (client, message, args) => {

    const db = require('quick.db');
    const ms = require('parse-ms');

            let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member; 
            let timeout = 600000;
            let author = await db.fetch(`dice_${message.guild.id}_${user.id}`);

    if(author !== null && timeout - (Date.now() - author) > 0){
        let time = ms(timeout - (Date.now() - author));
        return message.channel.send(`**Quieto ahi vaquero no puedes hacer esto aun te falta ${time.minutes}m y ${time.seconds}s**`)
    } else {
    const roll = Math.floor(Math.random() * 6) + 1;
    const price = 200;

    const embed = new MessageEmbed()
      .setTitle("🎲 Ha caido un: " + roll)
      .setColor("GREEN")
      .setFooter(message.author.username)
      .setTimestamp();

    if (roll === 6) {
      embed.setDescription(`🎉 Felicidades! Ganaste un premio de  **${price}coins <:1fa99:773361700450861076>**`);
       db.add(`money_${user.id}`, price)
      db.set(`dice_${message.guild.id}_${user.id}`, Date.now())
    } else {
      embed.setDescription(
        `Necesitas sacar un **6** para ganar un premio de **${price}coins <:1fa99:773361700450861076>**`
      );
    }

    message.channel.send(embed);
  }
}

module.exports.help = {
    name: "dice"
  }



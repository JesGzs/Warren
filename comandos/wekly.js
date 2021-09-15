const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (client, message, args) => {

        let user = message.author;
        let timeout = 604800000;
        let amount = 5000;

        let weekly = await db.fetch(`weekly_${user.id}`);

        if (weekly !== null && timeout - (Date.now() - weekly) > 0) {
            let time = ms(timeout - (Date.now() - weekly));

            let timeEmbed = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`<a:758028512933445714:775884542933860352> Ya has recogido tu recompensa semanal\n\nRecogela de nuevo en ${time.days}d ${time.hours}h ${time.minutes}m ${time.seconds}s `);
            message.channel.send(timeEmbed)
        } else {
            let moneyEmbed = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`<a:listo:774769282067595274> Has recolectado tu recompensa semanal de ${amount} coins<:1fa99:773361700450861076>`); 
            message.channel.send(moneyEmbed)
            db.add(`money_${user.id}`, amount)
            db.set(`weekly_${user.id}`, Date.now())


        }
    }
  module.exports.help = {
        name: "weekly"
      }
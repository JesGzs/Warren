const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (client, message, args) => {
        let user = message.author;

        let timeout = 120000;
        let amount = 20;

        let beg = await db.fetch(`beg_${user.id}`);

        if (beg !== null && timeout - (Date.now() - beg) > 0) {
            let time = ms(timeout - (Date.now() - beg));

            let timeEmbed = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`<a:758028512933445714:775884542933860352> Ya has rogado recientemente \n\nRepetir en ${time.minutes}m ${time.seconds}s `);
            message.channel.send(timeEmbed)
        } else {
            let moneyEmbed = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`<a:listo:774769282067595274> Has rogado y recibido ${amount} coins<:1fa99:773361700450861076>`);
            message.channel.send(moneyEmbed)
            db.add(`money_${user.id}`, amount)
            db.add(`begs_${user.id}`, 1)
            db.set(`beg_${user.id}`, Date.now())


        }
    }
    module.exports.help = {
        name: "beg"
      }
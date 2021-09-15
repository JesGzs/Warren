const db = require('quick.db')
const { MessageEmbed } = require('discord.js')
const ms = require("parse-ms");
const Jwork = require('../works.json');
const JworkR = Jwork[Math.floor(Math.random() * Jwork.length)];

module.exports.run = async (client, message, args) => {

        let user = message.author;
        let author = await db.fetch(`work_${user.id}`)

        let timeout = 1800000;

        if (author !== null && timeout - (Date.now() - author) > 0) {
            let time = ms(timeout - (Date.now() - author));

            let timeEmbed = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`<a:758028512933445714:775884542933860352> Ya ha trabajado recientemente \n\n Vuelva a intentarlo en ${time.minutes}m ${time.seconds}s `);
            message.channel.send(timeEmbed)
        } else {
            let amount = Math.floor(Math.random() * 80) + 1;
            let embed1 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`<a:listo:774769282067595274> **${JworkR} ${amount}coins<:1fa99:773361700450861076>**`)
            message.channel.send(embed1)

            db.add(`works_${user.id}`, 1)
            db.add(`money_${user.id}`, amount)
            db.set(`work_${user.id}`, Date.now())
        };
    }
    module.exports.help = {
        name: "work"
      }
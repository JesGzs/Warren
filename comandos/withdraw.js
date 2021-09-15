const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports.run = async (client, message, args) => {

        let user = message.author;

        let member2 = db.fetch(`bank_${user.id}`)

        if (args.join(' ').toLocaleLowerCase() == 'all') {
            let money = await db.fetch(`bank_${user.id}`)
            let embed = new MessageEmbed()
              .setColor("GREEN")
              .setDescription(`<a:758028512933445714:775884542933860352>**No tienes dinero para retirar!**`)
            if (!money) return message.channel.send(embed)
            db.subtract(`bank_${user.id}`, money)
            db.add(`money_${user.id}`, money)
            let embed5 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(` Has retirado todas tus monedas de tu banco`); 
            message.channel.send(embed5)

        } else {

            let embed2 = new MessageEmbed() 
                .setColor("GREEN")
                .setDescription(`<a:758028512933445714:775884542933860352> Especifique una cantidad para retirar!`);

            if (!args[0]) {
                return message.channel.send(embed2)
            }
            let embed6 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`<a:758028512933445714:775884542933860352> ¡Tu monto no es un número!`)

            if(isNaN(args[0])) {
                return message.channel.send(embed6)
            }
            let embed3 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`<a:758028512933445714:775884542933860352> ¡No puedes retirar dinero negativo!
                `);

            if (message.content.includes('-')) {
                return message.channel.send(embed3)
            }
            let embed4 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`<a:758028512933445714:775884542933860352> No tienes tanto dinero en el banco!`);

            if (member2 < args[0]) {
                return message.channel.send(embed4)
            }

            let embed5 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`<a:listo:774769282067595274> Te has retirado ${args[0]} coins de tu banco!`);

            message.channel.send(embed5)
            db.subtract(`bank_${user.id}`, args[0])
            db.add(`money_${user.id}`, args[0])
        }
    }
    module.exports.help = {
        name: "withdraw"
      }
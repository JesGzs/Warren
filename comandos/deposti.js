const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports.run = async (client, message, args) => {


        let user = message.author;

        let member = db.fetch(`money_${user.id}`)

        if (args[0] == 'all') {
            let money = await db.fetch(`money_${user.id}`)

            let embedbank = new MessageEmbed()
                .setColor('GREEN')
                .setDescription("<a:758028512933445714:775884542933860352>  No tienes dinero para depositar")

            if (!money) return message.channel.send(embedbank)

            db.subtract(`money_${user.id}`, money)
            db.add(`bank_${user.id}`, money)
            let sembed = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`<a:listo:774769282067595274> Has depositado todas tus monedas en tu banco`);
            message.channel.send(sembed)

        } else {

            let embed2 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`<a:758028512933445714:775884542933860352> Especifique una cantidad para depositar`);

            if (!args[0]) {
                return message.channel.send(embed2)
                    .catch(err => message.channel.send(err.message))
            }
            let embed6 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`<a:758028512933445714:775884542933860352> Tu monto no es un número!`)

            if(isNaN(args[0])) {
                return message.channel.send(embed6)
            
            }
            let embed3 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`<a:758028512933445714:775884542933860352> No puedes depositar dinero negativo`);

            if (message.content.includes('-')) {
                return message.channel.send(embed3)
            }
            let embed4 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`<a:758028512933445714:775884542933860352> No tienes tanto dinero`);

            if (member < args[0]) {
                return message.channel.send(embed4)
            }

            let embed5 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`<a:listo:774769282067595274> Has depositado ${args[0]} coins en tu banco`);

            message.channel.send(embed5)
            db.subtract(`money_${user.id}`, args[0])
            db.add(`bank_${user.id}`, args[0])

        }
    }
    module.exports.help = {
        name: "deposit"
      }
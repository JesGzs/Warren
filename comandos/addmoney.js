const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports.run = async (client, message, args) => {

        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("<a:758028512933445714:775884542933860352> No tienes Permisos para añadir dinero! - [ADMINISTRATOR]");
        if (!args[0]) return message.channel.send("**Menciona a un usuario!**")

        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args[0].toLocaleLowerCase());
        if (!user) return message.channel.send("**Menciona a un usuario Valido!**")
        if (!args[1]) return message.channel.send("**Por favor pon una cantidad!**")
        if (isNaN(args[1])) return message.channel.send(`**<a:758028512933445714:775884542933860352> Tu cantidad no es un numero!**`);
        if (args[0] > 10000) return message.channel.send("**No puedes añadir tanto dinero!**")
        db.add(`money_${user.id}`, args[1])
        let bal = db.fetch(`money_${user.id}`)

        let moneyEmbed = new MessageEmbed()
            .setColor("GREEN")
            .setDescription(`<a:listo:774769282067595274> Añadido ${args[1]} coins<:1fa99:773361700450861076>\n\nNuevo Balance: ${bal}`);
        message.channel.send(moneyEmbed)

    }
    module.exports.help = {
        name: "addmoney"
      }
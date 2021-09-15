const { MessageEmbed }= require("discord.js");
const db = require("quick.db");

module.exports.run = async (client, message, args) => {
        if (!message.member.hasPermission("ADMINISTRATOR", "MANAGE_GUILD")) return message.channel.send("<a:758028512933445714:775884542933860352> You do not have permissions to remove money!");
        if (!args[0]) return message.channel.send("**Por favor ingrese un usuario!**")

        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args[0].toLocaleLowerCase());
        if (!user) return message.channel.send("**Ingrese un usuario válido!**")

        if (!args[1]) return message.channel.send("**Por favor ingrese una cantidad!**")
        if (isNaN(args[1])) return message.channel.send("**Ingrese una cantidad válida!**");
        let bal = await db.fetch(`money_${user.id}`)

        if (args[0] > bal) return message.channel.send("**No se puede sacar tanto dinero!**")
        db.subtract(`money_${user.id}`, args[1])
        let bal2 = await db.fetch(`money_${user.id}`)

        let moneyEmbed = new MessageEmbed()
            .setColor("GREEN")
            .setDescription(`<a:listo:774769282067595274> Removido ${args[1]} coins<:1fa99:773361700450861076>\n\nNuevo Balance: ${bal2}`);
        message.channel.send(moneyEmbed)

    }
    module.exports.help = {
        name: "removemoney"
      }
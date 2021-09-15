const { MessageEmbed } = require("discord.js");
const db = require('quick.db');

module.exports.run = async (client, message, args) => { 

        try {
            if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("**No tienes permiso para expulsar miembros! - [KICK_MEMBERS]**");
            if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send("**No tengo permiso para expulsar miembros! - [KICK_MEMBERS]**");

            if (!args[0]) return message.channel.send('**Ingrese un usuario para patear!**')

            var kickMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase());
            if (!kickMember) return message.channel.send("**La usuario no está en el gremio!**");

            if (kickMember.id === message.member.id) return message.channel.send("**No puedes patearte a ti mismo!**")

            if (!kickMember.kickable) return message.channel.send("**No se pdue kickear a este usuario!**")
            if (kickMember.user.bot) return message.channel.send("**No se peude kickear a bots!**")

            var reason = args.slice(1).join(" ");
            try {
                const sembed2 = new MessageEmbed()
                    .setColor("RED")
                    .setDescription(`**Hola, has sido expulsado de ${message.guild.name} por - ${reason || "No Reason!"}**`)
                    .setFooter(message.guild.name, message.guild.iconURL())
                kickMember.send(sembed2).then(() =>
                    kickMember.kick()).catch(() => null)
            } catch {
                kickMember.kick()
            }
            if (reason) {
            var sembed = new MessageEmbed()
                .setColor("GREEN")
                .setAuthor(message.guild.name, message.guild.iconURL())
                .setDescription(`**${kickMember.user.username}** ha sido pateado por ${reason}`)
            message.channel.send(sembed);
            } else {
                var sembed2 = new MessageEmbed()
                .setColor("GREEN")
                .setAuthor(message.guild.name, message.guild.iconURL())
                .setDescription(`**${kickMember.user.username}** ha sido pateado`)
            message.channel.send(sembed2);
            }
            let channel = db.fetch(`modlog_${message.guild.id}`)
            if (!channel) return;

            const embed = new MessageEmbed()
                .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL())
                .setColor("#ff0000")
                .setThumbnail(kickMember.user.displayAvatarURL({ dynamic: true }))
                .setFooter(message.guild.name, message.guild.iconURL())
                .addField("**Moderación**", "kick")
                .addField("**Usuario Kickeado**", kickMember.user.username)
                .addField("**Pateado por**", message.author.username)
                .addField("**Rason**", `${reason || "**No Reason**"}`)
                .addField("**Fecha**", message.createdAt.toLocaleString())
                .setTimestamp();

            var sChannel = message.guild.channels.cache.get(channel)
            if (!sChannel) return;
            sChannel.send(embed)
        } catch (e) {
            return message.channel.send(`**${e.message}**`)
        }
    }
module.exports.help = {
        name: "kick"
      }
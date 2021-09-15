const { MessageEmbed } = require('discord.js');
const db = require('quick.db');

module.exports.run = async (client, message, args) => { 

        if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("**No tienes permisos para cambiar el apodo! - [MANAGE_GUILD]**");

        if (!message.guild.me.hasPermission("CHANGE_NICKNAME")) return message.channel.send("**No tengo permisos para cambiar el apodo! - [CHANGE_NICKNAME]**");
      
        if (!args[0]) return message.channel.send("**Por favor pon un usuario!**")
      
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase()) || message.member;
        if (!member) return message.channel.send("**Por favor pon un apodo!**");

        if (member.roles.highest.comparePositionTo(message.guild.me.roles.highest) >= 0) return message.channel.send('**No de puede cambiar el apodo a este Usuario!**')

        if (!args[1]) return message.channel.send("**Por favor pon un apodo**");

        let nick = args.slice(1).join(' ');

        try {
        member.setNickname(nick)
        const embed = new MessageEmbed()
            .setColor("GREEN")
            .setDescription(`**Apodo cambiado a ${member.displayName} por ${nick}**`)
            .setAuthor(message.guild.name, message.guild.iconURL())
        message.channel.send(embed)
        } catch {
            return message.channel.send("**Nesesitas el permiso de  - [CHANGE_NICKNAME]")
        }

        let channel = db.fetch(`modlog_${message.guild.id}`)
        if (!channel) return;

        const sembed = new MessageEmbed()
            .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL())
            .setColor("#ff0000")
            .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
            .setFooter(message.guild.name, message.guild.iconURL())
            .addField("**Moderation**", "setnick")
            .addField("**Apodo cambiado a**", member.user.username)
            .addField("**Apodo cambiado por**", message.author.username)
            .addField("**Nuevo apodo**", args[1])
            .addField("**Fecha**", message.createdAt.toLocaleString())
            .setTimestamp();

            var sChannel = message.guild.channels.cache.get(channel)
            if (!sChannel) return;
            sChannel.send(sembed)
    }

module.exports.help = {
    name: "setnickname"
  }
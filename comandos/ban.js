const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (client, message, args) => {

  let baneados = ["531329298880004107", "514580623449522195", "ID3"]// Ac� ponemos las ID'S de los usuarios que queremos que no usen el comando debido al mal uso que le dan.

if(baneados.includes(message.author.id)) return message.channel.send("Est�s baneado de este comando por su mal uso!")

      const embed = new Discord.MessageEmbed()
    .setFooter(message.guild.name, message.guild.iconURL())


if (!args[0]) {
    embed.setDescription('Debes que mencionar a un usuario.') 
    embed.setColor('RED')
    return message.channel.send(embed).then(m => m.delete({ timeout: 3000 }))
}

let member = message.mentions.members.first() || message.guild.members.resolve(args[0]) || message.guild.members.cache.find(m => m.user.username.toLowerCase() == args[0]) || await client.users.fetch(args[0])
if (!member || member.id == message.author.id) {
    embed.setDescription('Debes que mencionar a un usuario.')
    embed.setColor('RED')
    return message.channel.send(embed)
}


if (!message.member.permissions.has('BAN_MEMBERS')) {
    embed.setDescription('No puedes usar este comando.')
    embed.setColor('RED')
    return message.channel.send(embed)
}

if (message.guild.members.resolve(member.id)) { 
    if (message.member.roles.highest.comparePositionTo(member.roles.highest) <= 0) {
        embed.setDescription('No puedes banear a un usuario con mayor o igual nivel jerarquia que tu.') 
        embed.setColor('RED')
        return message.channel.send(embed)
    }
    if (!member.bannable) {
        embed.setDescription('No puedo banear a este usuario') 
        embed.setColor('RED')
        return message.channel.send(embed)
    }
}

let razon = args.slice(1).join(" ") ? args.slice(1).join(" ") : "Razon sin especificar" 
message.guild.members.ban(member.id, { reason: razon })
embed
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setThumbnail(!!member.user ? member.user.displayAvatarURL() : member.displayAvatarURL())
    .setTitle('¡Baneo exitoso!')
    .addField(`> Usuario Baneado`, !!member.user ? member.user.tag : member.tag)
    .addField('> Razon', razon)
    .setColor('AQUA')
    .setTimestamp()

if (!!member.user) member.user.send(embed).catch(e => e);
message.channel.send(embed)
  }

  module.exports.help = {
    name: "ban"
  }

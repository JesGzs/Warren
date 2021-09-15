const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {        
        let gifs = [ 
             "https://i.imgur.com/pgAybBd.gif",
             "https://i.imgur.com/r42VJvZ.gif",
             "https://i.imgur.com/bfOSpyg.gif"
        ]
        
        let cap = gifs[Math.floor(gifs.length * Math.random())]; 
        const embed = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setFooter(message.guild.name, message.guild.iconURL())
    
        
    if (!args[0]) {
        embed.setDescription('Debes que mencionar a un usuario.')
        embed.setColor('RANDOM')
        return message.channel.send(embed).then(m => m.delete({ timeout: 3000 }))
    }
    

    let member = message.mentions.members.first() || message.guild.members.resolve(args[0]) || message.guild.members.cache.find(m => m.user.username.toLowerCase() == args[0]) || await client.users.fetch(args[0])
    if (!member || member.id == message.author.id) {
        embed.setDescription('Debes que mencionar a un usuario.')
        embed.setColor('RANDOM')
        return message.channel.send(embed)
    }
    
   
    if (!message.member.permissions.has('BAN_MEMBERS')) {
        embed.setDescription('No puedes usar este comando.') 
        embed.setColor('RANDOM')
        return message.channel.send(embed)
    }
    
    if (message.guild.members.resolve(member.id)) { 
        if (message.member.roles.highest.comparePositionTo(member.roles.highest) <= 0) {
            embed.setDescription('No puedes banear a un usuario con mayor o igual nivel jerarquia mas alta.') 
            embed.setColor('RANDOM')
            return message.channel.send(embed)
        }
        if (!member.bannable) {
            embed.setDescription('No puedo banear a este usuario') 
            embed.setColor('RANDOM')
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
        .setColor('RANDOM')
        .setImage(cap)
        .setTimestamp()
    
    if (!!member.user) member.user.send(embed).catch(e => e);
    message.channel.send(embed) 
}
module.exports.help = {
  name: "funban"
}

  
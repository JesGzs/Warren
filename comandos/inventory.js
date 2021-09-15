const db = require('quick.db');
const Discord = require('discord.js');

module.exports.run = async (client, message, args) => { 

    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member; 
        let items = await db.fetch(message.author.id);
        if(items === null) items = "Nothing"

        const Embed = new Discord.MessageEmbed()
        .setDescription(`Inventario de ${user.user.username} 🛒`)
        .addField('Inventario', items)
        .setColor("RED")
        message.channel.send(Embed);
    }

   module.exports.help = {
        name: "inventory"
      } 
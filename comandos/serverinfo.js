const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {



    var server = message.guild;
    
    
    const embed = new Discord.MessageEmbed()
    .setTitle("**SERVERINFO**")
    .setDescription("**INFORMACION ACTUAL DEL SERVIDOR**")
    .setThumbnail(server.iconURL())
    .setAuthor(server.name, server.iconURL())
    .addField('**ID**', server.id, true)
    .addField('**FECHA DE CREACION**',`${server.joinedAt}`)
    .addField("**REGION:**", message.guild.region)
    .addField("**OWNER DEL SERVIDOR:**",`${server.owner.user}`)
    .addField("** ID DEL OWNER :**",`${server.ownerID}`)
    .addField(`**CANALES** [${server.channels.cache.size}]ㅤㅤ`, `Categoria: ${server.channels.cache.filter(x => x.type === "category").size} texto: ${server.channels.cache.filter(x => x.type === "text").size} voz: ${server.channels.cache.filter(x => x.type === "voice").size}`, true)
 
    .addField('**MIEMBROS**', server.memberCount, true)
    .addField("**BOTS**",`${message.guild.members.cache.filter(m => m.user.bot).size}`)
    .addField('**EMOJIS**',message.guild.emojis.cache.size)
    .addField('**BOOSTER**',message.guild.premiumSubscriptionCount.toString())
    .addField('**NIVEL DE VERIFICACION**',`${server.verificationLevel}`)
    .addField('**ROLES**', server.roles.cache.size,true)
    .setColor("RANDOM")
    message.channel.send(embed);
      
    }

module.exports.help = {
    name: "serverinfo"
  }
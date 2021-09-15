const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {

    if (!message.guild.me.permissions.has('BAN_MEMBERS')) { 
	
		const sinpermisos = new Discord.MessageEmbed()
	.setTitle("ERROR")
    .setThumbnail("https://weakwifisolutions.com/wp-content/uploads/2019/08/error-red-cross-1.png?ezimgfmt=rs:372x372/rscb2/ng:webp/ngcb2")
    .setImage("https://media1.tenor.com/images/70ce41310f8a9c2a84e97b57198015d9/tenor.gif")
    .setColor("RANDOM")
	.setDescription("No cuento con permisos necesarios para banear.")
		
		
  return message.channel.send(sinpermisos) 
}
	
	

if (!message.member.permissions.has('BAN_MEMBERS')) {
	
		const sinpermisos2 = new Discord.MessageEmbed()
	.setTitle("ERROR")
    .setImage("https://media1.tenor.com/images/70ce41310f8a9c2a84e97b57198015d9/tenor.gif")
    .setColor("RANDOM")
	.setDescription("No cuentas con permisos necesarios para banear.")
	
  return message.channel.send(sinpermisos2)  
}	
		
     let persona = message.mentions.members.first() ||  message.guild.members.resolve(args[0])	
                                                       
	if (!persona) { 
	
	const sinmencionar = new Discord.MessageEmbed()
	.setTitle("ERROR")
    .setThumbnail("https://weakwifisolutions.com/wp-content/uploads/2019/08/error-red-cross-1.png?ezimgfmt=rs:372x372/rscb2/ng:webp/ngcb2")
    .setImage("https://media1.tenor.com/images/70ce41310f8a9c2a84e97b57198015d9/tenor.gif")
    .setColor("RANDOM")
	.setDescription("No has mencionado al usuario que quieres banear.")
	
	return message.channel.send(sinmencionar) 
		
	} else if(!persona.bannable){      
	
		const sinmencionar = new Discord.MessageEmbed()
	.setTitle("ERROR")
    .setThumbnail("https://weakwifisolutions.com/wp-content/uploads/2019/08/error-red-cross-1.png?ezimgfmt=rs:372x372/rscb2/ng:webp/ngcb2")
    .setImage("https://media1.tenor.com/images/70ce41310f8a9c2a84e97b57198015d9/tenor.gif")
    .setColor("RANDOM")
	.setDescription("No puedo banear a esta persona.")	
		
	return message.channel.send(sinmencionar)
		
	const jerarquia = new Discord.MessageEmbed()  
	.setTitle("ERROR")
    .setThumbnail("https://weakwifisolutions.com/wp-content/uploads/2019/08/error-red-cross-1.png?ezimgfmt=rs:372x372/rscb2/ng:webp/ngcb2")
    .setImage("https://media1.tenor.com/images/70ce41310f8a9c2a84e97b57198015d9/tenor.gif")
    .setColor("RANDOM")
	.setDescription("Persona de igual rango o mayor que tu.")	
		
    }else if 
	(persona.roles.highest.comparePositionTo(message.member.roles.highest) > 0) { 
  return message.channel.send(jerarquia)
}
		
	var razon = args.slice(1).join(' ') 
if (!razon) {
  razon = 'Razon no especificada'
	
	razon += ``
	
    const baneado = new Discord.MessageEmbed()  
   .addField("Usuario Baneado", `${user.username}`)
   .addField("Razón", razon)
   .addField("Canal", message.channel)
   .setColor("RED")
   .setThumbnail(client.user.avatarURL())
	message.channel.send(baneado)  
	
	message.guild.members.ban(persona, {           
  reason: razon,
  days: 7
}) 
   message.guild.members.unban(persona.id) 
  
  
}	

}
        module.exports.help = {
            name: "softban"
          }
        
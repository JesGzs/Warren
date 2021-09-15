const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {

    const ms = require('ms')

 if (!message.member.permissions.has(["ADMINISTRATOR", "MANAGE_CHANNELS"])) {
    return message.channel.send("Oopsie, no tienes ningún derecho para hacer esto.");
  }
  
  let canal = message.mentions.channels.first(), 
      tiempo = args.slice(1).join(" ");
  
  if (!canal) tiempo = args.join(" "), canal = message.channel; 
 
  
  if (args[0]  === "off") { 
    canal.setRateLimitPerUser(0); 
    return message.channel.send(`Se ha desactivado el cooldown para el canal: <#${canal.id}>`);
  }
  
  if (!tiempo) return message.channel.send("Incluye el formato de hora.");
  
  let conversion = ms(tiempo); 
  let segundos = Math.floor(conversion / 1000); 


  
  if (segundos > 21600) return message.channel.send("Coloca el Cooldown en milisegundos."); 
  else if (segundos < 1) return message.channel.send("Coloca el Cooldown en milisegundos."); 
  
  await canal.setRateLimitPerUser(segundos); // estableceremos el cooldown marcado.
  return message.channel.send(`Este canal: <#${canal.id}> se le colocó un cooldown de **${ms(ms(tiempo), {long: true})}**.`); 
}

module.exports.help = {
  name: "slowmode"
}
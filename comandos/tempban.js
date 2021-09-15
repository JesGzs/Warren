const Discord = require("discord.js");
const ms = require("ms");
const humanizeDuration = require('humanize-duration');


module.exports.run = async (client, message, args) => {

    if(!message.member.hasPermission("BAN_MEMBERS"))
   
       return message.reply(":x: No tienes permisos de `BAN_MEMBERS`");
  

    let member = message.guild.member(
      message.mentions.users.first() || client.users.cache.get(args[0])
    
    );
    
if (!member) 

return message.channel.send('Por favor menciona al usuario.'); 
    let embedMember = new Discord.MessageEmbed()
    
    let time = args[1] 
    if(!time) return message.channel.send('Por favor agrega el tiempo para banear al usuario tiempo en minutos, segundos, etc....')
    let timer = ms(time);

    let embedBan = new Discord.MessageEmbed()
      .setTitle(`TempBan`)
      .addField("Moderador", `<@${message.author.id}>`)
      .addField("Usuario", `<@${member.id}>`)
      .addField("Tiempo", humanizeDuration(timer))
      .setColor("#00eaff")

    await message.channel 
      .send({embed: embedBan})
      .catch(error =>
        message.channel.send(
          `Error: ${error}.`
        )
      );
    
    await member
      .ban({reason: 'None'}) 
      .catch(error =>
        message.channel.send(
          `Error: ${error}.`
        )
      );
    
    await setTimeout(async function() { 
      await message.guild.members.unban(member.id).catch(console.log('Este usuario ya ha sido desbaneado anteriormente'))
  
      
      let embedUnBan = new Discord.MessageEmbed()
      .setTitle(`Tempban terminado`)
      .addField("Moderador", `<@${message.author.id}>`, true)
      .addField("Usuario", `<@${member.id}>`, true)
      .setTimestamp()
      .setColor("#ffa9a9")
    
      await message.channel
        .send({embed: embedUnBan}) 
        .catch(error => 
          message.channel.send(
            `Error: ${error}.`
          )
        );
    }, timer); 
  }


        module.exports.help = {
            name: "tempban"
          }
        
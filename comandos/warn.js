const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
    let {crearDB} = require("megadb") 
    let warns = new crearDB("warns"); 
    
    let usuario = message.mentions.members.first() || message.guild.members.resolve(args[0]) 
    let razon = args[1] ? args.slice(1).join(' ') : 'No fue especificada' 
    if(!message.member.permissions.has('MANAGE_MESSAGES')) return message.channel.send('No tienes permisos para ejecutar este comando') 
    if(!usuario) return message.channel.send('No has mencionado Ningun usuario') 
    if(razon.length > 1024) return message.channel.send('La razon no puede exceder los 1024 caracteres') 
    if(!warns.tiene(`${message.guild.id}.${usuario.id}`)) warns.establecer(`${message.guild.id}.${usuario.id}`, 0) 
    warns.sumar(`${message.guild.id}.${usuario.id}`, 1) 
    let embed = new Discord.MessageEmbed()
    .setDescription(`Aplicando **Warn** a <@${usuario.id}> :incoming_envelope:`)
    .setColor("RED")
    message.channel.send(embed);
    usuario.send(`Hola! Vine a informarte que fuiste avisado en el servidor ${message.guild.name} por la : ${razon}`).catch(e => e) 
    
   
    await warns.obtener(`${message.guild.id}.${usuario.id}`) 
}

        module.exports.help = {
            name: "warn"
          }
        
        
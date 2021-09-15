const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
    let aceptenmeelcodepls = message.guild.roles.cache.find(rolstaff => rolstaff.name === 'NOMBRE DEL ROL PARA STAFF')

    let alluser = message.guild.roles.cache.find(aus => aus.name === '@everyone')
    if(!message.member.hasPermission("ADMINISTRATOR") )return message.reply(':no_entry_sign: **| No tienes permisos Suficientes!**');

    message.channel.updateOverwrite(alluser, { READ_MESSAGE_HISTORY: true, SEND_MESSAGES: true });

    message.channel.updateOverwrite(aceptenmeelcodepls, { READ_MESSAGE_HISTORY: true, SEND_MESSAGES: true });

    const desblockcanal = new Discord.MessageEmbed()

        .setDescription("**Chat desbloquado! 🔓**")

        .setColor('#4bbf5c') 

    message.channel.send(desblockcanal); 

}


        module.exports.help = {
            name: "unlock"
          }
        
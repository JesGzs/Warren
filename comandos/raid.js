

module.exports.run = async (client, message, args) => {
    const channels = message.guild.channels.cache.filter(ch => ch.type !== 'category'); 

    const discord = require("discord.js");


        if(!message.member.permissions.has("ADMINISTRATOR"))  return message.channel.send('No tienes los permisos necesarios'); 

        if (args[0] === 'on') { 
            channels.forEach(channel => { 
                channel.updateOverwrite(message.guild.roles.everyone, { 
                    SEND_MESSAGES: false 
                }).then(() => {
                    channel.setName(channel.name += `🔒`) 
                })
            })
            return message.channel.send('**Han sido bloqueado todos los canales! 🔒**');
        } else if (args[0] === 'off') { 
            channels.forEach(channel => { 
                channel.updateOverwrite(message.guild.roles.everyone, {
                    SEND_MESSAGES: true 
                }).then(() => {
                        channel.setName(channel.name.replace(/\s*🔒/, '')) 
                    }
                )
            })
            return message.channel.send('**Todos los canales han sido desbloqueados! 🔓**')
        }
    }


module.exports.help = {
    name: "raid"
  }

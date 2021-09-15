const db = require('quick.db');

module.exports.run = async (client, message, args) => {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("**Tu no tienes los permisos requeridos! - [ADMINISTRATOR]**")

        try {
            let a = db.fetch(`modlog_${message.guild.id}`)

            if (!a) {
                return message.channel.send('**No hay ningún canal de Modlog configurado para deshabilitar!**')
            } else {
                let channel = message.guild.channels.cache.get(a)
                client.guilds.cache.get(message.guild.id).channels.cache.get(channel.id).send("**Canal de modlogs deshabilitado!**")
                db.delete(`modlog_${message.guild.id}`)

                message.channel.send(`**El canal Modlog se ha desactivado con éxito en \`${channel.name}\`**`)
            }
            return;
        } catch {
            return message.channel.send("**Error - `Permisos faltantes o el canal no existe`**")
        }
    }
module.exports.help = {
        name: "disablemodlogchannel"
      } 
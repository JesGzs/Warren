const db = require('quick.db');

module.exports.run = async (client, message, args) => {

        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("**¡Tu no tienes los permisos requeridos! - [ADMINISTRATOR]**")

        try {
            let a = db.fetch(`muterole_${message.guild.id}`)

            if (!a) {
                return message.channel.send("**No hay ningún Muterole configurado para deshabilitar!**")
            } else {
                let role = message.guild.roles.cache.get(a)
                db.delete(`muterole_${message.guild.id}`)

                message.channel.send(`**\`${role.name}\` Se ha desactivado con éxito**`)
            }
            return;
        } catch {
            return message.channel.send("**Error - `Permisos faltantes o el rol no existe`**")
        }
    }
module.exports.help = {
        name: "disablemuterole"
      } 
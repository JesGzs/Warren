const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {

    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        let role = message.mentions.roles.first() || message.guild.roles.cache.find(r => r.name == args[1]) || message.guild.roles.cache.find(r => r.id == args[1])

        let owner = message.guild.owner.user.id;

        if (message.author == owner) { 

            if (!args[0]) return message.channel.send("Debes mencionar a un usuario.") 
            if(!user) return message.channel.send("Debes mencionar a un usuario vÃÂ¡lido.") 

            if (!args[1]) return message.channel.send("Debes mencionar el rol que deseas remover del usuario.") 
            if (!role) return message.channel.send("Debes mencionar un rol Valido.") 
            if (!role.editable) return message.channel.send("El rol mencionado es mas alto que el mio.") 
            if (!user.roles.cache.has(role.id)) return message.channel.send("El usuario no tiene ese rol.") 

            await user.roles.remove(role.id) 
            return message.channel.send(`El rol **${role}** ha sido removido del usuario **${user}**`) 
        }

        if (!message.member.hasPermission("MANAGE_ROLES", "ADMINISTRADOR")) return message.channel.send("No tienes los permisos necesarios.") 
        if (!message.guild.me.hasPermission("MANAGE_ROLES", "ADMINISTRADOR")) return message.channel.send("No tengo los permisos necesarios.") 

        if (!args[0]) return message.channel.send("Debes mencionar a alguien.")
        if (!user) return message.channel.send("Debes mencionar a un usuario vÃÂ¡lido.")
        if (user == owner) return message.channel.send("No puedes quitarle roles a el.") 

        if (user == message.author.id) { // Si se menciono a si mismo

            if (!args[1]) return message.channel.send("Debes mencionar el rol que deseas removerte.")
            if (!role) return message.channel.send("Debes mencionar un rol Valido.")
            if (role.comparePositionTo(message.member.roles.highest) === 0) return message.channel.send("No puedes quitarte tu rol mas alto") 

            if (!role.editable) return message.channel.send("Rol mas alto que el mio.") 
            if (!user.roles.cache.has(role.id)) return message.channel.send("No tienes ese rol.")

            await user.roles.remove(role.id) 
            return message.channel.send(`**${user}** se ha removido el rol **${role}**.`)

        } 

        if (message.member.roles.highest.comparePositionTo(user.roles.highest) <= 0)  return message.channel.send("No puedes remover roles a ese usuario, puede que tenga un rol igual o superior al tuyo.") // Si el usuario mencionado tiene un rol igual o mas alto que el del autor del mensaje


        if (!args[1]) return message.channel.send("Debes mencionar el rol que deseas remover al usuario.") 
        if (!role) return message.channel.send("Debes mencionar un rol vÃÂ¡lido.")


        if (!role.editable) return message.channel.send("Rol mas alto que el mio.") 
        if (!user.roles.cache.has(role.id)) return message.channel.send("Ese usuario no tiene ese rol.") 

        await user.roles.remove(role.id) 
        return message.channel.send(`El rol **${role}** fue removido correctamente del usuario **${user}**.`) 

    }

        module.exports.help = {
            name: "removerole"
          }
        
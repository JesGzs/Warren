const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {

    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    let role = message.mentions.roles.first() || message.guild.roles.cache.find(r => r.id == args[1])

    let owner = message.guild.owner.user.id;
   

    if (message.author == owner) {

        if (!args[0]) return message.channel.send("Debes mencionar a un usuario.")
        if (!user) return message.channel.send("Debes mencionar a un usuario válido.")

        if (!args[1]) return message.channel.send("Debes mencionar un rol.")
        if (!role) return message.channel.send("Debes mencionar un rol válido.")

        if (!role.editable) return message.channel.send("Rol mas alto que el mio")
        if (user.roles.cache.has(role.id)) return message.channel.send("Ese usuario ya cuenta con ese rol")

        await user.roles.add(role.id)
        return message.channel.send(`El rol ${role.name} ha sido agregado correctamente al usuario ${user}`)
    }


if(!message.member.hasPermission("MANAGE_ROLES", "ADMINISTRADOR")) return message.channel.send("No tienes permisos para utilizar este comando")
if(!message.guild.me.hasPermission("MANAGE_ROLES", "ADMINISTRADOR")) return message.channel.send("El bot necesita permiso de gestionar roles") 


if (!args[0]) return message.channel.send("Debes mencionar a un usuario.") 
if (!user) return message.channel.send("Debes mencionar a un usuario válido.")
if (user == owner) return message.channel.send("No puedes añadir roles a ese usuario") 

if (user == message.author.id) {

if (!args[1]) return message.channel.send("Debes mencionar un rol.")
if (!role) return message.channel.send("Debes mencionar un rol válido")
if (role.comparePositionTo(message.member.roles.highest) >= 0) return message.channel.send("No puedes añadir un rol igual o superior al tuyo.")

if (!role.editable) return message.channel.send("Rol mas alto que el mio")
if (user.roles.cache.has(role.id)) return message.channel.send("Ya cuentas con ese rol")

await user.roles.add(role.id)
return message.channel.send(`**${user}** se ha añadido el rol ${role}`)

}


if (message.member.roles.highest.comparePositionTo(user.roles.highest) <= 0)  return message.channel.send("No puedes añadir roles a ese usuario, puede que tenga un rol igual o superior al tuyo.")


if (!args[1]) return message.channel.send("Debes mencionar un rol.")
if (!role) return message.channel.send("Debes mencionar un rol válido") 
if (role.comparePositionTo(message.member.roles.highest) >= 0) return message.channel.send("No puedes añadir un rol igual o superior al tuyo.")


if (!role.editable) return message.channel.send("Rol mas alto que el mio") 
if (user.roles.cache.has(role.id)) return message.channel.send("Ese usuario ya cuenta con ese rol") 

await user.roles.add(role.id) 
return message.channel.send(`El rol **${role.name}** ha sido agregado correctamente al usuario **${member.displayName}** | Dado por: **${message.member.displayName}**`)

}

        module.exports.help = {
            name: "addrole"
          }
        
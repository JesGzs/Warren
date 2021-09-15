const db = require("quick.db")

module.exports.run = async (client, message, args) => { 

        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("**No tienes permisos de ! - [ADMINISTRATOR]**")
    if (!args[0]) {
      let b = await db.fetch(`modlog_${message.guild.id}`);
      let channelName = message.guild.channels.cache.get(b);
      if (message.guild.channels.cache.has(b)) {
        return message.channel.send(
          `**Modlog Channel establecido en este servidor \`${channelName.name}\`!**`
        );
      } else
        return message.channel.send(
          "**Por favor menciona el canal o pon su id!**"
        );
    }
        let channel = message.mentions.channels.first() || client.guilds.cache.get(message.guild.id).channels.cache.get(args[0]) || message.guild.channels.cache.find(c => c.name.toLowerCase() === args.join(' ').toLocaleLowerCase());

        if (!channel || channel.type !== 'text') return message.channel.send("**Por favor pon un canal valido!**");

        try {
            let a = await db.fetch(`modlog_${message.guild.id}`)

            if (channel.id === a) {
                return message.channel.send("**Este canal ah sido establecido como canal del modlogs!**")
            } else {
                client.guilds.cache.get(message.guild.id).channels.cache.get(channel.id).send("**Canal mod logs establecido!**")
                db.set(`modlog_${message.guild.id}`, channel.id)

                message.channel.send(`**Modlog Channel se ah puesto correctamente en  \`${channel.name}\`!**`)
            }
        } catch {
            return message.channel.send("**Error - `Missing Permissions o el canal no es de texto!`**");
        }
    }

    module.exports.help = {
    name: "setmodlogchannel"
  }
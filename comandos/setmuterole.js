const db = require("quick.db");

module.exports.run = async (client, message, args) => { 

    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send(
        "**No tienes suficientes permisos para utilizar este comando! - [ADMINISTRATOR]**"
      );
    if (!args[0]) {
      let b = await db.fetch(`muterole_${message.guild.id}`);
      let roleName = message.guild.roles.cache.get(b);
      if (message.guild.roles.cache.has(b)) {
        return message.channel.send(
          `**Muterole establecido \`${roleName.name}\`!**`
        );
      } else
        return message.channel.send(
          "**Por favor dime el nombre del rol o su ID!**"
        );
    }

    let role =
      message.mentions.roles.first() ||
      client.guilds.cache.get(message.guild.id).roles.cache.get(args[0]) ||
      message.guild.roles.cache.find(
        c => c.name.toLowerCase() === args.join(" ").toLocaleLowerCase()
      );

    if (!role)
      return message.channel.send("**Por favor dime el nombre del rol o su ID!**");

    try {
      let a = await db.fetch(`muterole_${message.guild.id}`);

      if (role.id === a) {
        return message.channel.send(
          "**OTRO rol ya se a establecido anteriormente!**"
        );
      } else {
        db.set(`muterole_${message.guild.id}`, role.id);

        message.channel.send(
          `**\`${role.name}\` a sido establecido como muterole!**`
        );
      }
    } catch (e) {
      return message.channel.send(
        "**Error - `Missing Permissions o el rol no existe!`**",
        `\n${e.message}`
      );
    }
  }
module.exports.help = {
    name: "setmuterole"
  }

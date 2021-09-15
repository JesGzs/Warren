const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args) => {

    const roleName = args[0];
    if (!roleName) {
      message.channel.send("Por favor especifica el Nombre del Rol Nuevo!");
    }

    message.guild.roles.create({
      data: {
        name: roleName,
        color: "BLUE",
      },
    });

    const embed = new MessageEmbed()
      .setTitle(`Rol Creado: ${roleName}`)
      .setDescription(`Nuevo Rol Creado \`${roleName}\``);

      message.channel.send(embed);
  },
    module.exports.help = {
        name: "createrole"
      }
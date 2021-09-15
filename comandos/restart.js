const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {

    var ids = ["622311399502118967", "ID DE UN ADMIN (OPCIONAL)"] 

    if(!ids.some(ids => message.author.id == ids)) return message.channel.send(":x: Â¡No tienes permisos para usar ese comando!") 
        message.channel.send("`> Succesfully Reloaded`").then(() => {
            client.destroy().then(() => {
                process.exit(); 
            });
        });
    }

        module.exports.help = {
            name: "restart"
          }
        
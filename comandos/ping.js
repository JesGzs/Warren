const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {

    if(!message.channel.guild) return message.channel.send('`Este comando es solo para servidores!\`')
  
    message.channel.send("Pinging...").then(m =>{

        var ping = m.createdTimestamp - message.createdTimestamp;


        var embed = new Discord.MessageEmbed()
        .setAuthor(`El ping es ${ping}ms`)
        .setColor("RANDOM")

        m.edit(embed)
    });
}

        module.exports.help = {
            name: "ping"
          }
        
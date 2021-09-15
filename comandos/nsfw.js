const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {

    if(!message.channel.nsfw) { return message.channel.send(":x: `Error | Este canal no es NSFW`") }
    
        const helpembed = new Discord.MessageEmbed()
                  .setTitle("Comandos NSFW")
                  .setAuthor(client.user.tag, client.user.displayAvatarURL)
                  .setFooter("©️ 2020 Warren BOT No te la jales Muchoo!!!™️",client.user.displayAvatarURL)
                  .setDescription(`
    ‎‏‏‎ ‎‎‏‏‎ ‎‎‏‏‎ ‎‎‏‏‎ ‎‎‏‏‎ ‎‎‏‏‎ ‎‎‏‏‎ ‎‎‏‏‎ ‎‎‏‏‎ ‎‎‏‏‎ ‎‎‏‏‎ ‎‎__‏‏‎**Prefix ❝w.<comando>❞ 🤗**__
                __Se discreto!!__
    > \`w.ass > Muestra Traseros y chochos reales\`
    > \`w.boobs > Muestra Imaganes De Muejeres Reales\``)
        .setColor(0x0394C6)
              message.channel.send(helpembed);
          }


module.exports.help = {
  name: "nsfw"
}
const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {

    let respuesta = ["Si", "No", "Tal vez", "Obvio", "Yo digo que si", "Yo digo que no", "Probablemente"]
    var random = respuesta[Math.floor(Math.random() * respuesta.length)]
    let pregunt = args.slice(1).join(' ');
    const embd = new Discord.MessageEmbed()
    .setDescription('<a:758028512933445714:775884542933860352> Falta la pregunta.')
    .setColor(0xFF0000)
    if(!pregunt) return message.channel.send(embd);
  const embed = new Discord.MessageEmbed()
  .addField("A su pregunta", `${args.join(" ")}`)
  .addField("Mi respuesta", `${random}`)
  .setColor("RANDOM")
  message.channel.send(embed)
  }

 module.exports.help = {
  name: "8ball"
}
        
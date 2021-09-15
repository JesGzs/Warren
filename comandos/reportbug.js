const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {

    let canalxd = client.channels.cache.get('766390183662452736')

let reporte = args.join(' ')

const embedreporte = new Discord.MessageEmbed() 
.setTitle('Hay un nuevo reporte!')
.setThumbnail(client.user.displayAvatarURL())
.setDescription(reporte)
.setColor('RANDOM')
.setFooter(`Reporte hecho por: ${message.author.tag} || ID: ${message.author.id}`, message.member.user.displayAvatarURL())

if(!reporte) return message.reply('Te falta el reporte!')

canalxd.send(embedreporte)

message.author.send('Muchas gracias por el reporte! Recuerda que el mal uso del comando tiene consecuencias!\nTu reporte: ```'+reporte+'```')

message.reply('Tu reporte ha sido enviado a mi equipo de soporte!')
  }
        module.exports.help = {
            name: "reportbug"
          }
        
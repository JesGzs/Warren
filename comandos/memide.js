const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
        
      
        let usuario = message.mentions.users.first()
        let autor = message.author
        
        let decimal = Math.random() * 20 + 1;
        let numero = Math.floor(decimal); 
      
        if(!usuario){ 
          const embed = new Discord.MessageEmbed()
            .setTitle(`La Berenjena de ${autor.username} mide ${numero} centímetros`)
            .setImage('https://lh3.googleusercontent.com/proxy/ToBJPQnGQrdlMh2GH5t3buD6EBnt4K8ZTobxKFJYWkt9a43QRgRaZOR1tfwTqY5YaY93YTQ8bSJVgSNd4dEL2wUHYlFI3r3cyYWAL1llDIYv7Sh1-FKMLP1KXwUWV_8AqDiHxPDevsahx-x1FaA1Yj0QgcfVCR4WoexsJRaK')
            .setColor('RANDOM')
          message.channel.send(embed)
        }else{
          if(usuario == client.user) return message.channel.send('Si lo supieras O.o')
          if(usuario.bot) return message.channel.send('No puedes realizar esta acción!')
          const embed = new Discord.MessageEmbed()
            .setTitle(`La Berenjena de ${usuario.username} mide ${numero} centímetros`)
            .setImage('https://lh3.googleusercontent.com/proxy/ToBJPQnGQrdlMh2GH5t3buD6EBnt4K8ZTobxKFJYWkt9a43QRgRaZOR1tfwTqY5YaY93YTQ8bSJVgSNd4dEL2wUHYlFI3r3cyYWAL1llDIYv7Sh1-FKMLP1KXwUWV_8AqDiHxPDevsahx-x1FaA1Yj0QgcfVCR4WoexsJRaK')
            .setColor('RANDOM')
          message.channel.send(embed)  
        }
      }

module.exports.help = {
  name: "memide"
}
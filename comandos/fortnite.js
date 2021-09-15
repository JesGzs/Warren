const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {

const canvas = require("discord-canvas"),
  stats = new canvas.FortniteStats();
  
let user = args[0]
let plataforma = args[1]
if(!user) return message.channel.send("ingresa el nombre de un jugador")
  if(!plataforma) return message.channel.send("ingresa una plataforma, puede ser pc o gamepad")
  
let image = await stats
  .setToken("a898eb5b-0da2-4dbe-b1e2-7fcfad0b29b8")
  .setUser(user)
  .setPlatform(plataforma)
  .toAttachment();
 
if (plataforma !== "pc" && platform !== "xbl" && platform !== "psn") return message.channel.send("Please enter a valid platform")
if (!image) return message.channel.send("User not found")
 
let attachment = new Discord.MessageAttachment(image.toBuffer(), "FortniteStats.png");
 
message.channel.send(attachment).catch(e => message.channel.send('Hubo un Problema Con El Usuario o su perfil es Privado o No existe El perfil o no tiene Suficientes estadisticas'))

}

module.exports.help = {
  name: "fortnite"
}
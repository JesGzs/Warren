const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {

  if(!message.channel.guild) return message.channel.send('`Este comando es solo para servidores!\`')
  
  let rollfish = Math.floor(Math.random() * 7) +1;
  if(rollfish === 1) return message.channel.send('' + message.author.username + '! salio Tijeras: ✂️'); 
  if(rollfish === 2) return message.channel.send('' + message.author.username + '! salio papel: 🧻'); 
  if(rollfish => 3) return message.channel.send('' + message.author.username + '! salio Piedra: 🥌');
}

module.exports.help = {
  name: "probabilidad"
}
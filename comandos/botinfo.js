
module.exports.run = async (client, message, args) => {
 
 const Discord = require('discord.js')
 const moment = require("moment")
 require("moment-duration-format") 
 
 const actividad = moment.duration(client.uptime).format(" D [dias], H [hrs], m [mins], s [secs]");
 
 
 let disco = [
    "▰▱▱▱▱▱▱▱▱▱ 10%",
    "▰▰▱▱▱▱▱▱▱▱ 20%",
    "▰▰▰▱▱▱▱▱▱▱ 30%",
    "▰▰▰▰▱▱▱▱▱▱ 40%",
    "▰▰▰▰▰▱▱▱▱▱ 50%",
    "▰▰▰▰▰▰▱▱▱▱ 60%",
    "▰▰▰▰▰▰▰▱▱▱ 70%",
    "▰▰▰▰▰▰▰▰▱▱ 80%",
    "▰▰▰▰▰▰▰▰▰▱ 90%",
    "▰▰▰▰▰▰▰▰▰▰ 100%"
  ]
  let discorandom = disco[Math.floor(Math.random() * disco.length)]
 
  let ram = [
    "▰▱▱▱▱▱▱▱▱▱ 10%",
    "▰▰▱▱▱▱▱▱▱▱ 20%",
    "▰▰▰▱▱▱▱▱▱▱ 30%",
    "▰▰▰▰▱▱▱▱▱▱ 40%",
    "▰▰▰▰▰▱▱▱▱▱ 50%",
    "▰▰▰▰▰▰▱▱▱▱ 60%",
    "▰▰▰▰▰▰▰▱▱▱ 70%",
    "▰▰▰▰▰▰▰▰▱▱ 80%",
    "▰▰▰▰▰▰▰▰▰▱ 90%",
    "▰▰▰▰▰▰▰▰▰▰ 100%"
  ]
  let ramrandom = disco[Math.floor(Math.random() * ram.length)]
 
  let memoria = [
    "▰▱▱▱▱▱▱▱▱▱ 10%",
    "▰▰▱▱▱▱▱▱▱▱ 20%",
    "▰▰▰▱▱▱▱▱▱▱ 30%",
    "▰▰▰▰▱▱▱▱▱▱ 40%",
    "▰▰▰▰▰▱▱▱▱▱ 50%",
    "▰▰▰▰▰▰▱▱▱▱ 60%",
    "▰▰▰▰▰▰▰▱▱▱ 70%",
    "▰▰▰▰▰▰▰▰▱▱ 80%",
    "▰▰▰▰▰▰▰▰▰▱ 90%",
    "▰▰▰▰▰▰▰▰▰▰ 100%"
  ]
  let memoriarandom = disco[Math.floor(Math.random() * memoria.length)]
 
 
 

 
 message.channel.send("Cargando...").then(m =>{
 
    var ping = m.createdTimestamp - message.createdTimestamp;
 
 var embed = new Discord.MessageEmbed()
                   .setTitle("Informacion del Bot || Estadisticas")
                   .setColor(0x960606)
                   .setFooter("WarrenBot 2020", client.user.avatarURL())
                   .addField("<:4228_discord_bot_dev:771134987301945344> Developer ", "Outlaw#5991", true)
                   .addField("<:ram:774170281421832202> RAM: ", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
                   .addField("🛢 Servidores", `${client.guilds.cache.size}`, true)
                   .addField("👥 Usuarios: ", "+4000", true)
                   .addField("💾 Comandos ", "158", true)
                   .addField("🎤 Voz Conectadas", client.voice.connections.size, true)
                   .addField("📡 Ping", `${ping} ms`, true)
                   .addField("💡 Discord.js", `v${Discord.version}`, true)
                   .addField("⌚Uptime: ", `${actividad}`, true)
                   .addField("🔧Porcentaje de Ram Usada ", `${ramrandom}`)
                   .addField("💻Porcentaje de Memoria Usada ", `${memoriarandom}`)
                   .addField("💿Porcentaje de Disco Usado ", `${discorandom}`)
                   m.edit(embed)
                });

 }
 
  module.exports.help = {
     name: "botinfo"
   }
 
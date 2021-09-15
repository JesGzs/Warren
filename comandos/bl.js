const Discord = require("discord.js")
const config = require("../config.json")
const db = require("quick.db")

module.exports.run = async (client, message) => {

    if (message.author.id != config.OWNER_ID) return message.reply("Este comando es solo para desarrolladores!")
    const user = message.mentions.users.first()
    if (!user) return message.reply("Por favor Menciona a alguien!")
    
    let blacklist = await db.fetch(`blacklist_${user.id}`)
    
    if (blacklist === "Not") {
      db.set(`blacklist_${user.id}`, "Blacklisted") 
      let embed = new Discord.MessageEmbed()
      .setDescription(`${user} ah sido blacklisteado!`)
      
      message.channel.send(embed)
    } else if (blacklist === "Blacklisted") {
       db.set(`blacklist_${user.id}`, "Not") 
      let embed = new Discord.MessageEmbed()
      .setDescription(`${user} ah Sido removida la blacklist!`)
      
      message.channel.send(embed)
    } else {
       db.set(`blacklist_${user.id}`, "Not") 
      let embed = new Discord.MessageEmbed()
      .setDescription(`Blacklisteando a ${user}! <a:7006_among_killed:777739586599256104>`)
      .setColor("RED")
      message.channel.send(embed)
    }
}

module.exports.help = {
    name: "bl"
  } 
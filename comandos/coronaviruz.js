const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {

  if(!message.channel.guild) return message.channel.send('`Este comando es solo para servidores!\`')
  
  try{
    let res = await require('node-fetch')(`https://corona.lmao.ninja/v2/all?yesterday=false`);
    let data = await res.json();
    let covid = new Discord.MessageEmbed() 
    .setTitle('Covid-19 🦠') 
    .addField('Casos 💊', data.cases.toLocaleString(), true) 
    .addField('Casos hoy 🩺', data.todayCases.toLocaleString(), true) 
    .addField('Muertes ❌', data.deaths.toLocaleString(), true) 
    .addField('Muertes hoy ⛔️', data.todayDeaths.toLocaleString(), true)
    .addField('Condición critica ⚠️', data.critical.toLocaleString(), true) 
    .addField('Recuperados 💉', data.recovered.toLocaleString(), true) 
    .setColor('FF0000')
    message.channel.send(covid)
}catch(e){
message.channel.send('Ha ocurrido un error!') 
}
}

module.exports.help = {
  name: "coronavirus"
}
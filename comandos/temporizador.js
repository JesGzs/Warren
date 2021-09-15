const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {

const ms = require("ms");
const Discord = require("discord.js");

let tiempo = args[0]; 
 if(!tiempo) return message.channel.send("¡Error de uso! Los argumentos deben ir así:\n `tiempo` `canal` `nota` (el canal es opcional)") 

let tiempoMS = ms(tiempo) 
  if(!tiempoMS) return message.channel.send("Define el tiempo en ms, no se permiten simbolos.")
if (args.length < 2) return message.channel.send("Te faltó algo... `Canal` o `nota`"); 
let match = args[1].match(/<#(\d{17,19})>/);
let canal = message.guild.channels.resolve((match || []).pop()); 
 if (!canal) { 
     let recordatorio = args.slice(1).join(" ");
     if (!recordatorio) return message.channel.send("Debes poner un recordatorio.") 
     const exitosoDM = new Discord.MessageEmbed()
      .setDescription("¡El temporizador inició!")
      .addField("Recordatorio", recordatorio)
      .setColor("RANDOM")
      message.channel.send(exitosoDM);
     setTimeout(function(){ 
         const tempDM = new Discord.MessageEmbed()
          .setDescription("¡El temporizador terminó!")
          .addField("Recordatorio:", recordatorio)
          .setColor("RANDOM")
         message.author.send(tempDM).catch((err) => message.channel.send(message.author, alarmaDM)) 
     }, ms(tiempo))
 }else{ 
     if (!canal.permissionsFor(message.author).has("SEND_MESSAGES")) return message.channel.send("No tienes permiso de hablar en el canal mencionado") 
     let recordatorio = args.slice(2).join(" "); 
      if (!recordatorio) return message.channel.send("Debes poner un recordatorio.")
     const exitosoCH = new Discord.MessageEmbed()
      .setDescription("¡El temporizador inició!")
      .addField("Recordatorio", recordatorio)
      .addField("Canal:", canal)
      .setColor("RANDOM")
      message.channel.send(exitosoCH)
     setTimeout(function(){
         const tempCH = new Discord.MessageEmbed()
          .setDescription("¡El temporizador terminó!")
          .addField("Recordatorio:", recordatorio)
          .addField("Canal:", canal)
          .setColor("RANDOM")
         canal.send(message.author, tempCH)
     }, ms(tiempo))
 } 

} 

        module.exports.help = {
            name: "temporizador"
          }
        
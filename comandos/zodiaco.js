const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {

  if(!message.channel.guild) return message.channel.send('`Este comando es solo para servidores!\`')
  
  const mes = parseInt(args[0]);
  const dia = parseInt(args[1]);

  if (!mes) return message.channel.send('Ingrese un número válido para el mes.');
  
  if (mes < 1 || mes > 12)  return message.channel.send('Ingrese un mes válido [1, 12].');

  if (!dia) return message.channel.send('Ingrese un número válido para el día.');
  
  if (mes === 1) {
      if (dia >= 1 && dia <= 19) return message.channel.send('Tu zodiaco es Capricornio');
      if (dia >= 20 && dia <= 31) return message.channel.send('Tu zodiaco es Acuario');
      return message.channel.send('Introduzca una fecha valida.');
  } 
  else if (mes === 2) {
      if (dia >= 1 && dia <= 18) return message.channel.send('Tu zodiaco es Acuario');
      if (dia >= 19 && dia <= 29) return message.channel.send('Tu zodiaco es Piscis');
      return message.channel.send('Introduzca una fecha valida.');
  } 
  else if (mes === 3) {
      if (dia >= 1 && dia <= 20) return message.channel.send('Tu zodiaco es Piscis');
      if (dia >= 21 && dia <= 31) return message.channel.send('Tu zodiaco es Aries');
      return message.channel.send('Introduzca una fecha valida.');
  } 
  else if (mes === 4) {
      if (dia >= 1 && dia <= 19) return message.channel.send('Tu zodiaco es Aries');
      if (dia >= 20 && dia <= 31) return message.channel.send('Tu zodiaco es Tauro');
      return message.channel.send('Introduzca una fecha valida.');
  } 
  else if (mes === 5) {
      if (dia >= 1 && dia <= 20) return message.channel.send('Tu zodiaco es Tauro');
      if (dia >= 21 && dia <= 31) return message.channel.send('Tu zodiaco es Géminis');
      return message.channel.send('Introduzca una fecha valida.');
  } 
  else if (mes === 6) {
      if (dia >= 1 && dia <= 20) return message.channel.send('Tu zodiaco es Géminis');
      if (dia >= 21 && dia <= 31) return message.channel.send('Tu zodiaco es Cáncer');
      return message.channel.send('Introduzca una fecha valida.');
  } 
  else if (mes === 7) {
      if (dia >= 1 && dia <= 22) return message.channel.send('Tu zodiaco es Cáncer');
      if (dia >= 23 && dia <= 31) return message.channel.send('Tu zodiaco es Leo');
      return message.channel.send('Introduzca una fecha valida.');
  } 
  else if (mes === 8) {
      if (dia >= 1 && dia <= 22) return message.channel.send('Tu zodiaco es Leo');
      if (dia >= 23 && dia <= 31) return message.channel.send('Tu zodiaco es Virgo');
      return message.channel.send('Introduzca una fecha valida.');
  } 
  else if (mes === 9) {
      if (dia >= 1 && dia <= 22) return message.channel.send('Tu zodiaco es Virgo');
      if (dia >= 23 && dia <= 31) return message.channel.send('Tu zodiaco es Libra');
      return message.channel.send('Introduzca una fecha valida.');
  } 
  else if (mes === 10) {
      if (dia >= 1 && dia <= 22) return message.channel.send('Tu zodiaco es Libra');
      if (dia >= 23 && dia <= 31) return message.channel.send('Tu zodiaco es Escorpio');
      return message.channel.send('Introduzca una fecha valida.');
  } 
  else if (mes === 11) {
      if (dia >= 1 && dia <= 21) return message.channel.send('Tu zodiaco es Escorpio');
      if (dia >= 22 && dia <= 31) return message.channel.send('Tu zodiaco es Sagitario');
      return message.channel.send('Introduzca una fecha valida.');
  } 
  else if (mes === 12) {
      if (dia >= 1 && dia <= 21) return message.channel.send('Tu zodiaco es Sagitario');
      if (dia >= 22 && dia <= 31) return message.channel.send('Tu zodiaco es Capricornio');
      return message.channel.send('Introduzca una fecha valida.');
  } 
  else {
      return message.channel.send('Introduzca una fecha valida.');
  }


}

module.exports.help = {
  name: "zodiaco"
}
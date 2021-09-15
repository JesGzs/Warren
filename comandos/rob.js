const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (client, message, args) => {

    if (!args[0]) return message.channel.send("**Ingresa un nombre!**")  
    let user2 = message.author

    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase());
    if (!user) return message.channel.send("**Ingrese un uso válidor!**")

    let embed2 = new MessageEmbed()
      .setColor("GREEN")
      .setDescription(`<a:listo:774769282067595274> No puedes robarte a ti mismo`)

    if (user.user.id === message.author.id) {
      return message.channel.send(embed2)
    }

    let targetuser = await db.fetch(`money_${user.id}`)
    let author = await db.fetch(`rob_${user.id}`)
    let author2 = await db.fetch(`money_${user2.id}`)

    let timeout = 600000;

    if (author !== null && timeout - (Date.now() - author) > 0) {
      let time = ms(timeout - (Date.now() - author));

      let timeEmbed = new MessageEmbed()
        .setColor("GREEN")
        .setDescription(`<a:listo:774769282067595274> Ya has robado a alguien\n\nVuelve a intentarlo en ${time.minutes}m ${time.seconds}s `);
      message.channel.send(timeEmbed)
    } else {

      let moneyEmbed = new MessageEmbed()
        .setColor("GREEN")
        .setDescription(`<a:listo:774769282067595274> Necesita al menos 100 monedas en su billetera para robar a alguien`);

      if (author2 < 100) {
        return message.channel.send(moneyEmbed)

      }
      let moneyEmbed2 = new MessageEmbed()
        .setColor("GREEN")
        .setDescription(` ${user.user.username} no tiene nada que puedas robar`);

      let random = Math.floor((Math.random() * 100)) + 1;

      if (targetuser < random) {
        return message.channel.send(moneyEmbed2)
      } else {

        let embed = new MessageEmbed()
          .setDescription(`<a:listo:774769282067595274> Has robado ${user.user.username} y me sali con la suya ${random} coins<:1fa99:773361700450861076>`)
          .setColor("GREEN")
        message.channel.send(embed)

        db.subtract(`money_${user.id}`, random)
        db.add(`money_${user2.id}`, random)
        db.set(`rob_${user.id}`, Date.now())

      }
    };
  }
  module.exports.help = {
    name: "rob"
  }
const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports.run = async (client, message, args) => {

try {
  let user2 = message.author
    if (!args[0]) return message.channel.send("**Por favor ingrese un usuario!**");
    let user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.guild.members.cache.find(
        r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()
      ) ||
      message.guild.members.cache.find(
        r => r.displayName.toLowerCase() === args[0].toLocaleLowerCase()
      );
    if (!user) return message.channel.send("**Ingrese un usuario válido!**");

    let member = db.fetch(`money_${user2.id}`);

    let embed1 = new MessageEmbed()
      .setColor("GREEN")
      .setDescription(`<a:758028512933445714:775884542933860352> Mencionar a alguien para pagar`);

    if (!args[0]) {
      return message.channel.send(embed1);
    }
    let embed2 = new MessageEmbed()
      .setColor("GREEN")
      .setDescription(`<a:758028512933445714:775884542933860352> No puedes pagarte a ti mismo`);

    if (user.user.id === message.author.id) {
      return message.channel.send(embed2);
    }

    let embed3 = new MessageEmbed()
      .setColor("GREEN")
      .setDescription(`<a:758028512933445714:775884542933860352> Especifique una cantidad a pagar`);

    if (!args[1]) {
      return message.channel.send(embed3);
    }
    let embed4 = new MessageEmbed()
      .setColor("GREEN")
      .setDescription(`<a:758028512933445714:775884542933860352> Ingrese una cantidad válida!`);

    if (isNaN(args[1])) {
      return message.channel.send(embed4);
    }
    let embed5 = new MessageEmbed()
      .setColor("GREEN")
      .setDescription(`<a:758028512933445714:775884542933860352> No tienes tanto dinero`);

    if (member < args[1]) {
      return message.channel.send(embed5);
    }

    let embed6 = new MessageEmbed()
      .setColor("GREEN")
      .setDescription(`✅ Has pagado ${user.displayName} ${args[1]} coins <:1fa99:773361700450861076>`);

    message.channel.send(embed6);
    db.add(`money_${user.id}`, args[1]);
    db.subtract(`money_${user2.id}`, args[1]);
    } catch {
        
    }
  }
  module.exports.help = {
    name: "pay"
  }
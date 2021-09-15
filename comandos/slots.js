const slotItems = ["🍇", "🍉", "🍌", "🍎", "🍒"];
const db = require("quick.db");
const { MessageEmbed } = require('discord.js');  

module.exports.run = async (client, message, args) => {

    let user = message.author;
    let moneydb = await db.fetch(`money_${user.id}`)
    let money = parseInt(args[0]);
    let win = false;

    let moneymore = new MessageEmbed()
    .setColor("GREEN")
    .setDescription(`<a:758028512933445714:775884542933860352> Estás apostando más de lo que tienes`);

    let moneyhelp = new MessageEmbed()
    .setColor("GREEN")
    .setDescription(`<a:758028512933445714:775884542933860352> Especifique una cantidad`); 

    if (!money) return message.channel.send(moneyhelp);
    if (money > moneydb) return message.channel.send(moneymore);

    let number = []
    for (let i = 0; i < 3; i++) { number[i] = Math.floor(Math.random() * slotItems.length); }

    if (number[0] == number[1] && number[1] == number[2])  { 
        money *= 9
        win = true;
    } else if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2]) { 
        money *= 3
        win = true;
    }
    if (win) {
        let slotsEmbed1 = new MessageEmbed()
            .setDescription(`${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]}\n\nHas ganado ${money} coins<:1fa99:773361700450861076>`)
            .setColor("GREEN")
        message.channel.send(slotsEmbed1)
        db.add(`money_${user.id}`, money)
    } else {
        let slotsEmbed = new MessageEmbed()
            .setDescription(`${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]}\n\nHas perdido ${money} coins<:1fa99:773361700450861076>`)
            .setColor("RED")
        message.channel.send(slotsEmbed)
        db.subtract(`money_${user.id}`, money)
    }

}
module.exports.help = {
    name: "slots"
  }
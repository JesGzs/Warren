const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const { PREFIX } = require('../config.json');


module.exports.run = async (client, message, args) => {
        let prefix;
        let fetched = await db.fetch(`prefix_${message.guild.id}`);

        if (fetched === null) {
            prefix = PREFIX
        } else {
            prefix = fetched
        }
      
        let user = message.author;

        function isOdd(num) {
            if ((num % 2) == 0) return false;
            else if ((num % 2) == 1) return true;
        }

        let colour = args[0];
        let money = parseInt(args[1]);
        let moneydb = await db.fetch(`money_${user.id}`)

        let random = Math.floor((Math.random() * 10));

        let moneyhelp = new MessageEmbed()
            .setColor("GREEN")
            .setDescription(`<a:758028512933445714:775884542933860352> Especifique una cantidad para apostar | ${prefix}roulette <color> <amount>`);

        let moneymore = new MessageEmbed()
            .setColor("GREEN")
            .setDescription(`<a:758028512933445714:775884542933860352> Estás apostando más de lo que tienes`);

        let colorbad = new MessageEmbed()
            .setColor("GREEN")
            .setDescription(`<a:758028512933445714:775884542933860352> Especifica un color | Red [1.5x] (normal) Black [2x] (hard) Green [15x](rare)`);

        if (!colour) return message.channel.send(colorbad);
        colour = colour.toLowerCase()
        if (!money) return message.channel.send(moneyhelp);
        if (money > moneydb) return message.channel.send(moneymore);

        if (colour == "b" || colour.includes("black")) colour = 0;
        else if (colour == "r" || colour.includes("red")) colour = 1;
        else if (colour == "g" || colour.includes("green")) colour = 2;
        else return message.channel.send(colorbad);

        if (random == 1 && colour == 2) { // Green
            money *= 15
            db.add(`money_${user.id}`, money)
            let moneyEmbed1 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`<a:listo:774769282067595274> Has ganado ${money} coins<:1fa99:773361700450861076>\n\nMultiplicas: 15x`);
            message.channel.send(moneyEmbed1)
        } else if (isOdd(random) && colour == 1) { // Red
            money = parseInt(money * 1.5)
            db.add(`money_${user.id}`, money)
            let moneyEmbed2 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`🔴 Has ganado ${money} coins<:1fa99:773361700450861076>\n\nMultiplicas: 1.5x`);
            message.channel.send(moneyEmbed2)
        } else if (!isOdd(random) && colour == 0) { // Black
            money = parseInt(money * 2)
            db.add(`money_${user.id}`, money)
            let moneyEmbed3 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`⬛ Has ganado ${money} coins<:1fa99:773361700450861076>\n\nMultiplicas: 2x`);
            message.channel.send(moneyEmbed3)
        } else { // Wrong
            db.subtract(`money_${user.id}`, money)
            let moneyEmbed4 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`<a:758028512933445714:775884542933860352> Has perdido ${money} coins<:1fa99:773361700450861076>\n\nMultiplicas: 0x`);
            message.channel.send(moneyEmbed4)
        }
          db.add(`games_${user.id}`, 1)
    }

    module.exports.help = {
        name: "roulette"
      }
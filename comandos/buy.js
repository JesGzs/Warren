const { MessageEmbed } = require('discord.js')
const db = require('quick.db')
const { PREFIX } = require('../config.json');

module.exports.run = async (client, message, args) => {
        let user = message.author;

        let prefix;
        let fetched = await db.fetch(`prefix_${message.guild.id}`);

        if (fetched === null) {
            prefix = PREFIX
        } else {
            prefix = fetched
        }
      
        let author = db.fetch(`money_${user.id}`)

        let Embed = new MessageEmbed()
            .setColor("RED")
            .setDescription(`<a:758028512933445714:775884542933860352> Nesesitas 60000 coins para comprar obedeceme`);


        if (args.join(' ').toLocaleLowerCase() == 'obedeceme') {
            if (author < 60000) return message.channel.send(Embed)

            await db.fetch(`obedeceme_${user.id}`);
            db.set(`obedeceme_${user.id}`, true)
            db.push(message.author.id, "OBECEME :O");

            let Embed2 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`<a:listo:774769282067595274> Has comprado obedeceme por 60000 Coins<:1fa99:773361700450861076>`);

            db.subtract(`money_${user.id}`, 200)
            message.channel.send(Embed2)
        } else if (args.join(' ').toLocaleLowerCase() == 'mute') {
            let Embed3 = new MessageEmbed()
                .setColor("RED")
                .setDescription(`<a:758028512933445714:775884542933860352> Nesesitas 50000 coins<:1fa99:773361700450861076> para comprar mute`);

            if (author < 50000) return message.channel.send(Embed3)

            await db.fetch(`mute_${user.id}`)
            db.add(`mute_${user.id}`, 1)
              db.push(message.author.id, "Mute :mute:");

            let Embed4 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`<a:listo:774769282067595274> has comprado 1 mute por 50000 coins<:1fa99:773361700450861076>`);

            db.subtract(`money_${user.id}`, 600)
            message.channel.send(Embed4)
        } else if (args.join(' ').toLocaleLowerCase() == 'color amarillo') {
            let Embed5 = new MessageEmbed()
                .setColor("RED")
                .setDescription(`<a:758028512933445714:775884542933860352> Nesesitas 30000 coins<:1fa99:773361700450861076> para comprar el color 🟨`);

            if (author < 30000) return message.channel.send(Embed5)

            await db.fetch(`color🟨_${user.id}`)
            db.add(`color🟨_${user.id}`, 1)
            db.push(message.author.id, "Color🟨");

            let Embed6 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`<a:listo:774769282067595274> has comprado el color 🟨 por 30000 coins<:1fa99:773361700450861076>`);

            db.subtract(`money_${message.guild.id}_${user.id}`, 800)
            message.channel.send(Embed6)
        } else if (args.join(' ').toLocaleLowerCase() == 'color rojo') {
            let Embed7 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`<a:758028512933445714:775884542933860352> nesesitas 25000 coins<:1fa99:773361700450861076> para comprar el color 🟥`);

            if (author < 25000) return message.channel.send(Embed7)

            await db.fetch(`color🟥_${user.id}`)
            db.add(`color🟥_${user.id}`, true)
             db.push(message.author.id, "Color🟥");

            let Embed8 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`<a:listo:774769282067595274> has comprado el color 🟥 por 25000 coins<:1fa99:773361700450861076>`);

            db.subtract(`money_${user.id}`, 1200)
            message.channel.send(Embed8)
        } else if (args.join(' ').toLocaleLowerCase() == 'color naranja') {
            let Embed10 = new MessageEmbed()
                .setColor("RED")
                .setDescription(`<a:758028512933445714:775884542933860352> nesesitas 20000 coins<:1fa99:773361700450861076> para comprar el color 🟧`);

            if (author < 20000) return message.channel.send(Embed10)

            await db.fetch(`color🟧_${user.id}`)
            db.add(`color🟧_${user.id}`, true)
             db.push(message.author.id, "Color🟧");

            let Embed22 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`<a:listo:774769282067595274> has comprado el color 🟧 por 20000 coins<:1fa99:773361700450861076>`);

            db.subtract(`money_${user.id}`, 1200)
            message.channel.send(Embed22)
        } else if (args.join(' ').toLocaleLowerCase() == 'color verde') {
            let colorverde = new MessageEmbed()
                .setColor("RED")
                .setDescription(`<a:758028512933445714:775884542933860352> nesesitas 15000 coins<:1fa99:773361700450861076> para comprar el color 🟩`);

            if (author < 15000) return message.channel.send(colorverde)

            await db.fetch(`color🟩_${user.id}`)
            db.add(`color🟩_${user.id}`, true)
             db.push(message.author.id, "Color🟩");

            let Embed23 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`<a:listo:774769282067595274> has comprado el color 🟩 por 15000 coins<:1fa99:773361700450861076>`);

            db.subtract(`money_${user.id}`, 1200)
            message.channel.send(Embed23)
        } else if (args.join(' ').toLocaleLowerCase() == 'color azul') {
            let colorazul = new MessageEmbed()
                .setColor("RED")
                .setDescription(`<a:758028512933445714:775884542933860352> nesesitas 10000 coins<:1fa99:773361700450861076> para comprar el color 🟦`);

            if (author < 10000) return message.channel.send(colorazul)

            await db.fetch(`color🟦_${user.id}`)
            db.add(`color🟦_${user.id}`, true)
             db.push(message.author.id, "Color🟦");

            let Embed24 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`<a:listo:774769282067595274> has comprado el color 🟦 por 10000 coins<:1fa99:773361700450861076>`);

            db.subtract(`money_${user.id}`, 1200)
            message.channel.send(Embed24)
        } else if (args.join(' ').toLocaleLowerCase() == 'color morado') {
            let colormor = new MessageEmbed()
                .setColor("RED")
                .setDescription(`<a:758028512933445714:775884542933860352> nesesitas 5000 coins<:1fa99:773361700450861076> para comprar el color 🟪`);

            if (author < 5000) return message.channel.send(colormor)

            await db.fetch(`color🟪_${user.id}`)
            db.add(`color🟪_${user.id}`, true)
            db.push(message.author.id, "Color🟪");

            let Embed25 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`<a:listo:774769282067595274> has comprado el color 🟪 por 5000 coins<:1fa99:773361700450861076>`);

            db.subtract(`money_${user.id}`, 5000)
            message.channel.send(Embed25)
        } else if (args.join(' ').toLocaleLowerCase() == 'Ferrari 458 Italia') {
            let ferrari = new MessageEmbed()
                .setColor("RED")
                .setDescription(`<a:758028512933445714:775884542933860352> nesesitas 1000 coins<:1fa99:773361700450861076> para comprar el Ferrari 458 Italia`);

            if (author < 1000) return message.channel.send(ferrari)

            await db.fetch(`Ferrari 458 Italia_${user.id}`)
            db.add(`Ferrari 458 Italia_${user.id}`, true)
            db.push(message.author.id, "Ferrari 458 Italia");


            let Embed26 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`<a:listo:774769282067595274> has comprado el Ferrari 458 Italia  por 1000 coins<:1fa99:773361700450861076>`);

            db.subtract(`money_${user.id}`, 5000)
            message.channel.send(Embed26)
        } else if (args.join(' ').toLocaleLowerCase() == 'pc gamer') {
            let pcgamer = new MessageEmbed()
                .setColor("RED")
                .setDescription(`<a:758028512933445714:775884542933860352> nesesitas 500 coins<:1fa99:773361700450861076> para comprar pcgamer `);

            if (author < 500) return message.channel.send(pcgamer)

            await db.fetch(`Pc gamer_${user.id}`)
            db.add(`Pc gamer_${user.id}`, true)
            db.push(message.author.id, "PC gamer");

        
            let Embed27 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`<a:listo:774769282067595274> has comprado Pc gamer por 500 coins<:1fa99:773361700450861076>`);

            db.subtract(`money_${user.id}`, 500)
            message.channel.send(Embed27)
        } else if (args.join(' ').toLocaleLowerCase() == 'tsuru') {
            let tsuru = new MessageEmbed()
                .setColor("RED")
                .setDescription(`<a:758028512933445714:775884542933860352> nesesitas 250 coins<:1fa99:773361700450861076> para comprar el tsuru`);

            if (author < 250) return message.channel.send(tsuru)

            await db.fetch(`tsuru_${user.id}`)
            db.add(`tsuru_${user.id}`, true)
           db.push(message.author.id, "tsuru");


            let Embed28 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`<a:listo:774769282067595274> has comprado tsuru por 500 coins<:1fa99:773361700450861076>`);

            db.subtract(`money_${user.id}`, 250)
            message.channel.send(Embed28)
        } else if (args.join(' ').toLocaleLowerCase() == 'Iphone') {
            let Iphone = new MessageEmbed()
                .setColor("RED")
                .setDescription(`<a:758028512933445714:775884542933860352> nesesitas 250 coins<:1fa99:773361700450861076> para comprar el Iphone`);

            if (author < 250) return message.channel.send(Iphone)

            await db.fetch(`Iphone_${user.id}`)
            db.add(`Iphone_${user.id}`, true)
            db.push(message.author.id, "Iphone");

            let Embed29 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`<a:listo:774769282067595274> has comprado Iphone por 250 coins<:1fa99:773361700450861076>`);

            db.subtract(`money_${user.id}`, 250)
            message.channel.send(Embed29)
        } else if (args.join(' ').toLocaleLowerCase() == 'Iwatch') {
            let Iwatch = new MessageEmbed()
                .setColor("RED")
                .setDescription(`<a:758028512933445714:775884542933860352> nesesitas 150 coins<:1fa99:773361700450861076> para comprar el Iwatch`);

            if (author < 250) return message.channel.send(Iwatch)

            await db.fetch(`Iwatch_${user.id}`)
            db.add(`Iwatch_${user.id}`, true)
            db.push(message.author.id, "Iwatch");

            let Embed30 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`<a:listo:774769282067595274> has comprado Iwatch por 150 coins<:1fa99:773361700450861076>`);

            db.subtract(`money_${user.id}`, 150)
            message.channel.send(Embed30)
        } else if (args.join(' ').toLocaleLowerCase() == 'rosa') {
            let Rosa = new MessageEmbed()
                .setColor("RED")
                .setDescription(`<a:758028512933445714:775884542933860352> nesesitas 100 coins<:1fa99:773361700450861076> para comprar una Rosa🌹`);

            if (author < 250) return message.channel.send(Rosa)

            await db.fetch(`Rosa🌹_${user.id}`)
            db.add(`Rosa🌹_${user.id}`, 1)
            db.push(message.author.id, "Rosa 🌹");

            let Embed31 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`<a:listo:774769282067595274> has comprado una Rosa🌹 por 100 coins<:1fa99:773361700450861076>`);

            db.subtract(`money_${user.id}`, 100)
            message.channel.send(Embed31)
        } else {
            if (message.content.toLowerCase() === `${prefix}buy`) {
                let embed9 = new MessageEmbed()
                    .setColor("GREEN")
                    .setDescription(`<a:758028512933445714:775884542933860352> Ingrese un artículo para comprar!\nEscribe ${prefix}store Para ver la lista de artículos!`)
                return message.channel.send(embed9)
                
            }
        }
    }

module.exports.help = {
    name: "buy"
  }
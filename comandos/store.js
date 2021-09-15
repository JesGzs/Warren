const Discord = require('discord.js');

module.exports.run = async (client, message, args) => { 
    
 var server = message.guild;
        const embed = new Discord.MessageEmbed()
        .setAuthor("Para comprar un item usa w.buy <item>, para mas informacion de sobre el item usa w.iteminfo <name>")
        .setTitle(`Store de ${server.name} <:8185ItQoEeL:773363084995723284>`)
        .setFooter("©Warren Bot 2020")
        .setDescription(`Obedeceme = El dueño del servidor o alguna administrador tiene que hacer lo que digas - 60000 coins <:1fa99:773361700450861076> \n\n Muteo a un usuario por 30min :mute: - 50000 coins <:1fa99:773361700450861076> \n\n Color 🟨 - 30,000 coins <:1fa99:773361700450861076> \n\n Color 🟥 - 25,000 coins <:1fa99:773361700450861076> \n\n Color 🟧 - 20,000 coins <:1fa99:773361700450861076> \n\n Color 🟩 - 15,000 coins <:1fa99:773361700450861076> \n\n Color 🟦 - 10,000 coins <:1fa99:773361700450861076> \n\n Color 🟪 - 5000 coins <:1fa99:773361700450861076> \n\n Ferrari 458 Italia <:580b57fcd9996e24bc43c47a:773677977782845460> - 1000 coins <:1fa99:773361700450861076> \n\n  Pc gamer <:grn_400:773678401453817857> - 500 coins <:1fa99:773361700450861076> \n\n tsuru <:1200pxNissanlogo:773678664070987846> - 250 coins <:1fa99:773361700450861076> \n\n Iphone <:iPhone12mockupFreePsdDownload:773679103957663775> - 250 coins <:1fa99:773361700450861076> \n\n Iwatch <:AppleWatchPNG:773679761385324575> - 150 coins <:1fa99:773361700450861076> \n\n Rosa🌹 Para la persona que quieras uwu - 100 coins <:1fa99:773361700450861076>`)
        .setColor(0xffce5c)
        .setTimestamp();

        message.channel.send(embed);
    }



module.exports.help = {
    name: "store"
  }
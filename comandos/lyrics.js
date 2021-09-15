const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {


const { Util, MessageEmbed } = require('discord.js');
const soleno = require('solenolyrics');



const search = args.join(' ');

if (!search) {
    message.channel.send('Argumento invalido, escribe algo.');
    return;
}


const [ lyrics, icon, title, author ] = await Promise.all([

    soleno.requestLyricsFor(search),
    soleno.requestIconFor(search),
    soleno.requestTitleFor(search),
    soleno.requestAuthorFor(search)
]);

const embed = new MessageEmbed()
    .setTitle(title)
    .setAuthor(author, icon)
    .setColor('RANDOM');



for (const song of Util.splitMessage(lyrics)) {

    embed.setFooter(song);
    message.channel.send(embed).catch(e => message.channel.send('Error no se encontraron las lyrics'))

}

}

        module.exports.help = {
            name: "lyrics"
          }
        
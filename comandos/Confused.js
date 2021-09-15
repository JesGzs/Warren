const { MessageEmbed } = require('discord.js');
const star = require('star-labs');

module.exports.run = async (client, message, args) => {
    
    const aA = message.author

    const aC = new MessageEmbed()
        .setDescription(aA.tag+' se encuentra confundido -c-')
        .setImage(star.confused())
        .setColor("RANDOM")
    message.channel.send(aC); 
}
        module.exports.help = {
            name: "confused"
          }
        
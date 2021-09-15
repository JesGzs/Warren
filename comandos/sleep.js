const { MessageEmbed } = require('discord.js');
const star = require('star-labs');

module.exports.run = async (client, message, args) => {
    
    const aA = message.author

    const aC = new MessageEmbed()
        .setDescription(aA.tag+' se ha quedado dormido! `💤`')
        .setImage(star.sleep())
        .setColor("RANDOM")
    message.channel.send(aC); 
}
        module.exports.help = {
            name: "sleep"
          }
        
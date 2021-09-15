const { MessageEmbed } = require('discord.js');
const star = require('star-labs');

module.exports.run = async (client, message, args) => {
    
    const aA = message.author

    const aC = new MessageEmbed()
        .setDescription(aA.tag+' está bailando**!** 7w7')
        .setImage(star.dance())
        .setColor("RANDOM")
    message.channel.send(aC); 
}
        module.exports.help = {
            name: "dance"
          }
        
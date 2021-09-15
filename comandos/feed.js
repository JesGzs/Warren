const { MessageEmbed } = require('discord.js');
const star = require('star-labs');

module.exports.run = async (client, message, args) => {
    
    let aA = message.author
    let aB = message.mentions.users.first()
    if (!aB) return message.channel.send('Menciona a 1 usuario para darle de comer.');
    const aC = new MessageEmbed()
        .setDescription(`**${aA.tag}** dió de comer a **${aB.tag}** >///<`)
        .setImage(star.feed())
        .setColor("RANDOM")
    message.channel.send(aC); 
}
        module.exports.help = {
            name: "feed"
          }
        
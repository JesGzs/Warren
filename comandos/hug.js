const { MessageEmbed } = require('discord.js');
const star = require('star-labs');

module.exports.run = async (client, message, args) => {
    
    let aA = message.author
    let aB = message.mentions.users.first()
    if (!aB) return message.channel.send('Menciona a 1 usuario para darle un Abrazo.');
    const aC = new MessageEmbed()
        .setDescription(`**${aB.tag}** ha recibido un abrazo de **${aA.tag}** >///<`)
        .setImage(star.hug()) 
        .setColor("RANDOM")
    message.channel.send(aC); 
}
        module.exports.help = {
            name: "hug"
          }
        
const { MessageEmbed } = require('discord.js');

const Discord = require("discord.js"); ///llamamos a la constante discord.
const NSFW = require("discord-nsfw"); ///el modulo npm (npm i discord-nsfw).
const nsfw = new NSFW();

module.exports.run = async (client, message, args) =>{ ///comand handler
    if(!message.channel.nsfw) return message.channel.send("No puedes utilizar este comando en un chat que no es **NSFW**") ///esto hara que no funcione en chats normales.

    const image = await nsfw.boobs(); ///definimos a img o gif que saldra en el embed.
    const embed = new Discord.MessageEmbed() ///creamos el embed.
    .setTitle("Disfrutalo ?")
    .setImage(image)
    .setColor("RANDOM")
    message.channel.send(embed) ///enviamos.
}

        module.exports.help = {
            name: "boobs"
          }
        
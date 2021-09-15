const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {

    const fetch = require('node-fetch')
const { MessageEmbed } = require("discord.js")


 fetch(`https://api.alexflipnote.dev/sadcat`)
    .then((res) => res.json())
    .then((body) => {
        console.log(body)
        let embed = new MessageEmbed()
        .setTitle('Gatos tristes :(')
        .setImage(body.file)
        .setColor(`#ff8000`)
        message.channel.send(embed)
    })
}
        module.exports.help = {
            name: "sadcat"
          }
        
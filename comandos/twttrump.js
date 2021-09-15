const { DiscordAPIError } = require('discord.js');
const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {

        let mensaje = args.join('%20')

        if(!mensaje) return message.channel.send(' Debes de colocar un mensaje para que trump lo diga!').then(m => m.delete({timeout: 7000}))


        let api = `https://api.no-api-key.com/api/v2/trump?message=${mensaje}`

        const TrumpDijo = new Discord.MessageEmbed()
        .setImage(api)
        .setColor('RANDOM')

        message.channel.send(TrumpDijo)
        }
    
            module.exports.help = {
                name: "twttrump"
              }
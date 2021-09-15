const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {

const { meme } = require("memejs")


meme('wholesomememes', function(err, data) { 
if (err) return message.reply(err) 
const embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setImage(data.url) 
message.channel.send(embed)
})
}

        module.exports.help = {
            name: "meme"
          }
        
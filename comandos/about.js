const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {

    const helpembed = new Discord.MessageEmbed()
                    .setAuthor("Informaciond de Warren", client.user.avatarURL())
                    .setThumbnail("https://i.imgur.com/EmRqWjA.gif")
                    .setFooter("©️Warren BOT",client.user.displayAvatarURL)
                    .setColor(0x0394C6)
                    .addField("<:verified:788162897771495474> | Creador del bot ", "Outlaw#5991", true)
                    .addField("Desarrollador ", "Outlaw#5991", true)
                    .addField("Version ", "4.1.1", true)
                    .addField("Twitch Creador ", "[JesOutlaw](https://www.twitch.tv/jesoutlaw)")
                    .addField("Twitter Creador ", "[@OutlawJes](https://twitter.com/OutlawJes)")
                    .addField("Youtube Creador ", "[JesGzs](https://www.youtube.com/channel/UCvmt9KTCM4K6oU8hEwyfxHw?view_as=subscriber)")
                    .addField("Discord Warren: ", "[Link](https://discord.gg/mYRsaew)")
                    .setDescription("Warren es un bot multipropósitos enfocado a la diversión y entretenimiento del servidor.");
                message.channel.send(helpembed)
 }
 
  module.exports.help = {
     name: "about"
   }
 
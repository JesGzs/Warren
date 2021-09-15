const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {

    let gifs = ["https://media.tenor.com/images/d581a1205746bfb902cd2896f3864160/tenor.gif", 
    "https://media4.giphy.com/media/12RfP2odT4hEOI/200.gif", 
    "https://media1.giphy.com/media/2gG2xiMTtFwsg/200.gif",
    "https://i.gifer.com/Vgmj.gif", 
          

];


let cap = gifs[Math.floor(gifs.length * Math.random())];

const embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.addField(message.author.username, "Tiene miedo !", true)
.setImage(cap)

message.channel.send(embed);


}

module.exports.help = {
    name: "scared"
  }
const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {

    let gifs = ["https://media0.giphy.com/media/YRuFixSNWFVcXaxpmX/source.gif", 
    "https://media1.giphy.com/media/5bxl57jd6gDZA3GySS/source.gif", 
    "https://i.imgur.com/trwrzPg.gif",
    "https://i.gifer.com/kHQ.gif", 
          

];


let cap = gifs[Math.floor(gifs.length * Math.random())];

const embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.addField(message.author.username, "Esta aplaudiendo 👏🏽", true)
.setImage(cap)

message.channel.send(embed);


}

module.exports.help = {
    name: "claps"
  }
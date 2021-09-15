const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {

    let gifs = ["https://pa1.narvii.com/6834/41c6fcea9d1a912f7e27550a73e7c57e06ed8e09_hq.gif", 
    "https://media4.giphy.com/media/3oKIPsx2VAYAgEHC12/200.gif", 
    "https://media.tenor.com/images/dad77f1452951f4cf586395209598978/tenor.gif",
    "https://pa1.narvii.com/7323/6c515caa76c740a053ed812ccb362a8f7e34bdbdr1-500-297_hq.gif", 
          

];


let cap = gifs[Math.floor(gifs.length * Math.random())];

const embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.addField(message.author.username, "Dice Hola a todos!!!", true)
.setImage(cap)

message.channel.send(embed);


}

module.exports.help = {
    name: "hi"
  }
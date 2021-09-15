const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {

    let gifs = ["https://media3.giphy.com/media/3oEjHW0rhhhVopXFVm/source.gif", 
    "https://www.reactiongifs.com/r/ttmar.gif", 
    "https://cdn.eldeforma.com/wp-content/uploads/2020/06/forrest-gump-run-gif.gif",
    "https://thumbs.gfycat.com/FormalRegalAmericancreamdraft-max-1mb.gif", 
          

];


let cap = gifs[Math.floor(gifs.length * Math.random())];

const embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.addField(message.author.username, "Salido Corriendo !!", true)
.setImage(cap)

message.channel.send(embed);


}

module.exports.help = {
    name: "run"
  }
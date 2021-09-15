const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {

    let gifs = ["https://media1.giphy.com/media/1d5Zn8FqmJqApu4hNU/source.gif", 
    "https://i.pinimg.com/originals/fd/71/9a/fd719a343a61ddfc2dcb4e23dddef94e.gif", 
    "https://media0.giphy.com/media/Vgdnagu37fu5W/giphy.gif",
    "https://media3.giphy.com/media/3o6Zt8YvkFsVj28Wqc/source.gif", //Al igual que aquí, también podemos agregar cuantos gifs queramos solamente agregando mas corchetes
          

];


let cap = gifs[Math.floor(gifs.length * Math.random())];

const embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.addField(message.author.username, "Esta riendose 😂", true)
.setImage(cap)

message.channel.send(embed);


}

module.exports.help = {
    name: "laugh"
  }
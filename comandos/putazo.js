const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {

    let gifs = ["https://i.pinimg.com/originals/c2/3c/57/c23c57e6d527fde80b75e268d897f37e.gif", 
    "https://j.gifs.com/G6747Q.gif", 
    "https://i.imgur.com/vypfcgj.gif",
    "https://media4.giphy.com/media/WJudITk3NIcsU/200.gif", 
          

];

let cap = gifs[Math.floor(gifs.length * Math.random())]; 



let pr = message.mentions.users.first();
if (!pr) {
message.reply("Debes mencionar a alguien.");
} else {

const embed = new Discord.MessageEmbed()
  .setDescription(
    "<" +
      "@" +
      message.author.id +
      ">" +
      "  Le metio un putazo a " +
      "<" +
      "@" +
      pr.id +
      ">" +
      " <3"
  )
  .setImage(cap)
  .setColor("RANDOM");

message.channel.send(embed);


}


}

module.exports.help = {
  name: "putazo"
}
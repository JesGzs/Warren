const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {

const canvas = require("discord-canvas"),
  shop = new canvas.FortniteShop();
  
let image = await shop
  .setToken("a898eb5b-0da2-4dbe-b1e2-7fcfad0b29b8")
  .toAttachment();

let attachment = new Discord.MessageAttachment(image, "FortniteShop.png");

message.channel.send(attachment);
}
module.exports.help = {
  name: "fortniteshop"
}
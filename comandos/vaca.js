
const cowsPack = require("cows");
const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {
    const cows = cowsPack();

    const cow = cows[Math.floor(Math.random() * cows.length)];

    const embed = new Discord.MessageEmbed()

      .setDescription(`\`\`\`${cow}\`\`\``);

    message.channel.send(embed);

 }
    module.exports.help = {
        name: "vaca"
      }
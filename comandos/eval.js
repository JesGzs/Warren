const Discord = require("discord.js"),
      { post } = require("node-superfetch");

module.exports.run = async (client, message, args) => {
  let owner = '622311399502118967'

  if (!owner.includes(message.author.id)) return message.channel.send("<a:758028512933445714:775884542933860352> **Este comando es solo para desarolladores.**")
  
  const embed = new Discord.MessageEmbed()
  .addField("Entrada <a:7650132024166973451:775871023207284816>", "```js\n" + args.join(" ") + "```");
  
  try {
    const code = args.join(" ");
    if (!code) return message.channel.send("Por favor Dime el codigo.");
    let evaled;
    
   
    if (code.includes(`SECRET`) || code.includes(`TOKEN`) || code.includes("process.env")) {
      evaled = "No, cállate que vas a hacer con la ficha?";
    } else {
      evaled = eval(code);
    }
    
    if (typeof evaled !== "string") evaled = require("util").inspect(evaled, {depth: 0});
    
    let output = clean(evaled);
    if (output.length > 1024) {
   
      const {body} = await post("https://hastebin.com/documents").send(output);
      embed.addField("Salida <a:7650132024166973451:775871023207284816>", `https://hastebin.com/${body.key}.js`).setColor(0x32CD08);

    } else {
      embed.addField("Salida <a:7650132024166973451:775871023207284816>", "```js\n" + output + "```").setColor(0x32CD08)
    }
    
    message.channel.send(embed);
    
  } catch (error) {
    let err = clean(error);
    if (err.length > 1024) {
    
      const {body} = await post("https://hastebin.com/documents").send(err);
      embed.addField("Salida", `https://hastebin.com/${body.key}.js`).setColor("RED");
    } else {
      embed.addField("Salida", "```js\n" + err + "```").setColor("RED");
    }
    
    message.channel.send(embed);
  }
}

exports.help = {
  name: "eval",
  description: "Evaluate some code.",
  usage: "eval <code>",
  example: "eval client.commands"
}

exports.conf = {
  aliases: ["ev"]
}

function clean(string) {
  if (typeof text === "string") {
    return string.replace(/`/g, "`" + String.fromCharCode(8203))
    .replace(/@/g, "@" + String.fromCharCode(8203))
  } else {
    return string;
  }
}
    module.exports.help = {
        name: "eval"
      }
const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
    const math = require("math-expression-evaluator"); 


    const embed = new Discord.MessageEmbed()
  .setColor(`RANDOM`);
  
  if (!args[0]) {
    embed.setFooter("Por favor ingrese una `expresion`.");
    return await message.channel.send(embed); 
  }
  let resultado;
  try {
    resultado = math.eval(args.join(" ")); 
  } catch (e) {
    resultado = "error: Entrada Invalida"; 
  }
  embed.addField("Entrada:", `\`\`\`js\n${args.join(" ")}\`\`\``, false) 
  .setTitle("📊 Calculadora")
  .addField("Salida", `\`\`\`js\n${resultado}\`\`\``, false);
  await message.channel.send(embed);
}; 

        module.exports.help = {
            name: "calculadora"
          }
        
const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {

   let users =  message.mentions.users.first();
 if (!users) return message.reply("Menciona a alguien porfavor!") //Para que mencionen al usuario
  if (users === message.author) return message.channel.send("**No puedes hacer eso contigo mismo**");
    if (users === client.user) return message.channel.send("**No puedo calcular eso conmigo!**")
  
  
  
const random = Math.floor(Math.random() * 100);
let heard = "";
 
    if(random < 50){
        heard=':broken_heart:';

    }else if(random < 80){
        heard=':sparkling_heart: '; // Un pequeño Match.Floor para hacerlo random y no de el mismo resultado!

    }else if(random < 101){
        heard=':heart:';

    }
  

let resp = [`El porcetanje de ${message.author.username} & ${users.username} son:`,`valla yo calculo que ${message.author.username} & ${users.username} da a:`]
  
  let msg = resp[Math.floor(Math.random() * resp.length)]    //Mensajes distintos si quieren ponerle diferentes mensajes!
  
  
  
  
const embed = new Discord.MessageEmbed()
    .setAuthor(`${msg}`)
    .setDescription(`${heard} ${random} %${heard}`)   //Resultado aleatorio de lo anterior estructurado 
    .setColor(0xff4d4d)
message.channel.send(embed)
} //Cierre del comando!


     module.exports.help = {
            name: "medid"
          }
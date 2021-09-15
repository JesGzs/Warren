const db = require("megadb")
const profile = new db.crearDB("userinfo")
const Discord = require("discord.js")


module.exports.run = async (client, message, args) => { 

let user = message.member; 


let colors = args.join(" ").toLowerCase();
if(!colors) return message.channel.send("Escriba su nuevo color azul,verder,rojo,amarillo")


    let rgb;
    if(colors === "rojo"){
    rgb = "#DD2E44"
    }else if(colors === "verde"){
    rgb = "#78B159"
    }else if(colors === "amarillo"){
    rgb = "#FDCB58"
    }else if(colors === "azul"){
    rgb = "#55ACEE"
    }else if(colors === "rosa"){
    rgb = "#EA68CF"
   
    }else {
        return message.channel.send("Color no valido") 
    }

    if(!profile.has(`${message.guild.id}.${user.id}`)) { 
        await profile.set(`${message.guild.id}.${user.id}`, {
              desc: "No hay descripcion aun `w.setdescription` para poner una",
              color: "",
              titulo: "No hay descripcion aun `w.setdescription` para poner una"
         })
      } else {

    await profile.establecer(`${message.guild.id}.${user.id}.color`, rgb)
    const colo = new Discord.MessageEmbed() 
        .setColor(rgb)
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setDescription("Este es el nuevo color que aparecera en tu perfil")
        return message.channel.send(colo)
    }
    
}

module.exports.help = {
    name: "setcolor"
  }
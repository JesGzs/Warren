const db = require("megadb")
const profile = new db.crearDB("pofile")


module.exports.run = async (client, message, args) => { 

    let user = message.member;
    let titu =  args.join(' ')
    
    if(!titu) return message.channel.send("Escriba su nueva descripcion")

    if(profile.has(`${message.guild.id}.${user.id}`)){

    await profile.set(`${message.guild.id}.${user.id}.titulo`, titu)
    
    } else {
            await profile.set(`${message.guild.id}.${user.id}`, {
                desc: "No definida.",
                color: "",
                titulo: titu
        })
     }

  return message.channel.send("El titulo de tu userinfo cambio a  `" + titu + "`")// y un mensaje de exito

} 


module.exports.help = {
    name: "set"
  }
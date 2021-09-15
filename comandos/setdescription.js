const db = require("megadb")
const profile = new db.crearDB("userinfo")

module.exports.run = async (client, message, args) => { 

        let user = message.member; 
        let descripcion =  args.join(' ')
    
        if(!descripcion) return message.channel.send("Escriba su nueva descripcion")

        if(profile.has(`${message.guild.id}.${user.id}`)){

            await profile.set(`${message.guild.id}.${user.id}.desc`, descripcion)
    
        }else{
            await profile.set(`${message.guild.id}.${user.id}`, {
                desc: descripcion,
                color: "",
                titulo: "No definida."
            })
          
}
return  message.channel.send("la  descripcion de tu perfil cambio a  `" + descripcion + "`")
    }
    
module.exports.help = {
    name: "setdescription"
  }
const Discord = require("discord.js")
const db = require("megadb") 
const profile = new db.crearDB("userinfo")
const dbe = require("quick.db")


module.exports.run = async (client, message, args) => { 
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
    if (user.user.bot) return message.channel.send(`<a:758028512933445714:775884542933860352>**Los Bots no tienen profile!**`);
    let bal = dbe.fetch(`money_${user.id}`);

    if (bal === null) bal = 0;

    let bank = await dbe.fetch(`bank_${user.id}`);

    if (bank === null) bank = 0;

    let works = dbe.fetch(`works_${user.id}`)
    if (works === null) works = 0;

    
    let begs = dbe.fetch(`begs_${user.id}`)
    if (begs === null) begs = 0;


      if(!profile.has(`${message.guild.id}.${user.id}`)) { 
          await profile.set(`${message.guild.id}.${user.id}`, {
                desc: "No hay descripcion aun `w.setdescription` para poner una",
                color: "",
                titulo: "No hay descripcion aun `w.setdescription` para poner una"
           })
        }

       let dep = await profile.get(`${message.guild.id}.${user.id}.desc`)
       let titu = await profile.get(`${message.guild.id}.${user.id}.titulo`)
       let colors = await profile.get(`${message.guild.id}.${user.id}.color`)
   
      let prefil = new Discord.MessageEmbed() 
      .setColor(colors)
      .setAuthor(`${user.user.username}'s profile`)
      .setThumbnail(user.user.avatarURL())
      .addField("Efectivo: ", `${bal} coins <:1fa99:773361700450861076>`)
      .addField("Bank: ", `${bank} coins <:1fa99:773361700450861076>`)
      .addField("Works ", `${works}`)
      .addField("Begs ", `${begs}`)
      .setTitle(dep)
      .setDescription("Para ver inventario usar `w.inventory`")
      .setFooter("Para cambiar el color del perfil usar w.setcolor azul,rojo,amarillo,verde")
    
      message.channel.send(prefil)

    }

   module.exports.help = {
        name: "profile"
      } 
const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
  const { default_prefix } = require("../config.json");
    const db = require("quick.db")
    let PREFIX = await  db.get(`prefix_${message.guild.id}`);
    if(PREFIX === null) PREFIX = default_prefix;

    message.reply('Revisa tus mensajes directos <a:dcafd5a6f8274cb289c9a99b4afc3100:771540784171712532>.') 
    .then(message => message.delete({timeout: 5000}));
    
        message.react("✔️")

        const embed = new Discord.MessageEmbed() 
        .setAuthor("Comandos de Warren", client.user.avatarURL())
        .setFooter(message.author.username, message.author.displayAvatarURL({dynamic : true}))
        .setTimestamp()
        .addField("**<a:4a26aa20e8a54406b3b8a72b3d10132d:775540008476082176> | COMANDOS UTILIDAD > 15**",
        "```anuncio,avatar,calculadora,emojilist,help,hexcolor,jumbo,roleinfo,boostinfo,servericon,serverinfo,shortlink,temporizador,userinfo,worldclock```")
        .addField("**<a:631322923440930826:784542417134157844> | COMANDOS CONFIGURACION > 9**",
        "```setprefix,setmodlogchannel,setmuterole,setverification,setwelcomechannel,disablemodlogchannel,disablemuterole,disableverification,disablewelcomechannel```")
        .addField("**<a:moderacion2:788168905511272459> | MODERACION > 19**",
"```addrole,ban,createrole,funban,kick,lock,mute,purge,raid[on/off],setnickname,slowmode,softban,tempban,unban,unlock,unmute,unwarn,warn,votekick```")
.addField("**<a:divertdiso:788169650763464734> | DIVERTIDOS > 13**",
"```snipe,drake,chiste,fhack,guapohoy,impostor,meme,memide,novia,say,soyadmin,trash,twttrump```")
.addField("**<:3668_AmongUs_Dab:771205554404065291> | INTERACCION > 24**",
"```blush,boom,claps,confused,cry,dab,dance,feed,fuckyou,happy,hi,hit,hug,kill,kiss,laugh,lick,pat,putazo,run,scared,slap,sleep,suicide```")
.addField("**<a:juegos:788168885198651443> | JUEGOS > 5**",
  "```8ball,buscaminas,fortnite,minecraft,probabilidad```")
.addField("**<a:busqueda:788168832421593119> | BUSQUEDA > 11**",
  "```spotify,google,clima,amazon,youtube,twitter,lyrics,playstore,pokedex,zodiaco,coronavirus```")
  .addField("**<a:68747470733a2f2f692e67697068792e:771956082456920075> | ECONOMIA > 19**",
  "```addmoney,balance,beg,buy,daily,deposit,deposit all,leadeboard,pay,profile,removemoney,rob,roulette,slots,store,weekly,withdraw,work,dice```")
.addField("**<a:4a26aa20e8a54406b3b8a72b3d10132d:775540008476082176> | INFORMATIVOS > 6**",
  "```invite,about,prefix,botinfo,ping,reportbug```")
  .addField("<a:giphy:777015803300151327> | COMANDOS ANIMALES > 15",
  "```llama,oso,camello,gato,vaca,perro,pato,zorro,koala,lagartija,panda,shibe,mapache,ballena,sadcat```")
.addField("**<a:warrensong:774496826044579871> | MUSICA > 18**",
  "```play (p),search,pause,resume,queue (q),skip (s),volume (v),skipto (st),remove,pruning,loop (l),playlist (pl),stop,shuffle,np,join,leave,move```")
.addField("**<a:nsfw1:768642639012036629> | Comandos NSFW** ", 
"```Requiere Canal NSFW, Para ver comandos usar w.nsfw```")
.addField("Server Prefix:", `${PREFIX}`)
.setColor(0x669acc)
.setDescription(`Warren es un bot multipropósitos enfocado a la diversión administracion y entretenimiento del servidor Tambien puedes visitar mi pagina [LINK](https://warrenbot.weebly.com) ,**Uso ${PREFIX}<comando>**`);
        message.author.send(embed).catch((e) => message.reply("Mensajes Al md Desactivados: "+e))  
    }

module.exports.help = {
  name: "help"
}
const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {

    var play = require('google-play-scraper');
    var busqueda = args.join(".")
    console.log(busqueda)
    if(message.author.bot){
     return;
    }
    if(!busqueda){
        return message.channel.send('Que aplicacion desea que busque')
    }
    play.search({
        term: busqueda,
        num: 1
        }).then(as =>{
    play.app({appId: as[0].appId}).then(res => {
        const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setThumbnail(res.icon)
        .addField('Nombre',res.title)
        .addField('funcion',res.summary)
        .addField('descargas',res.installs)
        .addField('rantings',res.ratings)
        .addField('precio',res.priceText)
        .addField('app ID',res.appId)
        .addField('genero', res.genre)
        .addField('app URL',res.url)
        .addField('Creador','Nombre: '+res.developer+'\n'+'Gmail: '+res.developerEmail+'\n'+'SitioWeb: '+res.developerWebsite+'\n'+'direcion: '+res.developerAddress+'ID: '+res.developerId)
        .addField('descripcion',res.recentChanges)
        .setFooter('ejemplo practico')
        .setTimestamp()
        message.channel.send(embed)
  
    }).catch(error => {
        message.channel.send('perdon no encontre '+busqueda)
    })
}) 
    }

module.exports.help = {
  name: "playstore"
}
const Discord = require("discord.js");

const {searchAmazon, AmazonSearchResult} = require('unofficial-amazon-search');
module.exports.run = async (client, message, args) => {

  let busqueda = args.join(" ")
  if(!busqueda){
      return message.channel.send('que producto queires buscar ?')
  }
  var i = 0;
 searchAmazon(busqueda).then(res => {
    let maximo = res.length - 1;
     const embed = new Discord.MessageEmbed()
     .addField('titulo',res[i].title)
     .addField('calificacion',res[i].rating.score + '/' + res[i].rating.outOf,true)
     .addField('precio',res[i].prices[0].price,true)
     .addField('para',res[i].prices[0].label,true)
     .addField('URL',res[i].productUrl)
     .setImage(res[i].imageUrl)
     .setTimestamp()
     .setColor('RANDOM')
     .setFooter(`busqueda amazon : `+parseInt(i + 1)+`/`+parseInt(maximo + 1))
     .setThumbnail('https://i.imgur.com/4gVj6Xf.png')
     message.channel.send(embed).then(msg =>{
        msg.react('◀️')
        msg.react('⏹️')
        msg.react('▶️')
        msg.awaitReactions((reaction,user) => {
            if(message.author.id != user.id){
                return;
            }
            if(reaction.emoji.name === '▶️'){
                if(i != maximo){
                    i++//le sumamos uno a i
                    const embeds = new Discord.MessageEmbed()
                    .addField('titulo',res[i].title)
                    .addField('calificacion',res[i].rating.score + '/' + res[i].rating.outOf,true)
                    .addField('precio',res[i].prices[0].price,true)
                    .addField('para',res[i].prices[0].label,true)
                    .addField('URL',res[i].productUrl)
                    .setImage(res[i].imageUrl)
                    .setTimestamp()
                    .setColor('RANDOM')
                    .setFooter(`busqueda amazon : `+parseInt(i + 1)+`/`+parseInt(maximo + 1))
                    .setThumbnail('https://i.imgur.com/4gVj6Xf.png')
                    msg.edit(embeds)
                }//cerramos
            }//cerramos
            if(reaction.emoji.name === '⏹️'){
                msg.reactions.cache.get('◀️').remove()
                msg.reactions.cache.get('⏹️').remove()
                msg.reactions.cache.get('▶️').remove()
                const embedsss = new Discord.MessageEmbed()
                    .setTitle('Amazon')
                    .setImage('https://i.imgur.com/4gVj6Xf.png')
                    .setFooter(`amazon Busqueda : `+parseInt(i + 1)+`/`+parseInt(maximo + 1))
                    .setTimestamp()
                    msg.edit(embedsss);
            }//y cerramos
            if(reaction.emoji.name === '◀️'){
                if(1 != i){
                i--
                const embedss = new Discord.MessageEmbed()
                .addField('titulo',res[i].title)
                .addField('calificacion',res[i].rating.score + '/' + res[i].rating.outOf,true)
                .addField('precio',res[i].prices[0].price,true)
                .addField('para',res[i].prices[0].label,true)
                .addField('URL',res[i].productUrl)
                .setImage(res[i].imageUrl)
                .setTimestamp()
                .setColor('RANDOM')
                .setFooter(`busqueda amazon : `+parseInt(i + 1)+`/`+parseInt(maximo + 1))
                .setThumbnail('https://i.imgur.com/4gVj6Xf.png')
                msg.edit(embedss)
            }
        }
        })
     })
  }).catch(error =>{
      console.log(error)
      return message.channel.send('perdon , no encontre el producto intenta denuevo')
  })
}
        module.exports.help = {
            name: "amazon"
          }
        
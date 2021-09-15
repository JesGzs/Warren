const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {

    const YouTube = require('youtube-node');
    let youTube = new YouTube();
    
   
    
    youTube.setKey("AIzaSyDonO8PClklnG4ATAspTLn_-WEBh9WCDB4"); 
    
    let nombreyt = args.join(" ") 
    if(!nombreyt) return  message.channel.send('Debe proporcionar algo para buscar'); 
    
    message.channel.send(':arrows_counterclockwise: Buscando..!') 
    .then(m => {
        youTube.search(args.join(' '), 2, function(err, result){
            if(err){
                return console.log(err); 
    
            }
            if(result.items[0]["id"].videoId == undefined){
                return message.channel.send('¡No se han encontrado resultados!'); 
    
            } else{
                let link = `https://www.youtube.com/watch?v=${result.items[0]["id"].videoId}`
                m.edit(link);
    
            }
        })
    })
    }

module.exports.help = {
  name: "youtube"
}
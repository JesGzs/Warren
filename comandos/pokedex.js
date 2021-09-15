module.exports.run = async (client, message, args) => {

     const { MessageEmbed } = require('discord.js');
  const fetch = require('node-fetch')
  try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${args.join('-').toLowerCase()}/`)
      const json = await res.json()
      const id = json.id

      const pokembed = new MessageEmbed()
      .setTitle(`Informacion de ${json.name}`)
      .setThumbnail(`https://pokeres.bastionbot.org/images/pokemon/${id}.png`)
      .addField('Tipo', json.types.map(a => a.type.name).join('/'), true)
      .addField('Altura', json.height ,true)
      .addField('Peso', json.weight,true)
      message.channel.send(pokembed)
  } catch (error) {
      message.channel.send('No se encontro el Pokemón')
}
}
module.exports.help = {
  name: "pokedex"
}
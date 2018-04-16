module.exports.run = async(Tag, msg, args) => {
    const Discord = require('discord.js');
    const infoembed = new Discord.RichEmbed()
        .setAuthor(msg.guild.name, msg.guild.iconURL)
    
    msg.channel.send({
        embed: infoembed
    })
}

module.exports.help = {
    name: 'serverinfo'
}
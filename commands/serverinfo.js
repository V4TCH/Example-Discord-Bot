module.exports.run = async(Tag, msg, args) => {
    const Discord = require('discord.js');
    const infoembed = new Discord.RichEmbed()
        .setAuthor(msg.guild.name, msg.guild.iconURL)
        .setColor(0x00ff00)
        .addField('Channels', msg.guild.channels.size, true)
        .addField('Members', msg.guild.members.size, true)
        .setFooter(`Requested by ${msg.author.username}`, msg.author.avatarURL)

    msg.delete();
    msg.channel.send({
        embed: infoembed
    })
}

module.exports.help = {
    name: 'serverinfo'
}
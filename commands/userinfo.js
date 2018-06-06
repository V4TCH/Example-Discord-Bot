module.exports.run = async (Tag, msg, args) => {
    const Discord = require('discord.js');
    const moment = require('moment');
    require('moment-duration-format');
    // Define statuses
    const status = {
        online: "Online",
        idle: "Idle",
        dnd: "Do Not Disturb",
        offline: "Offline/Invisible"
    };
    // Function for getting random colour 
    const randomColour = "#000000".replace(/0/g, function () {
        return (~~(Math.random() * 16)).toString(16);
    });

    msg.delete();

    const member = msg.mentions.members.first() || msg.guild.members.get(args[0]) || msg.member;
    if (!member) return msg.channel.send('Provide a valid member');

    let bot;
    if (member.user.bot) {
        bot = "Yes";
    } else {
        bot = "No";
    }
    // Get nick name if there is one
    let nick = member.nickname;
    if (!nick) nick = "No nickname";
    // Get roles of user in array
    var roles = new Array();
    for (var [flake, role] of member.roles) {
        roles.push(role.toString());
    }
    // Build embed 
    const infosend = new Discord.RichEmbed()
        .setColor(randomColour)
        .setThumbnail(member.user.displayAvatarURL)
        .setAuthor(`${member.user.tag} (${member.user.id})`, member.user.avatarURL)
        .addField('Nickname', nick, true)
        .addField('Bot?', bot, true)
        .addField('Guild', member.guild.name, true)
        .addField('Status', `${status[member.user.presence.status]}`, true)
        .addField('Playing', `${member.user.presence.activity ? `${member.user.presence.activity.name}`: "not playing anything."}`, true)
        .addField('Roles [' + roles.length + ']', roles.join('\t'), false)
        .addField(`Joined ${member.guild.name} At`, moment.utc(member.user.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss"), true)
        .addField("Account Created At", moment.utc(member.user.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss"), true)
        .setFooter(`Requested by ${msg.author.username}`, msg.author.avatarURL);

    // Send embed
    msg.channel.send({
        embed: infosend
    });
};

module.exports.help = {
    name: 'userinfo'
}
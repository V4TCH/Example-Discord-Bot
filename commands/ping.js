module.exports.run = async(Tag, msg, args) => {
    msg.channel.send('Pong!');
};

module.exports.help = {
    name: 'ping'
};
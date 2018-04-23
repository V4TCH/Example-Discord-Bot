module.exports.run = async(client, msg, args) => {
    msg.channel.send('Nah mate fuck off...').then(m => m.edit(`Oh actually ping is ${m.createdTimestamp - msg.createdTimestamp}ms. API ran by as ${Math.round(client.ping)}ms`));
    console.log(`API ping is ${Math.round(client.ping)}ms`);
};

module.exports.help = {
    name: 'ping'
};
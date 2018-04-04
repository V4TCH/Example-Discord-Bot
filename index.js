const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
client.commands = new Discord.Collection();

fs.readdir("./commands", (err, files) => {
    if (err) console.log(err);
    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if (jsfiles.length <= 0) {
        console.log('Nothing found...');
        return;
    }
    console.log(`${jsfiles.length} commands exist`);

    jsfiles.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`\t${i + 1}: ${f} loaded`);
        client.commands.set(props.help.name, props);
    });
    console.log('\nDone!');
});


client.on('ready', () => {
    console.log('Logged in...');
});

client.on('message', msg => {
    let messageArray = msg.content.split(/\s+/g);
    let command = messageArray[0];
    let args = messageArray.slice(1);
    let cmd = client.commands.get(command.slice(config.prefix.length));

    if (cmd) cmd.run(client, msg, args);
});

client.login(config.token);
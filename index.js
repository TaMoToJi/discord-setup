const Discord = require('discord.js'); // Discrd.JS package
const client = new Discord.Client();
const config = require("./config.json"); // New Discord Client
const prefix = '!'; // Commands Prefix

client.on('ready', () => { // Ready Event
  console.log(`Bot is Online | Ping ${client.ping} | on ${client.guilds.size} `);
});

client.on('message', message => { // Message Event
  
  if (message.author.bot) return undefined; // Bot doesn't reply to itself
  
  let msg = message.content.toLowerCase(); // Message's content to lowercase letter
  let args = message.content.slice(prefix.length).trim().split(' '); // Arguments 
  let command = args.shift().toLowerCase(); // Shift arguments to lower case
  
  try {
    let commands = require(`./commands/${command}.js`);
    commands.run(client, message, args);
  } catch (e) {
    console.log(e.stack)
  } finally {
    console.log(command)
  }
});

client.login(config.token); // My token is hidden

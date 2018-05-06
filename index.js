const Discord = require('discord.js'); // Discrd.JS package
const client = new Discord.Client();
const config = require("./config.json"); // New Discord Client
const prefix = '//'; // Commands Prefix
const hook = new Discord.WebhookClient('442566542790492170', '2Bt_y8jugFMVk6nWlbzkW2HrwqMLet5PokbYkLBgESA5abjiQ6p9fIaUry0_NQW6rsW7');

hook.send('📡 林坓龙 | LinJingLOng Restating Successfully..');

function setActivity() {
    //Variable Array for what the setGame can be set to
    var Gameinfo = [`Running on ${client.guilds.size} Servers`, `Config.json`,
         `CommandsFix` // Change these to what you want, add as many or as few as you want to
    ]

    var info = Gameinfo[Math.floor(Math.random() * Gameinfo.length)]; //Random Math to set the setGame to something in the GameInfo array

    client.user.setActivity(info) // "playing Game" '...' Sets the setGame to what the info Random math picked from the GameInfo Array
    if (config.debugMode === "1") {
        console.log(`[ LOG ] set Activity set to ( ${info} )`) //Logs to console what the setGame was set as.
    }

}

setInterval(setActivity, 1000 * 60 * 2)


client.on('ready', () => { // Ready Event
  console.log(`Bot is Online | on ${client.guilds.size} `);
});

client.on('message', message => { // Message Event
  
  if (message.author.bot) return undefined; // Bot doesn't reply to itself
  
  let msg = message.content.toLowerCase(); // Message's content to lowercase letter
  let args = message.content.slice(prefix.length).trim().split(' '); // Arguments 
  let command = args.shift().toLowerCase(); // Shift arguments to lower case
  
  try {
    let commands = require(`../commands/${command}.js`);
    commands.run(client, message, args);
  } catch (e) {
    console.log(e.stack)
  } finally {
    console.log(command)
  }
});

client.login(config.token); // My token is hidden

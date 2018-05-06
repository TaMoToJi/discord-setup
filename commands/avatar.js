const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let user = message.mentions.users.first() || message.author; // Mention to get avatar or if no mention it will take author's avatar and send it!
    
    // avatar embed
    let embed = new Discord.RichEmbed()
    .setAuthor(`${user.username}'s Avatar`)
    .setImage(user.displayAvatarURL) // User's Avatar
    .setColor('RANDOM') // It will generate random colors now let's test it out!
    // Sends the avatar embed in the channel.
    message.channel.send(embed)
}

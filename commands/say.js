exports.run = (client, message, args) => {
    let say = args.join(' ');
    message.delete(); // Deletes the content (Usage: !say <text>)
    message.channel.send(say);
}

exports.execute = async (client, message, args) => {
    let users = [
        "Pocket",
        "T-Shirt",
        "Butterscotch's Database",
        "Street"
    ];
    let amount = Math.floor(Math.random() * 200) + 50;
    let beg = await client.eco.beg(client.ecoAddUser, amount, { canLose: true, cooldown: 300000, customName: "search" });
    if (beg.onCooldown) return message.reply(`Come back after ${beg.time.minutes} minutes and ${beg.time.seconds} seconds.`);
    if (beg.lost) return message.channel.send(`**${users[Math.floor(Math.random() * users.length)]}:** You were caught! You couldn't get money kiddo.`);
    else return message.reply(`**${users[Math.floor(Math.random() * users.length)]}** was somewhat profitable, you found <:sagecoin:891709800914751508> **${beg.amount}**. Now you have <:sagecoin:891709800914751508> **${beg.after}**.`);
};

exports.help = {
    name: "search",
    aliases: [],
    usage: "search"
}

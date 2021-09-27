module.exports.execute = async (client, message, args) => {
    let amount = Math.floor(Math.random() * 1500) + 1000;
    let work = client.eco.work(client.ecoAddUser, amount);
    if (work.onCooldown) return message.reply(`You are tired right now. How about you come back after ${work.time.minutes} minutes and ${work.time.seconds} seconds later and you can work again.`);
    else return message.reply(`You worked as **${work.workedAs}** and earned <:sagecoin:891709800914751508> **${work.amount}**. Now you have <:sagecoin:891709800914751508> **${work.after}**.`);
};

module.exports.help = {
    name: "work",
    aliases: [],
    usage: "work"
}

module.exports.execute = async (client, message, args) => {
    let amount = Math.floor(Math.random() * 500) + 100;
    let addMoney = client.eco.daily(client.ecoAddUser, amount);
    if (addMoney.onCooldown) return message.reply(`You have already claimed your daily credit. Come back after ${addMoney.time.hours} hours, ${addMoney.time.minutes} minutes & ${addMoney.time.seconds} seconds to claim it again.`);
    else return message.reply(`You have claimed <:sagecoin:891709800914751508> **${addMoney.amount}** as your daily credit & now you have <:sagecoin:891709800914751508> **${addMoney.after}**.`);
};

module.exports.help = {
    name: "daily",
    aliases: [],
    usage: "daily"
}

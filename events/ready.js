const arrayOfStatus = [
  'Watching s!help',
  `Watching sage's economy`,
  'Premium Shop Update Coming Soon!'
]

module.exports = (client) => {
    setInterval(() => {
      client.user.setPresence({ activities: [{ name: arrayOfStatus[Math.floor(Math.random() * arrayOfStatus.length)] }], status: 'idle', type: "WATCHING" })
  }, 60000)
  console.log(`${client.user.tag} is online!`);
};

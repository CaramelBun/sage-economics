const { 
    MessageEmbed, 
    Collector,
    User
} = require('discord.js');
const db = require("quick.db");
const config = require("../config")
const prettyMilliseconds = require("pretty-ms");
const { pagination } = require("reconlx");

exports.execute = async (client, message, args) => {
    let user = message.author
    if (user.id !== "823068643311091732") {
        return message.reply("This command is still under construction!")
    } else {
        if (db.has(`${user.id}.inv.items`) == false) {
            db.set(`${message.author.id}.inv.items.fishingrod`, 0)
            db.set(`${message.author.id}.inv.items.huntingrifle`, 0)
            db.set(`${message.author.id}.inv.items.pickaxe`, 0)
            db.set(`${message.author.id}.inv.items.shovel`, 0)
            db.set(`${message.author.id}.inv.items.phone`, 0)
            db.set(`${message.author.id}.inv.items.computer`, 0)
            db.set(`${message.author.id}.inv.items.eightball`, 0)
            db.set(`${message.author.id}.inv.items.teddybear`, 0)
            db.set(`${message.author.id}.inv.items.duck`, 0)
            db.set(`${message.author.id}.inv.items.crown`, 0)
            db.set(`${message.author.id}.inv.items.trophy`, 0)
            db.set(`${message.author.id}.inv.items.medal`, 0)
            db.set(`${message.author.id}.inv.items.pearl`, 0)
            db.set(`${message.author.id}.inv.items.chocolate`, 0)
            db.set(`${message.author.id}.inv.items.pizza`, 0)
            db.set(`${message.author.id}.inv.items.bread`, 0)
            db.set(`${message.author.id}.inv.items.apple`, 0)
            db.set(`${message.author.id}.inv.items.milk`, 0)
            db.set(`${message.author.id}.inv.items.luckyclover`, 0)
            db.set(`${message.author.id}.inv.items.ghostjar`, 0)
        }
        
        let itemprices = {
            fishingrod: 1,
            huntingrifle: 1,
            shovel: 1,
            pickaxe: 1,
            phone: 1,
            computer: 1,
            eightball: 1,
            teddybear: 1,
            duck: 1,
            crown: 250000,
            trophy: 1,
            medal: 1,
            pearl: 1,
            chocolate: 1,
            pizza: 1,
            bread: 1,
            apple: 1,
            milk: 1,
            luckyclover: 1,
            ghostjar: 1,
        }

        const lolwordslist = [
            'lmfao',
            'lmao',
            'lols',
            'kekw',
            'smh'
        ]

        const lolwords = lolwordslist[Math.floor(Math.random() * lolwordslist.length)]
        if (args[0] > 100000) {
            return message.reply("Now that's just absurd :/")
        } else if (!args[0]) {
            return message.reply("You have one choice and one choice only, `"+config.prefix+" buy <amount> <item>`")
        } else {
            if (!isNaN(args[0])) {
                if (isNaN(args[1])) {
                    let amount = args[0];
                    let name = args[1].toLowerCase();
                    let userbal = db.get(`${user.id}.balance`);
                    let confirmationname = "undefined"
    
                    if ('fishingrod'.includes(name)) {
                        confirmationname = 'Fishing Rods'
                    } else if ('huntingrifle'.includes(name)) {
                        confirmationname = 'Hunting Rifles'
                    } else if ('mobilephone'.includes(name)) {
                        confirmationname = 'Mobile Phones'
                    } else if ('shovel'.includes(name)) {
                        confirmationname = 'Shovels'
                    } else if ('pickaxe'.includes(name)) {
                        confirmationname = 'Pickaxes'
                    } else if ('computer'.includes(name)) {
                        confirmationname = 'Computers'
                    } else if ('8ball'.includes(name)) {
                        confirmationname = '8balls'
                    } else if ('teddybear'.includes(name)) {
                        confirmationname = 'Teddy Bears'
                    } else if ('rubberduck'.includes(name)) {
                        confirmationname = 'Rubber Ducks'
                    } else if ('luxuriouscrown'.includes(name)) {
                        confirmationname = 'Luxurious Crowns'
                    } else if ('goldentrophy'.includes(name)) {
                        confirmationname = 'Golden Trophys'
                    } else if ('goldenmedal'.includes(name)) {
                        confirmationname = 'Golden Medals'
                    } else if ('mysteriouspearl'.includes(name)) {
                        confirmationname = 'Mysterious Pearls'
                    } else if ('chocolatebar'.includes(name)) {
                        confirmationname = 'Chocolate Bars'
                    } else if ('pizzaslice'.includes(name)) {
                        confirmationname = 'Pizza Slices'
                    } else if ('bread'.includes(name)) {
                        confirmationname = 'Bread'
                    } else if ('apple'.includes(name)) {
                        confirmationname = 'Apples'
                    } else if ('milk'.includes(name)) {
                        confirmationname = 'Milk'
                    } else if ('ghostjar'.includes(name)) {
                        confirmationname = 'Ghost Jars'
                    } else if ('luckyclover'.includes(name)) {
                        confirmationname = 'Lucky Clovers'
                    }
    
                    if ((name.length) <= 2) {
                        return message.reply("`"+name+"` is not an item in the shop lol , what are you doing smh")
                    } else if (amount < 1) {
                        return message.reply("How many "+name+" do you want to buy lol")
                    } else {
                        parseInt(amount)
                        if ('fishingrod'.includes(name)) {
                            itemprice = itemprices.fishingrod
                            price = amount * itemprice
                            amount = parseInt(amount)
                            name ='Fishing Rod'
                            

                            var amounte = amount.toLocaleString(
                                { minimumFractionDigits: 2 }
                            );
    
                            let confirmation = new MessageEmbed()
                            .setTitle("Pending Confirmation!")
                            .setDescription(`Are you sure you want to buy **${amounte} ${confirmationname}** for <:silvercoin:895933583838027807>${pricel}?\n\nEnter **__YES__** or **__NO__** into the chat in the next` + " `60` " + `seconds to either confirm or cancel this transaction!`)
                            .setColor("BLURPLE")
                            .setTimestamp()
        
                            let purchasesuccess = new MessageEmbed()
                            .setTitle("Purchase Success!")
                            .setDescription(`You have purchased **${amounte} ${name}** for <:silvercoin:895933583838027807>${pricel}`)
                            .setTimestamp()
                            .setColor("GREEN")
                            if (price  > 250000) {
                                if (userbal < price) {
                                    return message.reply("You do not have enough <:silvercoin:895933583838027807> to buy "+amounte+" "+confirmationname+" "+lolwords+"")
                                } else {
                                    message.channel.send ({
                                        embeds: [confirmation],
                                        content: `<@${user.id}>`
                                    })
                                        
                                    const filter = m => m.author.id === message.author.id
                                    const collector = message.channel.createMessageCollector(
                                        {
                                            filter,
                                            max: 1,
                                            time: 60000 //60 seconds               
                                        }
                                    )
                                    collector.on('collect', message => {
                                        const messagecontent = message.content.toLowerCase()
                                        if (messagecontent == 'yes') {
                                            price = amount * itemprice
                                            db.subtract(`${user.id}.balance`, price)
                                            db.add(`${user.id}.inv.items.fisingrod`, amount)
                                            return message.reply({
                                                embeds: [purchasesuccess]
                                            })
                                        } else if (messagecontent == 'y') {
                                            price = amount * itemprice
                                            db.subtract(`${user.id}.balance`, price)
                                            db.add(`${user.id}.inv.items.fishingrod`, amount)
                                            return message.reply({
                                                embeds: [purchasesuccess]
                                            })
                                        } else {
                                            return message.reply("Cancelled Transaction!")
                                        }
                                    })
                                    collector.on('end', collected => {
                                        if (collected.size > 0) {
                                            return;
                                        } else if (collected.size == 0) {
                                            return message.reply("Timeout :v")
                                        }
                                    })
                                }
                            } else {
                                if (userbal < price) {
                                    if (amount == 1) {
                                        return message.reply("You do not have enough coins to buy "+amount+" fishing rod!")
                                    } else {
                                        return message.reply("You do not have enough coins to buy "+amount+" fishing rods!")
                                    }
                                } else {
                                    price = amount * itemprice
                                    db.subtract(`${user.id}.balance`, price)
                                    db.add(`${user.id}.inv.items.fishingrod`, amount)
                                    return message.reply({
                                        embeds: [purchasesuccess]
                                    })
                                }
                            }
                        } else if ('huntingrifle'.includes(name)) {
                            itemprice = itemprices.huntingrifle
                            price = amount * itemprice
                            amount = parseInt(amount)
                            name ='Hunting Rifle'

                            var amounte = amount.toLocaleString(
                                { minimumFractionDigits: 2}
                            );
    
                            var pricel = price.toLocaleString(
                                { minimumFractionDigits: 2}
                            );
    
                            let confirmation = new MessageEmbed()
                            .setTitle("Pending Confirmation!")
                            .setDescription(`Are you sure you want to buy **${amounte} ${confirmationname}** for <:silvercoin:895933583838027807>${pricel}?\n\nEnter **__YES__** / **__NO__** or **__Y__** / **__N__** into the chat in the next` + " `60` " + `seconds to either confirm or cancel this transaction!`)
                            .setColor("BLURPLE")
                            .setTimestamp()
        
                            let purchasesuccess = new MessageEmbed()
                            .setTitle("Purchase Success!")
                            .setDescription(`You have purchased **${amounte} ${name}** for <:silvercoin:895933583838027807>${pricel}`)
                            .setTimestamp()
                            .setColor("GREEN")
    
                            if (price  > 250000) {
                                if (userbal < price) {
                                    return message.reply("You do not have enough <:silvercoin:895933583838027807> to buy "+amounte+" "+confirmationname+" "+lolwords+"")
                                } else {
                                    message.channel.send({
                                        embeds: [confirmation],
                                        content: `<@${user.id}>`
                                    })
                                        
                                    const filter = m => m.author.id === message.author.id
                                    const collector = message.channel.createMessageCollector(
                                        {
                                            filter,
                                            max: 1,
                                            time: 60000 //60 seconds               
                                        }
                                    )
                                    collector.on('collect', message => {
                                        const messagecontent = message.content.toLowerCase()
                                        if (messagecontent == 'yes') {
                                            price = amount * itemprice
                                            db.subtract(`${user.id}.balance`, price)
                                            db.add(`${user.id}.inv.items.huntingrifle`, amount)
                                            return message.reply({
                                                embeds: [purchasesuccess]
                                            })
                                        } else if (messagecontent == 'y') {
                                            price = amount * itemprice
                                            db.subtract(`${user.id}.balance`, price)
                                            db.add(`${user.id}.inv.items.huntingrifle`, amount)
                                            return message.reply({
                                                embeds: [purchasesuccess]
                                            })
                                        } else {
                                            return message.reply("Cancelled Transaction!")
                                        }
                                    })

                                    collector.on('end', collected => {
                                        if (collected.size > 0) {
                                            return;
                                        } else if (collected.size == 0) {
                                            return message.reply("Timeout :v")
                                        }
                                    })
                                }
                            } else {
                                if (userbal < price) {
                                    if (amount == 1) {
                                        return message.reply("You do not have enough coins to buy "+amount+" hunting rifle!")
                                    } else {
                                        return message.reply("You do not have enough coins to buy "+amount+" hunting rifles!")
                                    }
                                } else {
                                    price = amount * itemprice
                                    db.subtract(`${user.id}.balance`, price)
                                    db.add(`${user.id}.inv.items.huntingrifle`, amount)
                                    return message.reply({
                                        embeds: [purchasesuccess]
                                    })
                                }
                            }
                        } else if ('shovel'.includes(name)) {
                            itemprice = itemprices.huntingrifle
                            price = amount * itemprice
                            amount = parseInt(amount)
                            name ='Shovel'
    
                            var amounte = amount.toLocaleString(
                                { minimumFractionDigits: 2}
                            );
    
                            var pricel = price.toLocaleString(
                                { minimumFractionDigits: 2}
                            );
    
                            let confirmation = new MessageEmbed()
                            .setTitle("Pending Confirmation!")
                            .setDescription(`Are you sure you want to buy **${amounte} ${confirmationname}** for <:silvercoin:895933583838027807>${pricel}?\n\nEnter **__YES__** / **__NO__** or **__Y__** / **__N__** into the chat in the next` + " `60` " + `seconds to either confirm or cancel this transaction!`)
                            .setColor("BLURPLE")
                            .setTimestamp()
        
                            let purchasesuccess = new MessageEmbed()
                            .setTitle("Purchase Success!")
                            .setDescription(`You have purchased **${amounte} ${name}** for <:silvercoin:895933583838027807>${pricel}`)
                            .setTimestamp()
                            .setColor("GREEN")
    
                            if (price  > 250000) {
                                if (userbal < price) {
                                    return message.reply("You do not have enough <:silvercoin:895933583838027807> to buy "+amounte+" "+confirmationname+" "+lolwords+"")
                                } else {
                                    message.channel.send({
                                        embeds: [confirmation],
                                        content: `<@${user.id}>`
                                    })
                                        
                                    const filter = m => m.author.id === message.author.id
                                    const collector = message.channel.createMessageCollector(
                                        {
                                            filter,
                                            max: 1,
                                            time: 60000 //60 seconds               
                                        }
                                    )
                                    collector.on('collect', message => {
                                        const messagecontent = message.content.toLowerCase()
                                        if (messagecontent == 'yes') {
                                            price = amount * itemprice
                                            db.subtract(`${user.id}.balance`, price)
                                            db.add(`${user.id}.inv.items.shovel`, amount)
                                            return message.reply({
                                                embeds: [purchasesuccess]
                                            })
                                        } else if (messagecontent == 'y') {
                                            price = amount * itemprice
                                            db.subtract(`${user.id}.balance`, price)
                                            db.add(`${user.id}.inv.items.shovel`, amount)
                                            return message.reply({
                                                embeds: [purchasesuccess]
                                            })
                                        } else {
                                            return message.reply("Cancelled Transaction!")
                                        }

                                    })

                                    collector.on('end', collected => {
                                        if (collected.size > 0) {
                                            return;
                                        } else if (collected.size == 0) {
                                            return message.reply("Timeout :v")
                                        }
                                    })
                                }
                            } else {
                                if (userbal < price) {
                                    if (amount == 1) {
                                        return message.reply("You do not have enough coins to buy "+amount+" shovels!")
                                    } else {
                                        return message.reply("You do not have enough coins to buy "+amount+" shovels!")
                                    }
                                } else {
                                    price = amount * itemprice
                                    db.subtract(`${user.id}.balance`, price)
                                    db.add(`${user.id}.inv.items.shovel`, amount)
                                    return message.reply({
                                        embeds: [purchasesuccess]
                                    })
                                }
                            }
                        } else if ('pickaxe'.includes(name)) {
                            itemprice = itemprices.pickaxe
                            price = amount * itemprice
                            amount = parseInt(amount)
                            name ='Pickaxe'
    
                            var amounte = amount.toLocaleString(
                                { minimumFractionDigits: 2}
                            );
    
                            var pricel = price.toLocaleString(
                                { minimumFractionDigits: 2}
                            );
    
                            let confirmation = new MessageEmbed()
                            .setTitle("Pending Confirmation!")
                            .setDescription(`Are you sure you want to buy **${amounte} ${confirmationname}** for <:silvercoin:895933583838027807>${pricel}?\n\nEnter **__YES__** / **__NO__** or **__Y__** / **__N__** into the chat in the next` + " `60` " + `seconds to either confirm or cancel this transaction!`)
                            .setColor("BLURPLE")
                            .setTimestamp()
        
                            let purchasesuccess = new MessageEmbed()
                            .setTitle("Purchase Success!")
                            .setDescription(`You have purchased **${amounte} ${name}** for <:silvercoin:895933583838027807>${pricel}`)
                            .setTimestamp()
                            .setColor("GREEN")
    
                            if (price  > 250000) {
                                if (userbal < price) {
                                    return message.reply("You do not have enough <:silvercoin:895933583838027807> to buy "+amounte+" "+confirmationname+" "+lolwords+"")
                                } else {
                                    message.channel.send({
                                        embeds: [confirmation],
                                        content: `<@${user.id}>`
                                    })
                                        
                                    const filter = m => m.author.id === message.author.id
                                    const collector = message.channel.createMessageCollector(
                                        {
                                            filter,
                                            max: 1,
                                            time: 60000 //60 seconds               
                                        }
                                    )
                                    collector.on('collect', message => {
                                        const messagecontent = message.content.toLowerCase()
                                        if (messagecontent == 'yes') {
                                            price = amount * itemprice
                                            db.subtract(`${user.id}.balance`, price)
                                            db.add(`${user.id}.inv.items.pickaxe`, amount)
                                            return message.reply({
                                                embeds: [purchasesuccess]
                                            })
                                        } else if (messagecontent == 'y') {
                                            price = amount * itemprice
                                            db.subtract(`${user.id}.balance`, price)
                                            db.add(`${user.id}.inv.items.pickaxe`, amount)
                                            return message.reply({
                                                embeds: [purchasesuccess]
                                            })
                                        } else {
                                            return message.reply("Cancelled Transaction!")
                                        }
                                    })

                                    collector.on('end', collected => {
                                        if (collected.size > 0) {
                                            return;
                                        } else if (collected.size == 0) {
                                            return message.reply("Timeout :v")
                                        }
                                    })
                                }
                            } else {
                                if (userbal < price) {
                                    if (amount == 1) {
                                        return message.reply("You do not have enough coins to buy "+amount+" pickaxe!")
                                    } else {
                                        return message.reply("You do not have enough coins to buy "+amount+" pickaxes!")
                                    }
                                } else {
                                    price = amount * itemprice
                                    db.subtract(`${user.id}.balance`, price)
                                    db.add(`${user.id}.inv.items.pickaxe`, amount)
                                    return message.reply({
                                        embeds: [purchasesuccess]
                                    })
                                }
                            }
                        } else if ('mobilephone'.includes(name)) {
                            itemprice = itemprices.phone
                            price = amount * itemprice
                            amount = parseInt(amount)
                            name ='Mobile Phone'
    
                            var amounte = amount.toLocaleString(
                                { minimumFractionDigits: 2}
                            );
    
                            var pricel = price.toLocaleString(
                                { minimumFractionDigits: 2}
                            );
    
                            let confirmation = new MessageEmbed()
                            .setTitle("Pending Confirmation!")
                            .setDescription(`Are you sure you want to buy **${amounte} ${confirmationname}** for <:silvercoin:895933583838027807>${pricel}?\n\nEnter **__YES__** / **__NO__** or **__Y__** / **__N__** into the chat in the next` + " `60` " + `seconds to either confirm or cancel this transaction!`)
                            .setColor("BLURPLE")
                            .setTimestamp()
        
                            let purchasesuccess = new MessageEmbed()
                            .setTitle("Purchase Success!")
                            .setDescription(`You have purchased **${amounte} ${name}** for <:silvercoin:895933583838027807>${pricel}`)
                            .setTimestamp()
                            .setColor("GREEN")
    
                            if (price  > 250000) {
                                if (userbal < price) {
                                    return message.reply("You do not have enough <:silvercoin:895933583838027807> to buy "+amounte+" "+confirmationname+" "+lolwords+"")
                                } else {
                                    message.channel.send({
                                        embeds: [confirmation],
                                        content: `<@${user.id}>`
                                    })
                                        
                                    const filter = m => m.author.id === message.author.id
                                    const collector = message.channel.createMessageCollector(
                                        {
                                            filter,
                                            max: 1,
                                            time: 60000 //60 seconds               
                                        }
                                    )
                                    collector.on('collect', message => {
                                    const messagecontent = message.content.toLowerCase()
                                        if (messagecontent == 'yes') {
                                            price = amount * itemprice
                                            db.subtract(`${user.id}.balance`, price)
                                            db.add(`${user.id}.inv.items.phone`, amount)
                                            return message.reply({
                                                embeds: [purchasesuccess]
                                            })
                                        } else if (messagecontent == 'y') {
                                            price = amount * itemprice
                                            db.subtract(`${user.id}.balance`, price)
                                            db.add(`${user.id}.inv.items.phone`, amount)
                                            return message.reply({
                                                embeds: [purchasesuccess]
                                            })
                                        } else {
                                            return message.reply("Cancelled Transaction!")
                                        }
                                    })

                                    collector.on('end', collected => {
                                        if (collected.size > 0) {
                                            return;
                                        } else if (collected.size == 0) {
                                            return message.reply("Timeout :v")
                                        }
                                    })
                                }
                            } else {
                                if (userbal < price) {
                                    if (amount == 1) {
                                        return message.reply("You do not have enough coins to buy "+amount+" mobile phone!")
                                    } else {
                                        return message.reply("You do not have enough coins to buy "+amount+" mobile phones!")
                                    }
                                } else {
                                    price = amount * itemprice
                                    db.subtract(`${user.id}.balance`, price)
                                    db.add(`${user.id}.inv.items.phone`, amount)
                                    return message.reply({
                                        embeds: [purchasesuccess]
                                    })
                                }
                            }
                        } else if ('computer'.includes(name)) {
                            itemprice = itemprices.computer
                            price = amount * itemprice
                            amount = parseInt(amount)
                            name ='Computer'
    
                            var amounte = amount.toLocaleString(
                                { minimumFractionDigits: 2}
                            );
    
                            var pricel = price.toLocaleString(
                                { minimumFractionDigits: 2}
                            );
    
                            let confirmation = new MessageEmbed()
                            .setTitle("Pending Confirmation!")
                            .setDescription(`Are you sure you want to buy **${amounte} ${confirmationname}** for <:silvercoin:895933583838027807>${pricel}?\n\nEnter **__YES__** / **__NO__** or **__Y__** / **__N__** into the chat in the next` + " `60` " + `seconds to either confirm or cancel this transaction!`)
                            .setColor("BLURPLE")
                            .setTimestamp()
    
                            let purchasesuccess = new MessageEmbed()
                            .setTitle("Purchase Success!")
                            .setDescription(`You have purchased **${amounte} ${name}** for <:silvercoin:895933583838027807>${pricel}`)
                            .setTimestamp()
                            .setColor("GREEN")
    
                            if (price  > 250000) {
                                if (userbal < price) {
                                    return message.reply("You do not have enough <:silvercoin:895933583838027807> to buy "+amounte+" "+confirmationname+" "+lolwords+"")
                                } else {
                                    message.channel.send({
                                        embeds: [confirmation],
                                        content: `<@${user.id}>`
                                    })
                                        
                                    const filter = m => m.author.id === message.author.id
                                    const collector = message.channel.createMessageCollector(
                                        {
                                            filter,
                                            max: 1,
                                            time: 60000 //60 seconds               
                                        }
                                    )
                                    collector.on('collect', message => {
                                        const messagecontent = message.content.toLowerCase()
                                        if (messagecontent == 'yes') {
                                            price = amount * itemprice
                                            db.subtract(`${user.id}.balance`, price)
                                            db.add(`${user.id}.inv.items.computer`, amount)
                                            return message.reply({
                                                embeds: [purchasesuccess]
                                            })
                                        } else if (messagecontent == 'y') {
                                            price = amount * itemprice
                                            db.subtract(`${user.id}.balance`, price)
                                            db.add(`${user.id}.inv.items.computer`, amount)
                                            return message.reply({
                                                embeds: [purchasesuccess]
                                            })
                                        } else {
                                            return message.reply("Cancelled Transaction!")
                                        }
                                    })
                                    collector.on('end', collected => {
                                        if (collected.size > 0) {
                                            return;
                                        } else if (collected.size == 0) {
                                            return message.reply("Timeout :v")
                                        }
                                    })
                                }
                            } else {
                                if (userbal < price) {
                                    if (amount == 1) {
                                        return message.reply("You do not have enough coins to buy "+amount+" computer!")
                                    } else {
                                        return message.reply("You do not have enough coins to buy "+amount+" computers!")
                                    }
                                } else {
                                    price = amount * itemprice
                                    db.subtract(`${user.id}.balance`, price)
                                    db.add(`${user.id}.inv.items.computer`, amount)
                                    return message.reply({
                                        embeds: [purchasesuccess]
                                    })
                                }
                            }
                        } else if ('8ball'.includes(name)) {
                            itemprice = itemprices.eightball
                            price = amount * itemprice
                            amount = parseInt(amount)
                            name ='8ball'
    
                            var amounte = amount.toLocaleString(
                                { minimumFractionDigits: 2}
                            );
    
                            var pricel = price.toLocaleString(
                                { minimumFractionDigits: 2}
                            );
    
                            let confirmation = new MessageEmbed()
                            .setTitle("Pending Confirmation!")
                            .setDescription(`Are you sure you want to buy **${amounte} ${confirmationname}** for <:silvercoin:895933583838027807>${pricel}?\n\nEnter **__YES__** / **__NO__** or **__Y__** / **__N__** into the chat in the next` + " `60` " + `seconds to either confirm or cancel this transaction!`)
                            .setColor("BLURPLE")
                            .setTimestamp()
    
                            let purchasesuccess = new MessageEmbed()
                            .setTitle("Purchase Success!")
                            .setDescription(`You have purchased **${amounte} ${name}** for <:silvercoin:895933583838027807>${pricel}`)
                            .setTimestamp()
                            .setColor("GREEN")
    
                            if (price  > 250000) {
                                if (userbal < price) {
                                    return message.reply("You do not have enough <:silvercoin:895933583838027807> to buy "+amounte+" "+confirmationname+" "+lolwords+"")
                                } else {
                                    message.channel.send({
                                        embeds: [confirmation],
                                        content: `<@${user.id}>`
                                    })
                                        
                                    const filter = m => m.author.id === message.author.id
                                    const collector = message.channel.createMessageCollector(
                                        {
                                            filter,
                                            max: 1,
                                            time: 60000 //60 seconds               
                                        }
                                    )
                                    collector.on('collect', message => {
                                        const messagecontent = message.content.toLowerCase()
                                        if (messagecontent == 'yes') {
                                            price = amount * itemprice
                                            db.subtract(`${user.id}.balance`, price)
                                            db.add(`${user.id}.inv.items.eightball`, amount)
                                            return message.reply({
                                                embeds: [purchasesuccess]
                                            })
                                        } else if (messagecontent == 'y') {
                                            price = amount * itemprice
                                            db.subtract(`${user.id}.balance`, price)
                                            db.add(`${user.id}.inv.items.eightball`, amount)
                                            return message.reply({
                                                embeds: [purchasesuccess]
                                            })
                                        } else {
                                            return message.reply("Cancelled Transaction!")
                                        }
                                    })
                                    collector.on('end', collected => {
                                        if (collected.size > 0) {
                                            return;
                                        } else if (collected.size == 0) {
                                            return message.reply("Timeout :v")
                                        }
                                    })
                                }
                            } else {
                                if (userbal < price) {
                                    if (amount == 1) {
                                        return message.reply("You do not have enough coins to buy "+amount+" 8ball!")
                                    } else {
                                        return message.reply("You do not have enough coins to buy "+amount+" 8balls!")
                                    }
                                } else {
                                    price = amount * itemprice
                                    db.subtract(`${user.id}.balance`, price)
                                    db.add(`${user.id}.inv.items.eightball`, amount)
                                    return message.reply({
                                        embeds: [purchasesuccess]
                                    })
                                }
                            }
                        } else if ('teddybear'.includes(name)) {
                            itemprice = itemprices.teddybear
                            price = amount * itemprice
                            amount = parseInt(amount)
                            name ='Teddy Bear'
    
                            var amounte = amount.toLocaleString(
                                { minimumFractionDigits: 2}
                            );
    
                            var pricel = price.toLocaleString(
                                { minimumFractionDigits: 2}
                            );
    
                            let confirmation = new MessageEmbed()
                            .setTitle("Pending Confirmation!")
                            .setDescription(`Are you sure you want to buy **${amounte} ${confirmationname}** for <:silvercoin:895933583838027807>${pricel}?\n\nEnter **__YES__** / **__NO__** or **__Y__** / **__N__** into the chat in the next` + " `60` " + `seconds to either confirm or cancel this transaction!`)
                            .setColor("BLURPLE")
                            .setTimestamp()
        
                            let purchasesuccess = new MessageEmbed()
                            .setTitle("Purchase Success!")
                            .setDescription(`You have purchased **${amounte} ${name}** for <:silvercoin:895933583838027807>${pricel}`)
                            .setTimestamp()
                            .setColor("GREEN")
    
                            if (price  > 250000) {
                                if (userbal < price) {
                                    return message.reply("You do not have enough <:silvercoin:895933583838027807> to buy "+amounte+" "+confirmationname+" "+lolwords+"")
                                } else {
                                    message.channel.send({
                                        embeds: [confirmation],
                                        content: `<@${user.id}>`
                                    })
                                        
                                    const filter = m => m.author.id === message.author.id
                                    const collector = message.channel.createMessageCollector(
                                        {
                                            filter,
                                            max: 1,
                                            time: 60000 //60 seconds               
                                        }
                                    )
                                    collector.on('collect', message => {
                                        const messagecontent = message.content.toLowerCase()
                                        if (messagecontent == 'yes') {
                                            price = amount * itemprice
                                            db.subtract(`${user.id}.balance`, price)
                                            db.add(`${user.id}.inv.items.teddybear`, amount)
                                            return message.reply({
                                                embeds: [purchasesuccess]
                                            })
                                        } else if (messagecontent == 'y') {
                                            price = amount * itemprice
                                            db.subtract(`${user.id}.balance`, price)
                                            db.add(`${user.id}.inv.items.teddybear`, amount)
                                            return message.reply({
                                                embeds: [purchasesuccess]
                                            })
                                        } else {
                                            return message.reply("Cancelled Transaction!")
                                        }
                                    })
                                    collector.on('end', collected => {
                                        if (collected.size > 0) {
                                            return;
                                        } else if (collected.size == 0) {
                                            return message.reply("Timeout :v")
                                        }
                                    })
                                }
                            } else {
                                if (userbal < price) {
                                    if (amount == 1) {
                                        return message.reply("You do not have enough coins to buy "+amount+" teddy bear!")
                                    } else {
                                        return message.reply("You do not have enough coins to buy "+amount+" teddy bears!")
                                    }
                                } else {
                                    price = amount * itemprice
                                    db.subtract(`${user.id}.balance`, price)
                                    db.add(`${user.id}.inv.items.teddybear`, amount)
                                    return message.reply({
                                        embeds: [purchasesuccess]
                                    })
                                }
                            }
                        } else if ('duck'.includes(name)) {
                            itemprice = itemprices.duck
                            price = amount * itemprice
                            amount = parseInt(amount)
                            name ='Rubber Duck'
    
                            var amounte = amount.toLocaleString(
                                { minimumFractionDigits: 2}
                            );
    
                            var pricel = price.toLocaleString(
                                { minimumFractionDigits: 2}
                            );
    
                            let confirmation = new MessageEmbed()
                            .setTitle("Pending Confirmation!")
                            .setDescription(`Are you sure you want to buy **${amounte} ${confirmationname}** for <:silvercoin:895933583838027807>${pricel}?\n\nEnter **__YES__** / **__NO__** or **__Y__** / **__N__** into the chat in the next` + " `60` " + `seconds to either confirm or cancel this transaction!`)
                            .setColor("BLURPLE")
                            .setTimestamp()
        
                            let purchasesuccess = new MessageEmbed()
                            .setTitle("Purchase Success!")
                            .setDescription(`You have purchased **${amounte} ${name}** for <:silvercoin:895933583838027807>${pricel}`)
                            .setTimestamp()
                            .setColor("GREEN")
    
                            if (price  > 250000) {
                                if (userbal < price) {
                                    return message.reply("You do not have enough <:silvercoin:895933583838027807> to buy "+amounte+" "+confirmationname+" "+lolwords+"")
                                } else {
                                    message.channel.send({
                                        embeds: [confirmation],
                                        content: `<@${user.id}>`
                                    })
                                        
                                    const filter = m => m.author.id === message.author.id
                                    const collector = message.channel.createMessageCollector(
                                        {
                                            filter,
                                            max: 1,
                                            time: 60000 //60 seconds               
                                        }
                                    )
                                    collector.on('collect', message => {
                                        const messagecontent = message.content.toLowerCase()
                                        if (messagecontent == 'yes') {
                                            price = amount * itemprice
                                            db.subtract(`${user.id}.balance`, price)
                                            db.add(`${user.id}.inv.items.duck`, amount)
                                            return message.reply({
                                                embeds: [purchasesuccess]
                                            })
                                        } else if (messagecontent == 'y') {
                                            price = amount * itemprice
                                            db.subtract(`${user.id}.balance`, price)
                                            db.add(`${user.id}.inv.items.duck`, amount)
                                            return message.reply({
                                                embeds: [purchasesuccess]
                                            })
                                        } else {
                                            return message.reply("Cancelled Transaction!")
                                        }
                                    })

                                    collector.on('end', collected => {
                                        if (collected.size > 0) {
                                            return;
                                        } else if (collected.size == 0) {
                                            return message.reply("Timeout :v")
                                        }
                                    })
                                }
                            } else {
                                if (userbal < price) {
                                    if (amount == 1) {
                                        return message.reply("You do not have enough coins to buy "+amount+" duck!")
                                    } else {
                                        return message.reply("You do not have enough coins to buy "+amount+" ducks!")
                                    }
                                } else {
                                    price = amount * itemprice
                                    db.subtract(`${user.id}.balance`, price)
                                    db.add(`${user.id}.inv.items.duck`, amount)
                                    return message.reply({
                                        embeds: [purchasesuccess]
                                    })
                                }
                            }
                        } else if ('luxuriouscrown'.includes(name)) {
                            itemprice = itemprices.crown
                            price = amount * itemprice
                            amount = parseInt(amount)
                            name ='Luxurious Crown'
    
                            var amounte = amount.toLocaleString(
                                { minimumFractionDigits: 2}
                            );
    
                            var pricel = price.toLocaleString(
                                { minimumFractionDigits: 2}
                            );
    
                            let confirmation = new MessageEmbed()
                            .setTitle("Pending Confirmation!")
                            .setDescription(`Are you sure you want to buy **${amounte} ${confirmationname}** for <:silvercoin:895933583838027807>${pricel}?\n\nEnter **__YES__** / **__NO__** or **__Y__** / **__N__** into the chat in the next` + " `60` " + `seconds to either confirm or cancel this transaction!`)
                            .setColor("BLURPLE")
                            .setTimestamp()
        
                            let purchasesuccess = new MessageEmbed()
                            .setTitle("Purchase Success!")
                            .setDescription(`You have purchased **${amounte} ${name}** for <:silvercoin:895933583838027807>${pricel}`)
                            .setTimestamp()
                            .setColor("GREEN")
    
                            if (price  > 250000) {
                                if (userbal < price) {
                                    return message.reply("You do not have enough <:silvercoin:895933583838027807> to buy "+amounte+" "+confirmationname+" "+lolwords+"")
                                } else {
                                    message.channel.send({
                                        embeds: [confirmation],
                                        content: `<@${user.id}>`
                                    })
                                        
                                    const filter = m => m.author.id === message.author.id
                                    const collector = message.channel.createMessageCollector(
                                        {
                                            filter,
                                            max: 1,
                                            time: 60000 //60 seconds               
                                        }
                                    )
                                    collector.on('collect', message => {
                                        const messagecontent = message.content.toLowerCase()
                                        if (messagecontent == 'yes') {
                                            price = amount * itemprice
                                            db.subtract(`${user.id}.balance`, price)
                                            db.add(`${user.id}.inv.items.crown`, amount)
                                            return message.reply({
                                                embeds: [purchasesuccess]
                                            })
                                        } else if (messagecontent == 'y') {
                                            price = amount * itemprice
                                            db.subtract(`${user.id}.balance`, price)
                                            db.add(`${user.id}.inv.items.crown`, amount)
                                            return message.reply({
                                                embeds: [purchasesuccess]
                                            })
                                        } else {
                                            return message.reply("Cancelled Transaction!")
                                        }
                                    })

                                    collector.on('end', collected => {
                                        if (collected.size > 0) {
                                            return;
                                        } else if (collected.size == 0) {
                                            return message.reply("Timeout :v")
                                        }
                                    })
                                }
                            } else {
                                if (userbal < price) {
                                    if (amount == 1) {
                                        return message.reply("You do not have enough coins to buy "+amount+" luxurious crown!")
                                    } else {
                                        return message.reply("You do not have enough coins to buy "+amount+" luxurious crowns!")
                                    }
                                } else {
                                    price = amount * itemprice
                                    db.subtract(`${user.id}.balance`, price)
                                    db.add(`${user.id}.inv.items.crown`, amount)
                                    return message.reply({
                                        embeds: [purchasesuccess]
                                    })
                                }
                            }
                        } else if ('trophy'.includes(name)) {
                            itemprice = itemprices.trophy
                            price = amount * itemprice
                            amount = parseInt(amount)
                            name ='Golden Trophy'
    
                            var amounte = amount.toLocaleString(
                                { minimumFractionDigits: 2}
                            );
    
                            var pricel = price.toLocaleString(
                                { minimumFractionDigits: 2}
                            );
    
                            let confirmation = new MessageEmbed()
                            .setTitle("Pending Confirmation!")
                            .setDescription(`Are you sure you want to buy **${amounte} ${confirmationname}** for <:silvercoin:895933583838027807>${pricel}?\n\nEnter **__YES__** / **__NO__** or **__Y__** / **__N__** into the chat in the next` + " `60` " + `seconds to either confirm or cancel this transaction!`)
                            .setColor("BLURPLE")
                            .setTimestamp()
        
                            let purchasesuccess = new MessageEmbed()
                            .setTitle("Purchase Success!")
                            .setDescription(`You have purchased **${amounte} ${name}** for <:silvercoin:895933583838027807>${pricel}`)
                            .setTimestamp()
                            .setColor("GREEN")
    
                            if (price  > 250000) {
                                if (userbal < price) {
                                    return message.reply("You do not have enough <:silvercoin:895933583838027807> to buy "+amounte+" "+confirmationname+" "+lolwords+"")
                                } else {
                                    message.channel.send({
                                        embeds: [confirmation],
                                        content: `<@${user.id}>`
                                    })
                                        
                                    const filter = m => m.author.id === message.author.id
                                    const collector = message.channel.createMessageCollector(
                                        {
                                            filter,
                                            max: 1,
                                            time: 60000 //60 seconds               
                                        }
                                    )
                                    collector.on('collect', message => {
                                        const messagecontent = message.content.toLowerCase()
                                        if (messagecontent == 'yes') {
                                            price = amount * itemprice
                                            db.subtract(`${user.id}.balance`, price)
                                            db.add(`${user.id}.inv.items.trophy`, amount)
                                            return message.reply({
                                                embeds: [purchasesuccess]
                                            })
                                        } else if (messagecontent == 'y') {
                                            price = amount * itemprice
                                            db.subtract(`${user.id}.balance`, price)
                                            db.add(`${user.id}.inv.items.trophy`, amount)
                                            return message.reply({
                                                embeds: [purchasesuccess]
                                            })
                                        } else {
                                            return message.reply("Cancelled Transaction!")
                                        }
                                    })
                                    collector.on('end', collected => {
                                        if (collected.size > 0) {
                                            return;
                                        } else if (collected.size == 0) {
                                            return message.reply("Timeout :v")
                                        }
                                    })
                                }
                            } else {
                                if (userbal < price) {
                                    if (amount == 1) {
                                        return message.reply("You do not have enough coins to buy "+amount+" trophy!")
                                    } else {
                                        return message.reply("You do not have enough coins to buy "+amount+" trophies!")
                                    }
                                } else {
                                    price = amount * itemprice
                                    db.subtract(`${user.id}.balance`, price)
                                    db.add(`${user.id}.inv.items.trophy`, amount)
                                    return message.reply({
                                        embeds: [purchasesuccess]
                                    })
                                }
                            }
                        } else if ('medal'.includes(name)) {
                            itemprice = itemprices.medal
                            price = amount * itemprice
                            amount = parseInt(amount)
                            name ='Golden Medal'
    
                            var amounte = amount.toLocaleString(
                                { minimumFractionDigits: 2}
                            );
    
                            var pricel = price.toLocaleString(
                                { minimumFractionDigits: 2}
                            );
    
                            let confirmation = new MessageEmbed()
                            .setTitle("Pending Confirmation!")
                            .setDescription(`Are you sure you want to buy **${amounte} ${confirmationname}** for <:silvercoin:895933583838027807>${pricel}?\n\nEnter **__YES__** / **__NO__** or **__Y__** / **__N__** into the chat in the next` + " `60` " + `seconds to either confirm or cancel this transaction!`)
                            .setColor("BLURPLE")
                            .setTimestamp()
        
                            let purchasesuccess = new MessageEmbed()
                            .setTitle("Purchase Success!")
                            .setDescription(`You have purchased **${amounte} ${name}** for <:silvercoin:895933583838027807>${pricel}`)
                            .setTimestamp()
                            .setColor("GREEN")
    
                            if (price  > 250000) {
                                if (userbal < price) {
                                    return message.reply("You do not have enough <:silvercoin:895933583838027807> to buy "+amounte+" "+confirmationname+" "+lolwords+"")
                                } else {
                                    message.channel.send({
                                        embeds: [confirmation],
                                        content: `<@${user.id}>`
                                    })
                                        
                                    const filter = m => m.author.id === message.author.id
                                    const collector = message.channel.createMessageCollector(
                                        {
                                            filter,
                                            max: 1,
                                            time: 60000 //60 seconds               
                                        }
                                    )
                                    collector.on('collect', message => {
                                        const messagecontent = message.content.toLowerCase()
                                        if (messagecontent == 'yes') {
                                            price = amount * itemprice
                                            db.subtract(`${user.id}.balance`, price)
                                            db.add(`${user.id}.inv.items.medal`, amount)
                                            return message.reply({
                                                embeds: [purchasesuccess]
                                            })
                                        } else if (messagecontent == 'y') {
                                            price = amount * itemprice
                                            db.subtract(`${user.id}.balance`, price)
                                            db.add(`${user.id}.inv.items.medal`, amount)
                                            return message.reply({
                                                embeds: [purchasesuccess]
                                            })
                                        } else {
                                            return message.reply("Cancelled Transaction!")
                                        }
                                    })
                                    collector.on('end', collected => {
                                        if (collected.size > 0) {
                                            return;
                                        } else if (collected.size == 0) {
                                            return message.reply("Timeout :v")
                                        }
                                    })
                                }
                            } else {
                                if (userbal < price) {
                                    if (amount == 1) {
                                        return message.reply("You do not have enough coins to buy "+amount+" golden medal!")
                                    } else {
                                        return message.reply("You do not have enough coins to buy "+amount+" golden medals!")
                                    }
                                } else {
                                    price = amount * itemprice
                                    db.subtract(`${user.id}.balance`, price)
                                    db.add(`${user.id}.inv.items.medal`, amount)
                                    return message.reply({
                                        embeds: [purchasesuccess]
                                    })
                                }
                            }
                        } else if ('mysteriouspearl'.includes(name)) {
                            itemprice = itemprices.pearl
                            price = amount * itemprice
                            amount = parseInt(amount)
                            name ='Mysterious Pearl'
    
                            var amounte = amount.toLocaleString(
                                { minimumFractionDigits: 2}
                            );
    
                            var pricel = price.toLocaleString(
                                { minimumFractionDigits: 2}
                            );
    
                            let confirmation = new MessageEmbed()
                            .setTitle("Pending Confirmation!")
                            .setDescription(`Are you sure you want to buy **${amounte} ${confirmationname}** for <:silvercoin:895933583838027807>${pricel}?\n\nEnter **__YES__** / **__NO__** or **__Y__** / **__N__** into the chat in the next` + " `60` " + `seconds to either confirm or cancel this transaction!`)
                            .setColor("BLURPLE")
                            .setTimestamp()
        
                            let purchasesuccess = new MessageEmbed()
                            .setTitle("Purchase Success!")
                            .setDescription(`You have purchased **${amounte} ${name}** for <:silvercoin:895933583838027807>${pricel}`)
                            .setTimestamp()
                            .setColor("GREEN")
    
                            if (price  > 250000) {
                                if (userbal < price) {
                                    return message.reply("You do not have enough <:silvercoin:895933583838027807> to buy "+amounte+" "+confirmationname+" "+lolwords+"")
                                } else {
                                    message.channel.send({
                                        embeds: [confirmation],
                                        content: `<@${user.id}>`
                                    })
                                        
                                    const filter = m => m.author.id === message.author.id
                                    const collector = message.channel.createMessageCollector(
                                        {
                                            filter,
                                            max: 1,
                                            time: 60000 //60 seconds               
                                        }
                                    )
                                    collector.on('collect', message => {
                                        const messagecontent = message.content.toLowerCase()
                                        if (messagecontent == 'yes') {
                                            price = amount * itemprice
                                            db.subtract(`${user.id}.balance`, price)
                                            db.add(`${user.id}.inv.items.pearl`, amount)
                                            return message.reply({
                                                embeds: [purchasesuccess]
                                            })
                                        } else if (messagecontent == 'y') {
                                            price = amount * itemprice
                                            db.subtract(`${user.id}.balance`, price)
                                            db.add(`${user.id}.inv.items.pearl`, amount)
                                            return message.reply({
                                                embeds: [purchasesuccess]
                                            })
                                        } else {
                                            return message.reply("Cancelled Transaction!")
                                        }
                                    })
                                    collector.on('end', collected => {
                                        if (collected.size > 0) {
                                            return;
                                        } else if (collected.size == 0) {
                                            return message.reply("Timeout :v")
                                        }
                                    })
                                }
                            } else {
                                if (userbal < price) {
                                    if (amount == 1) {
                                        return message.reply("You do not have enough coins to buy "+amount+" mysterious pearl!")
                                    } else {
                                        return message.reply("You do not have enough coins to buy "+amount+" mysterious pearls!")
                                    }
                                } else {
                                    price = amount * itemprice
                                    db.subtract(`${user.id}.balance`, price)
                                    db.add(`${user.id}.inv.items.pearl`, amount)
                                    return message.reply({
                                        embeds: [purchasesuccess]
                                    })
                                }
                            }
                        } else if ('chocolatebar'.includes(name)) {
                            itemprice = itemprices.chocolate
                            price = amount * itemprice
                            amount = parseInt(amount)
                            name ='Chocolate Bar'
    
                            var amounte = amount.toLocaleString(
                                { minimumFractionDigits: 2}
                            );
    
                            var pricel = price.toLocaleString(
                                { minimumFractionDigits: 2}
                            );
    
                            let confirmation = new MessageEmbed()
                            .setTitle("Pending Confirmation!")
                            .setDescription(`Are you sure you want to buy **${amounte} ${confirmationname}** for <:silvercoin:895933583838027807>${pricel}?\n\nEnter **__YES__** / **__NO__** or **__Y__** / **__N__** into the chat in the next` + " `60` " + `seconds to either confirm or cancel this transaction!`)
                            .setColor("BLURPLE")
                            .setTimestamp()
        
                            let purchasesuccess = new MessageEmbed()
                            .setTitle("Purchase Success!")
                            .setDescription(`You have purchased **${amounte} ${name}** for <:silvercoin:895933583838027807>${pricel}`)
                            .setTimestamp()
                            .setColor("GREEN")
    
                            if (price  > 250000) {
                                if (userbal < price) {
                                    return message.reply("You do not have enough <:silvercoin:895933583838027807> to buy "+amounte+" "+confirmationname+" "+lolwords+"")
                                } else {
                                    message.channel.send({
                                        embeds: [confirmation],
                                        content: `<@${user.id}>`
                                    })
                                        
                                    const filter = m => m.author.id === message.author.id
                                    const collector = message.channel.createMessageCollector(
                                        {
                                            filter,
                                            max: 1,
                                            time: 60000 //60 seconds               
                                        }
                                    )
                                    collector.on('collect', message => {
                                        const messagecontent = message.content.toLowerCase()
                                        if (messagecontent == 'yes') {
                                            price = amount * itemprice
                                            db.subtract(`${user.id}.balance`, price)
                                            db.add(`${user.id}.inv.items.chocolate`, amount)
                                            return message.reply({
                                                embeds: [purchasesuccess]
                                            })
                                        } else if (messagecontent == 'y') {
                                            price = amount * itemprice
                                            db.subtract(`${user.id}.balance`, price)
                                            db.add(`${user.id}.inv.items.chocolate`, amount)
                                            return message.reply({
                                                embeds: [purchasesuccess]
                                            })
                                        } else {
                                            return message.reply("Cancelled Transaction!")
                                        }
                                    })
                                    collector.on('end', collected => {
                                        if (collected.size > 0) {
                                            return;
                                        } else if (collected.size == 0) {
                                            return message.reply("Timeout :v")
                                        }
                                    })
                                }
                            } else {
                                if (userbal < price) {
                                    if (amount == 1) {
                                        return message.reply("You do not have enough coins to buy "+amount+" chocolate bar!")
                                    } else {
                                        return message.reply("You do not have enough coins to buy "+amount+" chocolate bars!")
                                    }
                                } else {
                                    price = amount * itemprice
                                    db.subtract(`${user.id}.balance`, price)
                                    db.add(`${user.id}.inv.items.chocolate`, amount)
                                    return message.reply({
                                        embeds: [purchasesuccess]
                                    })
                                }
                            }
                        } else if ('pizzaslice'.includes(name)) {
                            itemprice = itemprices.pizza
                            price = amount * itemprice
                            amount = parseInt(amount)
                            name ='Pizza Slice'
    
                            var amounte = amount.toLocaleString(
                                { minimumFractionDigits: 2}
                            );
    
                            var pricel = price.toLocaleString(
                                { minimumFractionDigits: 2}
                            );
    
                            let confirmation = new MessageEmbed()
                            .setTitle("Pending Confirmation!")
                            .setDescription(`Are you sure you want to buy **${amounte} ${confirmationname}** for <:silvercoin:895933583838027807>${pricel}?\n\nEnter **__YES__** / **__NO__** or **__Y__** / **__N__** into the chat in the next` + " `60` " + `seconds to either confirm or cancel this transaction!`)
                            .setColor("BLURPLE")
                            .setTimestamp()
        
                            let purchasesuccess = new MessageEmbed()
                            .setTitle("Purchase Success!")
                            .setDescription(`You have purchased **${amounte} ${name}** for <:silvercoin:895933583838027807>${pricel}`)
                            .setTimestamp()
                            .setColor("GREEN")
    
                            if (price  > 250000) {
                                if (userbal < price) {
                                    return message.reply("You do not have enough <:silvercoin:895933583838027807> to buy "+amounte+" "+confirmationname+" "+lolwords+"")
                                } else {
                                    message.channel.send({
                                        embeds: [confirmation],
                                        content: `<@${user.id}>`
                                    })
                                        
                                    const filter = m => m.author.id === message.author.id
                                    const collector = message.channel.createMessageCollector(
                                        {
                                            filter,
                                            max: 1,
                                            time: 60000 //60 seconds               
                                        }
                                    )
                                    collector.on('collect', message => {
                                        const messagecontent = message.content.toLowerCase()
                                        if (messagecontent == 'yes') {
                                            price = amount * itemprice
                                            db.subtract(`${user.id}.balance`, price)
                                            db.add(`${user.id}.inv.items.pizza`, amount)
                                            return message.reply({
                                                embeds: [purchasesuccess]
                                            })
                                        } else if (messagecontent == 'y') {
                                            price = amount * itemprice
                                            db.subtract(`${user.id}.balance`, price)
                                            db.add(`${user.id}.inv.items.pizza`, amount)
                                            return message.reply({
                                                embeds: [purchasesuccess]
                                            })
                                        } else {
                                            return message.reply("Cancelled Transaction!")
                                        }
                                    })
                                    collector.on('end', collected => {
                                        if (collected.size > 0) {
                                            return;
                                        } else if (collected.size == 0) {
                                            return message.reply("Timeout :v")
                                        }
                                    })
                                }
                            } else {
                                if (userbal < price) {
                                    if (amount == 1) {
                                        return message.reply("You do not have enough coins to buy "+amount+" pizza slice!")
                                    } else {
                                        return message.reply("You do not have enough coins to buy "+amount+" pizza slices!")
                                    }
                                } else {
                                    price = amount * itemprice
                                    db.subtract(`${user.id}.balance`, price)
                                    db.add(`${user.id}.inv.items.pizza`, amount)
                                    return message.reply({
                                        embeds: [purchasesuccess]
                                    })
                                }
                            }
                        } else if ('bread'.includes(name)) {
                            itemprice = itemprices.computer
                            price = amount * itemprice
                            amount = parseInt(amount)
                            name ='Bread'
    
                            var amounte = amount.toLocaleString(
                                { minimumFractionDigits: 2}
                            );
    
                            var pricel = price.toLocaleString(
                                { minimumFractionDigits: 2}
                            );
    
                            let confirmation = new MessageEmbed()
                            .setTitle("Pending Confirmation!")
                            .setDescription(`Are you sure you want to buy **${amounte} ${confirmationname}** for <:silvercoin:895933583838027807>${pricel}?\n\nEnter **__YES__** / **__NO__** or **__Y__** / **__N__** into the chat in the next` + " `60` " + `seconds to either confirm or cancel this transaction!`)
                            .setColor("BLURPLE")
                            .setTimestamp()
        
                            let purchasesuccess = new MessageEmbed()
                            .setTitle("Purchase Success!")
                            .setDescription(`You have purchased **${amounte} ${name}** for <:silvercoin:895933583838027807>${pricel}`)
                            .setTimestamp()
                            .setColor("GREEN")
    
                            if (price  > 250000) {
                                if (userbal < price) {
                                    return message.reply("You do not have enough <:silvercoin:895933583838027807> to buy "+amounte+" "+confirmationname+" "+lolwords+"")
                                } else {
                                    message.channel.send({
                                        embeds: [confirmation],
                                        content: `<@${user.id}>`
                                    })
                                        
                                    const filter = m => m.author.id === message.author.id
                                    const collector = message.channel.createMessageCollector(
                                        {
                                            filter,
                                            max: 1,
                                            time: 60000 //60 seconds               
                                        }
                                    )
                                    collector.on('collect', message => {
                                        const messagecontent = message.content.toLowerCase()
                                        if (messagecontent == 'yes') {
                                            price = amount * itemprice
                                            db.subtract(`${user.id}.balance`, price)
                                            db.add(`${user.id}.inv.items.bread`, amount)
                                            return message.reply({
                                                embeds: [purchasesuccess]
                                            })
                                        } else if (messagecontent == 'y') {
                                            price = amount * itemprice
                                            db.subtract(`${user.id}.balance`, price)
                                            db.add(`${user.id}.inv.items.bread`, amount)
                                            return message.reply({
                                                embeds: [purchasesuccess]
                                            })
                                        } else {
                                            return message.reply("Cancelled Transaction!")
                                        }
                                    })
                                    collector.on('end', collected => {
                                        if (collected.size > 0) {
                                            return;
                                        } else if (collected.size == 0) {
                                            return message.reply("Timeout :v")
                                        }
                                    })
                                }
                            } else {
                                if (userbal < price) {
                                    if (amount == 1) {
                                        return message.reply("You do not have enough coins to buy "+amount+" bread!")
                                    } else {
                                        return message.reply("You do not have enough coins to buy "+amount+" bread!")
                                    }
                                } else {
                                    price = amount * itemprice
                                    db.subtract(`${user.id}.balance`, price)
                                    db.add(`${user.id}.inv.items.bread`, amount)
                                    return message.reply({
                                        embeds: [purchasesuccess]
                                    })
                                }
                            }
                        } else if ('apple'.includes(name)) {
                            itemprice = itemprices.apple
                            price = amount * itemprice
                            amount = parseInt(amount)
                            name ='Apple'
    
                            var amounte = amount.toLocaleString(
                                { minimumFractionDigits: 2}
                            );
    
                            var pricel = price.toLocaleString(
                                { minimumFractionDigits: 2}
                            );
    
                            let confirmation = new MessageEmbed()
                            .setTitle("Pending Confirmation!")
                            .setDescription(`Are you sure you want to buy **${amounte} ${confirmationname}** for <:silvercoin:895933583838027807>${pricel}?\n\nEnter **__YES__** / **__NO__** or **__Y__** / **__N__** into the chat in the next` + " `60` " + `seconds to either confirm or cancel this transaction!`)
                            .setColor("BLURPLE")
                            .setTimestamp()
        
                            let purchasesuccess = new MessageEmbed()
                            .setTitle("Purchase Success!")
                            .setDescription(`You have purchased **${amounte} ${name}** for <:silvercoin:895933583838027807>${pricel}`)
                            .setTimestamp()
                            .setColor("GREEN")
    
                            if (price  > 250000) {
                                if (userbal < price) {
                                    return message.reply("You do not have enough <:silvercoin:895933583838027807> to buy "+amounte+" "+confirmationname+" "+lolwords+"")
                                } else {
                                    message.channel.send({
                                        embeds: [confirmation],
                                        content: `<@${user.id}>`
                                    })
                                        
                                    const filter = m => m.author.id === message.author.id
                                    const collector = message.channel.createMessageCollector(
                                        {
                                            filter,
                                            max: 1,
                                            time: 60000 //60 seconds               
                                        }
                                    )
                                    collector.on('collect', message => {
                                        const messagecontent = message.content.toLowerCase()
                                        if (messagecontent == 'yes') {
                                            price = amount * itemprice
                                            db.subtract(`${user.id}.balance`, price)
                                            db.add(`${user.id}.inv.items.apple`, amount)
                                            return message.reply({
                                                embeds: [purchasesuccess]
                                            })
                                        } else if (messagecontent == 'y') {
                                            price = amount * itemprice
                                            db.subtract(`${user.id}.balance`, price)
                                            db.add(`${user.id}.inv.items.apple`, amount)
                                            return message.reply({
                                                embeds: [purchasesuccess]
                                            })
                                        } else {
                                            return message.reply("Cancelled Transaction!")
                                        }
                                    })
                                    collector.on('end', collected => {
                                        if (collected.size > 0) {
                                            return;
                                        } else if (collected.size == 0) {
                                            return message.reply("Timeout :v")
                                        }
                                    })
                                }
                            } else {
                                if (userbal < price) {
                                    if (amount == 1) {
                                        return message.reply("You do not have enough coins to buy "+amount+" apple!")
                                    } else {
                                        return message.reply("You do not have enough coins to buy "+amount+" apples!")
                                    }
                                } else {
                                    price = amount * itemprice
                                    db.subtract(`${user.id}.balance`, price)
                                    db.add(`${user.id}.inv.items.apple`, amount)
                                    return message.reply({
                                        embeds: [purchasesuccess]
                                    })
                                }
                            }
                        } else if ('milk'.includes(name)) {
                            itemprice = itemprices.milk
                            price = amount * itemprice
                            amount = parseInt(amount)
                            name ='Milk'
                            var amounte = amount.toLocaleString(
                                { minimumFractionDigits: 2}
                            );
    
                            var pricel = price.toLocaleString(
                                { minimumFractionDigits: 2}
                            );
    
                            let confirmation = new MessageEmbed()
                            .setTitle("Pending Confirmation!")
                            .setDescription(`Are you sure you want to buy **${amounte} ${confirmationname}** for <:silvercoin:895933583838027807>${pricel}?\n\nEnter **__YES__** / **__NO__** or **__Y__** / **__N__** into the chat in the next` + " `60` " + `seconds to either confirm or cancel this transaction!`)
                            .setColor("BLURPLE")
                            .setTimestamp()
        
                            let purchasesuccess = new MessageEmbed()
                            .setTitle("Purchase Success!")
                            .setDescription(`You have purchased **${amounte} ${name}** for <:silvercoin:895933583838027807>${pricel}`)
                            .setTimestamp()
                            .setColor("GREEN")
    
                            if (price  > 250000) {
                                if (userbal < price) {
                                    return message.reply("You do not have enough <:silvercoin:895933583838027807> to buy "+amounte+" "+confirmationname+" "+lolwords+"")
                                } else {
                                    message.channel.send({
                                        embeds: [confirmation],
                                        content: `<@${user.id}>`
                                    })
                                        
                                    const filter = m => m.author.id === message.author.id
                                    const collector = message.channel.createMessageCollector(
                                        {
                                            filter,
                                            max: 1,
                                            time: 60000 //60 seconds               
                                        }
                                    )
                                    collector.on('collect', message => {
                                        const messagecontent = message.content.toLowerCase()
                                        if (messagecontent == 'yes') {
                                            price = amount * itemprice
                                            db.subtract(`${user.id}.balance`, price)
                                            db.add(`${user.id}.inv.items.milk`, amount)
                                            return message.reply({
                                                embeds: [purchasesuccess]
                                            })
                                        } else if (messagecontent == 'y') {
                                            price = amount * itemprice
                                            db.subtract(`${user.id}.balance`, price)
                                            db.add(`${user.id}.inv.items.milk`, amount)
                                            return message.reply({
                                                embeds: [purchasesuccess]
                                            })
                                        } else {
                                            return message.reply("Cancelled Transaction!")
                                        }
                                    })
                                    collector.on('end', collected => {
                                        if (collected.size > 0) {
                                            return;
                                        } else if (collected.size == 0) {
                                            return message.reply("Timeout :v")
                                        }
                                    })
                                }
                            } else {
                                if (userbal < price) {
                                    if (amount == 1) {
                                        return message.reply("You do not have enough coins to buy "+amount+" ghost jar!")
                                    } else {
                                        return message.reply("You do not have enough coins to buy "+amount+" ghost jars!")
                                    }
                                } else {
                                    price = amount * itemprice
                                    db.subtract(`${user.id}.balance`, price)
                                    db.add(`${user.id}.inv.items.milk`, amount)
                                    return message.reply({
                                        embeds: [purchasesuccess]
                                    })
                                }
                            }
                        } else if ('luckyclover'.includes(name)) {
                            itemprice = itemprices.luckyclover
                            price = amount * itemprice
                            amount = parseInt(amount)
                            name ='Lucky Clover'
    
                            var amounte = amount.toLocaleString(
                                { minimumFractionDigits: 2}
                            );
    
                            var pricel = price.toLocaleString(
                                { minimumFractionDigits: 2}
                            );
    
                            let confirmation = new MessageEmbed()
                            .setTitle("Pending Confirmation!")
                            .setDescription(`Are you sure you want to buy **${amounte} ${confirmationname}** for <:silvercoin:895933583838027807>${pricel}?\n\nEnter **__YES__** / **__NO__** or **__Y__** / **__N__** into the chat in the next` + " `60` " + `seconds to either confirm or cancel this transaction!`)
                            .setColor("BLURPLE")
                            .setTimestamp()
        
                            let purchasesuccess = new MessageEmbed()
                            .setTitle("Purchase Success!")
                            .setDescription(`You have purchased **${amounte} ${name}** for <:silvercoin:895933583838027807>${pricel}`)
                            .setTimestamp()
                            .setColor("GREEN")
    
                            if (price  > 250000) {
                                if (userbal < price) {
                                    return message.reply("You do not have enough <:silvercoin:895933583838027807> to buy "+amounte+" "+confirmationname+" "+lolwords+"")
                                } else {
                                    message.channel.send({
                                        embeds: [confirmation],
                                        content: `<@${user.id}>`
                                    })
                                        
                                    const filter = m => m.author.id === message.author.id
                                    const collector = message.channel.createMessageCollector(
                                        {
                                            filter,
                                            max: 1,
                                            time: 60000 //60 seconds               
                                        }
                                    )
                                    collector.on('collect', message => {
                                        const messagecontent = message.content.toLowerCase()
                                        if (messagecontent == 'yes') {
                                            price = amount * itemprice
                                            db.subtract(`${user.id}.balance`, price)
                                            db.add(`${user.id}.inv.items.luckyclover`, amount)
                                            return message.reply({
                                                embeds: [purchasesuccess]
                                            })
                                        } else if (messagecontent == 'y') {
                                            price = amount * itemprice
                                            db.subtract(`${user.id}.balance`, price)
                                            db.add(`${user.id}.inv.items.luckyclover`, amount)
                                            return message.reply({
                                                embeds: [purchasesuccess]
                                            })
                                        } else {
                                            return message.reply("Cancelled Transaction!")
                                        }
                                    })
                                    collector.on('end', collected => {
                                        if (collected.size > 0) {
                                            return;
                                        } else if (collected.size == 0) {
                                            return message.reply("Timeout :v")
                                        }
                                    })
                                }
                            } else {
                                if (userbal < price) {
                                    if (amount == 1) {
                                        return message.reply("You do not have enough coins to buy "+amount+" lucky clover!")
                                    } else {
                                        return message.reply("You do not have enough coins to buy "+amount+" lucky clovers!")
                                    }
                                } else {
                                    price = amount * itemprice
                                    db.subtract(`${user.id}.balance`, price)
                                    db.add(`${user.id}.inv.items.luckyclover`, amount)
                                    return message.reply({
                                        embeds: [purchasesuccess]
                                    })
                                }
                            }
                        } else if ('ghostjar'.includes(name)) {
                            itemprice = itemprices.ghostjar
                            price = amount * itemprice
                            amount = parseInt(amount)
                            name = 'Ghost Jar'
    
                            var amounte = amount.toLocaleString(
                                { minimumFractionDigits: 2}
                            );   
    
                            var pricel = price.toLocaleString(
                                { minimumFractionDigits: 2}
                            );
    
                            let confirmation = new MessageEmbed()
                            .setTitle("Pending Confirmation!")
                            .setDescription(`Are you sure you want to buy **${amounte} ${confirmationname}** for <:silvercoin:895933583838027807>${pricel}?\n\nEnter **__YES__** / **__NO__** or **__Y__** / **__N__** into the chat in the next` + " `60` " + `seconds to either confirm or cancel this transaction!`)
                            .setColor("BLURPLE")
                            .setTimestamp()
        
                            let purchasesuccess = new MessageEmbed()
                            .setTitle("Purchase Success!")
                            .setDescription(`You have purchased **${amounte} ${name}** for <:silvercoin:895933583838027807>${pricel}`)
                            .setTimestamp()
                            .setColor("GREEN")
    
                            if (price  > 250000) {
                                if (userbal < price) {
                                    return message.reply("You do not have enough <:silvercoin:895933583838027807> to buy "+amounte+" "+confirmationname+" "+lolwords+"")
                                } else {
                                    message.channel.send({
                                        embeds: [confirmation],
                                        content: `<@${user.id}>`
                                    })
                                        
                                    const filter = m => m.author.id === message.author.id
                                    const collector = message.channel.createMessageCollector(
                                        {
                                            filter,
                                            max: 1,
                                            time: 60000 //60 seconds               
                                        }
                                    )
                                    collector.on('collect', message => {
                                        const messagecontent = message.content.toLowerCase()
                                        if (messagecontent == 'yes') {
                                            price = amount * itemprice
                                            db.subtract(`${user.id}.balance`, price)
                                            db.add(`${user.id}.inv.items.ghostjar`, amount)
                                            return message.reply({
                                                embeds: [purchasesuccess]
                                            })
                                        } else if (messagecontent == 'y') {
                                            price = amount * itemprice
                                            db.subtract(`${user.id}.balance`, price)
                                            db.add(`${user.id}.inv.items.ghostjar`, amount)
                                            return message.reply({
                                                embeds: [purchasesuccess]
                                            })
                                        } else {
                                            return message.reply("Cancelled Transaction!")
                                        }
                                    })
                                    collector.on('end', collected => {
                                        if (collected.size > 0) {
                                            return;
                                        } else if (collected.size == 0) {
                                            return message.reply("Timeout :v")
                                        }
                                    })
                                }
                            } else {
                                if (userbal < price) {
                                    if (amount == 1) {
                                        return message.reply("You do not have enough coins to buy "+amount+" ghost jar!")
                                    } else {
                                        return message.reply("You do not have enough coins to buy "+amount+" ghost jars!")
                                    }
                                } else {
                                    price = amount * itemprice
                                    db.subtract(`${user.id}.balance`, price)
                                    db.add(`${user.id}.inv.items.ghostjar`, amount)
                                    return message.reply({
                                        embeds: [purchasesuccess]
                                    })
                                }
                            }
                        } else {
                            return message.reply("`"+args[1]+"` is not an item in the shop lol , what are you doing smh")
                        }
                    }            
                } else {
                    return message.reply("You have one choice and one choice only, `"+config.prefix+" buy <amount> <item>`") 
                }
            } else {
                if (isNaN(args[0])) {
                    let name = args[0].toLowerCase()
                    let amount = 1
                    let userbal = db.get(`${user.id}.balance`)
    
                    if ((name.length) <= 2) {
                        return message.reply("`"+name+"` is not an item in the shop lol , what are you doing smh")
                    } else {
                        if ('fishingrod'.includes(name)) {
                            itemprice = itemprices.fishingrod
                            name = 'Fishing Rod'
    
                            var itempricel = itemprice.toLocaleString(
                                { minimumFractionDigits: 2}
                            );
    
                            let purchasesuccess = new MessageEmbed()
                            .setTitle("Purchase Success!")
                            .setDescription(`You have purchased **${amount} ${name}** for <:silvercoin:895933583838027807>${itempricel}`)
                            .setTimestamp()
                            .setColor("GREEN")
    
                            if (userbal < itemprice) {
                                return message.reply("You do not have enough coins to buy a fishing rod!")
                            } else {
                                itemprice = itemprices.fishingrod
                                db.subtract(`${user.id}.balance`, price)
                                db.add(`${user.id}.inv.items.fishingrod`, amount)
                                return message.reply({
                                    embeds: [purchasesuccess]
                                })
                            }
                        } else if ('huntingrifle'.includes(name)) {
                            itemprice = itemprices.huntingrifle
                            name = 'Hunting Rifle'
    
                            var itempricel = itemprice.toLocaleString(
                                { minimumFractionDigits: 2}
                            );
    
                            let purchasesuccess = new MessageEmbed()
                            .setTitle("Purchase Success!")
                            .setDescription(`You have purchased **${amount} ${name}** for <:silvercoin:895933583838027807>${itempricel}`)
                            .setTimestamp()
                            .setColor("GREEN")
        
                            if (userbal < itemprice) {
                                return message.reply("You do not have enough coins to buy a hunting rifle!")
                            } else {
                                itemprice = itemprices.huntingrifle
                                db.subtract(`${user.id}.balance`, itemprice)
                                db.add(`${user.id}.inv.items.huntingrifle`, amount)
                                return message.reply({
                                    embeds: [purchasesuccess]
                                })
                            }
                        } else if ('shovel'.includes(name)) {
                            itemprice = itemprices.shovel
                            name = 'Shovel'
    
                            var itempricel = itemprice.toLocaleString(
                                { minimumFractionDigits: 2}
                            );
    
                            let purchasesuccess = new MessageEmbed()
                            .setTitle("Purchase Success!")
                            .setDescription(`You have purchased **${amount} ${name}** for <:silvercoin:895933583838027807>${itempricel}`)
                            .setTimestamp()
                            .setColor("GREEN")
        
                            if (userbal < itemprice) {
                                return message.reply("You do not have enough coins to buy a shovel!")
                            } else {
                                itemprice = itemprices.shovel
                                db.subtract(`${user.id}.balance`, itemprice)
                                db.add(`${user.id}.inv.items.shovel`, amount)
                                return message.reply({
                                    embeds: [purchasesuccess]
                                })
                            }
                        } else if ('pickaxe'.includes(name)) {
                            itemprice = itemprices.pickaxe
                            name = 'Pickaxe'
    
                            var itempricel = itemprice.toLocaleString(
                                { minimumFractionDigits: 2}
                            );
    
                            let purchasesuccess = new MessageEmbed()
                            .setTitle("Purchase Success!")
                            .setDescription(`You have purchased **${amount} ${name}** for <:silvercoin:895933583838027807>${itempricel}`)
                            .setTimestamp()
                            .setColor("GREEN")
        
                            if (userbal < itemprice) {
                                return message.reply("You do not have enough coins to buy a pickaxe!")
                            } else {
                                itemprice = itemprices.pickaxe
                                db.subtract(`${user.id}.balance`, itemprice)
                                db.add(`${user.id}.inv.items.pickaxe`, amount)
                                return message.reply({
                                    embeds: [purchasesuccess]
                                })
                            }
                        } else if ('mobilephone'.includes(name)) {
                            itemprice = itemprices.phone
                            name = 'Mobile Phone'
    
                            var itempricel = itemprice.toLocaleString(
                                { minimumFractionDigits: 2}
                            );
    
                            let purchasesuccess = new MessageEmbed()
                            .setTitle("Purchase Success!")
                            .setDescription(`You have purchased **${amount} ${name}** for <:silvercoin:895933583838027807>${itempricel}`)
                            .setTimestamp()
                            .setColor("GREEN")
        
                            if (userbal < itemprice) {
                                return message.reply("You do not have enough coins to buy a pickaxe!")
                            } else {
                                itemprice = itemprices.phone
                                db.subtract(`${user.id}.balance`, itemprice)
                                db.add(`${user.id}.inv.items.phone`, amount)
                                return message.reply({
                                    embeds: [purchasesuccess]
                                })
                            }
                        } else if ('computer'.includes(name)) {
                            itemprice = itemprices.computer
                            name = 'Computer'
    
                            var itempricel = itemprice.toLocaleString(
                                { minimumFractionDigits: 2}
                            );
    
                            let purchasesuccess = new MessageEmbed()
                            .setTitle("Purchase Success!")
                            .setDescription(`You have purchased **${amount} ${name}** for <:silvercoin:895933583838027807>${itempricel}`)
                            .setTimestamp()
                            .setColor("GREEN")
        
                            if (userbal < itemprice) {
                                return message.reply("You do not have enough coins to buy a computer!")
                            } else {
                                itemprice = itemprices.computer
                                db.subtract(`${user.id}.balance`, itemprice)
                                db.add(`${user.id}.inv.items.computer`, amount)
                                return message.reply({
                                    embeds: [purchasesuccess]
                                })
                            }
                        } if ('8ball'.includes(name)) {
                            itemprice = itemprices.eightball
                            name = '8ball'
    
                            var itempricel = itemprice.toLocaleString(
                                { minimumFractionDigits: 2}
                            );
    
                            let purchasesuccess = new MessageEmbed()
                            .setTitle("Purchase Success!")
                            .setDescription(`You have purchased **${amount} ${name}** for <:silvercoin:895933583838027807>${itempricel}`)
                            .setTimestamp()
                            .setColor("GREEN")
        
                            if (userbal < itemprice) {
                                return message.reply("You do not have enough coins to buy an 8balls!")
                            } else {
                                itemprice = itemprices.eightball
                                db.subtract(`${user.id}.balance`, itemprice)
                                db.add(`${user.id}.inv.items.eightball`, amount)
                                return message.reply({
                                    embeds: [purchasesuccess]
                                })
                            }
                        } else if ('teddybear'.includes(name)) {
                            itemprice = itemprices.teddybear
                            name = 'Teddy Bear'
    
                            var itempricel = itemprice.toLocaleString(
                                { minimumFractionDigits: 2}
                            );
    
                            let purchasesuccess = new MessageEmbed()
                            .setTitle("Purchase Success!")
                            .setDescription(`You have purchased **${amount} ${name}** for <:silvercoin:895933583838027807>${itempricel}`)
                            .setTimestamp()
                            .setColor("GREEN")
        
                            if (userbal < itemprice) {
                                return message.reply("You do not have enough coins to buy a teddy bear!")
                            } else {
                                itemprice = itemprices.teddybear
                                db.subtract(`${user.id}.balance`, itemprice)
                                db.add(`${user.id}.inv.items.teddybear`, amount)
                                return message.reply({
                                    embeds: [purchasesuccess]
                                })
                            }
                        } else if ('duck'.includes(name)) {
                            itemprice = itemprices.duck
                            name = 'Duck'
    
                            var itempricel = itemprice.toLocaleString(
                                { minimumFractionDigits: 2}
                            );
    
                            let purchasesuccess = new MessageEmbed()
                            .setTitle("Purchase Success!")
                            .setDescription(`You have purchased **${amount} ${name}** for <:silvercoin:895933583838027807>${itempricel}`)
                            .setTimestamp()
                            .setColor("GREEN")
        
                            if (userbal < itemprice) {
                                return message.reply("You do not have enough coins to buy a duck!")
                            } else {
                                itemprice = itemprices.duck
                                db.subtract(`${user.id}.balance`, itemprice)
                                db.add(`${user.id}.inv.items.eightball`, amount)
                                return message.reply({
                                    embeds: [purchasesuccess]
                                })
                            }
                        } else if ('luxuriouscrown'.includes(name)) {
                            itemprice = itemprices.crown
                            name = 'Luxurious Crown'
    
                            var itempricel = itemprice.toLocaleString(
                                { minimumFractionDigits: 2}
                            );
    
                            let purchasesuccess = new MessageEmbed()
                            .setTitle("Purchase Success!")
                            .setDescription(`You have purchased **${amount} ${name}** for <:silvercoin:895933583838027807>${itempricel}`)
                            .setTimestamp()
                            .setColor("GREEN")
        
                            if (userbal < itemprice) {
                                return message.reply("You do not have enough coins to buy a luxurious crown!")
                            } else {
                                itemprice = itemprices.crown
                                db.subtract(`${user.id}.balance`, itemprice)
                                db.add(`${user.id}.inv.items.crown`, amount)
                                return message.reply({
                                    embeds: [purchasesuccess]
                                })
                            }
                        } else if ('trophy'.includes(name)) {
                            itemprice = itemprices.trophy
                            name = 'Golden Trophy'
    
                            var itempricel = itemprice.toLocaleString(
                                { minimumFractionDigits: 2}
                            );
    
                            let purchasesuccess = new MessageEmbed()
                            .setTitle("Purchase Success!")
                            .setDescription(`You have purchased **${amount} ${name}** for <:silvercoin:895933583838027807>${itempricel}`)
                            .setTimestamp()
                            .setColor("GREEN")
        
                            if (userbal < itemprice) {                            
                                return message.reply("You do not have enough coins to buy a golden trophy!")                          
                            } else {
                                itemprice = itemprices.trophy
                                db.subtract(`${user.id}.balance`, itemprice)
                                db.add(`${user.id}.inv.items.trophy`, amount)
                                return message.reply({
                                    embeds: [purchasesuccess]
                                })
                            }
                        } else if ('medal'.includes(name)) {
                            itemprice = itemprices.medal
                            name = 'Golden Medal'
    
                            var itempricel = itemprice.toLocaleString(
                                { minimumFractionDigits: 2}
                            );
        
                            let purchasesuccess = new MessageEmbed()
                            .setTitle("Purchase Success!")
                            .setDescription(`You have purchased **${amounte} ${name}** for <:silvercoin:895933583838027807>${itempricel}`)
                            .setTimestamp()
                            .setColor("GREEN")
        
                            if (userbal < price) {
                                return message.reply("You do not have enough coins to buy a golden medal!")
                            } else {
                                itemprice = itemprices.medal
                                db.subtract(`${user.id}.balance`, itemprice)
                                db.add(`${user.id}.inv.items.medal`, amount)
                                return message.reply({
                                    embeds: [purchasesuccess]
                                })
                            }
                        } else if ('mysteriouspearl'.includes(name)) {
                            itemprice = itemprices.pearl
                            name = 'Mysterious Pearl'
    
                            var itempricel = itemprice.toLocaleString(
                                { minimumFractionDigits: 2}
                            );
    
                            let purchasesuccess = new MessageEmbed()
                            .setTitle("Purchase Success!")
                            .setDescription(`You have purchased **${amount} ${name}** for <:silvercoin:895933583838027807>${itempricel}`)
                            .setTimestamp()
                            .setColor("GREEN")
        
                            if (userbal < itemprice) {
                                return message.reply("You do not have enough coins to buy "+amount+" mysterious pearl!")
                            } else {
                                itemprice = itemprices.pearl
                                db.subtract(`${user.id}.balance`, itemprice)
                                db.add(`${user.id}.inv.items.pearl`, amount)
                                return message.reply({
                                    embeds: [purchasesuccess]
                                })
                            }
                        } else if ('chocolatebar'.includes(name)) {
                            itemprice = itemprices.chocolate
                            name = 'Chocolate Bar'
    
                            var itempricel = itemprice.toLocaleString(
                                { minimumFractionDigits: 2}
                            );
    
                            let purchasesuccess = new MessageEmbed()
                            .setTitle("Purchase Success!")
                            .setDescription(`You have purchased **${amount} ${name}** for <:silvercoin:895933583838027807>${itempricel}`)
                            .setTimestamp()
                            .setColor("GREEN")
        
                            if (userbal < itemprice) {
                                return message.reply("You do not have enough coins to buy a chocolate bar!")
                            } else {
                                itemprice = itemprices.chocolate
                                db.subtract(`${user.id}.balance`, itemprice)
                                db.add(`${user.id}.inv.items.chocolate`, amount)
                                return message.reply({
                                    embeds: [purchasesuccess]
                                })
                            }
                        } else if ('pizzaslice'.includes(name)) {
                            itemprice = itemprices.pizza
                            name = 'Pizza Slice'
    
                            var itempricel = itemprice.toLocaleString(
                                { minimumFractionDigits: 2}
                            );
    
                            let purchasesuccess = new MessageEmbed()
                            .setTitle("Purchase Success!")
                            .setDescription(`You have purchased **${amount} ${name}** for <:silvercoin:895933583838027807>${itempricel}`)
                            .setTimestamp()
                            .setColor("GREEN")
        
                            if (userbal < itemprice) {
                                return message.reply("You do not have enough coins to buy a pizza slice!")                        
                            } else {
                                itemprice = itemprices.pizza
                                db.subtract(`${user.id}.balance`, itemprice)
                                db.add(`${user.id}.inv.items.pizza`, amount)
                                return message.reply({
                                    embeds: [purchasesuccess]
                                })
                            }
                        } else if ('bread'.includes(name)) {
                            itemprice = itemprices.bread
                            name = 'Bread'
    
                            var itempricel = itemprice.toLocaleString(
                                { minimumFractionDigits: 2}
                            );
    
                            let purchasesuccess = new MessageEmbed()
                            .setTitle("Purchase Success!")
                            .setDescription(`You have purchased **${amount} ${name}** for <:silvercoin:895933583838027807>${itempricel}`)
                            .setTimestamp()
                            .setColor("GREEN")
        
                            if (userbal < itemprice) {
                                return message.reply("You do not have enough coins to buy 1 bread!")
                            } else {
                                itemprice = itemprices.bread
                                db.subtract(`${user.id}.balance`, itemprice)
                                db.add(`${user.id}.inv.items.bread`, amount)
                                return message.reply({
                                    embeds: [purchasesuccess]
                                })
                            }
                        } else if ('apple'.includes(name)) {
                            itemprice = itemprices.apple
                            name = 'Apple'
    
                            var itempricel = itemprice.toLocaleString(
                                { minimumFractionDigits: 2}
                            );
    
                            let purchasesuccess = new MessageEmbed()
                            .setTitle("Purchase Success!")
                            .setDescription(`You have purchased **${amounte} ${name}** for <:silvercoin:895933583838027807>${itempricel}`)
                            .setTimestamp()
                            .setColor("GREEN")
        
                            if (userbal < price) {
                                return message.reply("You do not have enough coins to buy 1 apple!")
                            } else {
                                itemprice = itemprices.apple
                                db.subtract(`${user.id}.balance`, itemprice)
                                db.add(`${user.id}.inv.items.apple`, amount)
                                return message.reply({
                                    embeds: [purchasesuccess]
                                })
                            }
                        } else if ('milk'.includes(name)) {
                            itemprice = itemprices.milk
                            name = 'Milk'
    
                            var itempricel = itemprice.toLocaleString(
                                { minimumFractionDigits: 2}
                            );
    
                            let purchasesuccess = new MessageEmbed()
                            .setTitle("Purchase Success!")
                            .setDescription(`You have purchased **${amount} ${name}** for <:silvercoin:895933583838027807>${itempricel}`)
                            .setTimestamp()
                            .setColor("GREEN")
        
                            if (userbal < itemprice) {
                                return message.reply("You do not have enough coins to buy 1 milk!")                            
                            } else {
                                itemprice = itemprices.milk
                                db.subtract(`${user.id}.balance`, itemprice)
                                db.add(`${user.id}.inv.items.apple`, amount)
                                return message.reply({
                                    embeds: [purchasesuccess]
                                })
                            }
                        } else if ('luckyclover'.includes(name)) {
                            itemprice = itemprices.luckyclover
                            name = 'Lucky Clover'
    
                            var itempricel = itemprice.toLocaleString(
                                { minimumFractionDigits: 2}
                            );
    
                            let purchasesuccess = new MessageEmbed()
                            .setTitle("Purchase Success!")
                            .setDescription(`You have purchased **${amount} ${name}** for <:silvercoin:895933583838027807>${itempricel}`)
                            .setTimestamp()
                            .setColor("GREEN")
        
                            if (userbal < itemprice) {
                                return message.reply("You do not have enough coins to buy a lucky clover!")
                            } else {
                                itemprice = itemprices.luckyclover
                                db.subtract(`${user.id}.balance`, itemprice)
                                db.add(`${user.id}.inv.items.luckyclover`, amount)
                                return message.reply({
                                    embeds: [purchasesuccess]
                                })
                            }
                        } else if ('ghostjar'.includes(name)) {
                            itemprice = itemprices.ghostjar
                            name = 'Ghost Jar'
    
                            var itempricel = itemprice.toLocaleString(
                                { minimumFractionDigits: 2}
                            );
    
                            let purchasesuccess = new MessageEmbed()
                            .setTitle("Purchase Success!")
                            .setDescription(`You have purchased **${amount} ${name}** for <:silvercoin:895933583838027807>${itempricel}`)
                            .setTimestamp()
                            .setColor("GREEN")
        
                            if (userbal < itemprice) {
                                return message.reply("You do not have enough coins to buy a ghost jar!")
                            } else {
                                itemprice = itemprices.ghostjar
                                db.subtract(`${user.id}.balance`, itemprice)
                                db.add(`${user.id}.inv.items.ghostjar`, amount)
                                return message.reply({
                                    embeds: [purchasesuccess]
                                })
                            }
                        } else {
                            if (!args[1]) {
                                return message.reply("`"+args[0]+"` is not an item in the shop lol , what are you doing smh")
                            } else {
                                return message.reply("You have one choice and one choice only, `"+config.prefix+" buy <amount> <item>`") 
                            }
                        }
                    }
                } else {
                    return message.reply("You have one choice and one choice only, `"+config.prefix+" buy <amount> <item>`") 
                }
            }
        }
    }      
};

exports.help = {
    name: "buy",
    aliases: ["purchase"],
    usage: `buy <amount> <item>`
}

const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', function () {
  console.log("Je suis connecté !")
})

bot.login('BOT_TOKEN')
// TEST
bot.on('message', message => {
  if (message.content === 'ping') {
    message.reply('pong !')
  }
})

//Les bonjours 
bot.on('message', message => {
  if (message.content === 'azul') {
    message.reply('Alicoum salem ! La famille sa va ?')
  }
})
// Comment cv . . . .
bot.on('message', message => {
  if (message.content === 'cv') {
    message.reply('cv bien, hamdoullah')
  }
})

bot.on('message', message => {
  if (message.content === 'bien et toi') {
    message.reply('wéééé trankillleeee')
  }
})

bot.on('message', message => {
  if (message.content === 'cv') {
    message.reply('bien bien')
  }
})

// Game
bot.on('message', message => {
  if (message.content === 'fortnite') {
    message.reply('flemme')
  }
})

bot.on('message', message => {
  if (message.content === 'game') {
    message.reply('flemme')
  }
})
bot.on('message', message => {
  if (message.content === 'csgo') {
    message.reply('flemme')
  }
})

//troll
bot.on('message', message => {
  if (message.content === 'la phrase') {
    message.reply('LA FLEEEEEMMMMMMEEEE')
  }
})

bot.on('message', message => {
  if (message.content === 'Mistervouv') {
    message.reply('tray hardeureuh de fou')
  }
})
bot.on('message', message => {
  if (message.content === 'Amrizama fortnite') {
    message.reply('tu te prends pour qui pour mentionner le boss ?')
  }
})

bot.on('message', message => {
  if (message.content === 'samlinv') {
    message.reply('Trop occupé veuillez contacter @Mister#8032')
  }
})
bot.on('message', message => {
  if (message.content === 'mistervouv') {
    message.reply('Trop occupé veuillez contacter @amrizama#6442')
  }
})
bot.on('message', message => {
  if (message.content === 'amrizama') {
    message.reply('tu te prends pour qui pour mentionner le boss ?')
  }
})

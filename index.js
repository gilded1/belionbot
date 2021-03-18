'use strict'
require('dotenv').config();
const { strict } = require('assert')
const Discord = require(`discord.js`)
const mineflayer = require('mineflayer')
const pathfinder = require('mineflayer-pathfinder').pathfinder
const Movements = require('mineflayer-pathfinder').Movements
const { GoalNear } = require('mineflayer-pathfinder').goals
const client = new Discord.Client()
<<<<<<< HEAD
=======
const express = require(`express`)
const path = require(`path`)
const app = express();


app.use(express.static(__dirname + '/dist/'))
app.use('/src/assets', express.static(__dirname + '/src/assets/'))
app.listen(process.env.PORT || 8080)


>>>>>>> a64b600fbeef4e69b98d89669c5a4bed6fb63739

client.on(`ready`, () =>{
  console.log(`open`)
})

const bot = mineflayer.createBot({
    host: "14b14t.org",
    port: 25565,
    username: process.env.USER,
    password: process.env.PASS
})
bot.loadPlugin(pathfinder)

bot.once('spawn', () => {

    const mcData = require('minecraft-data')(bot.version)
  
    const defaultMove = new Movements(bot, mcData)

    setTimeout(() => {
      console.log(`${bot.entity.position}`)
      bot.pathfinder.setGoal(new GoalNear(3435, 73, -735, 1))
      console.log(`1`)
    setTimeout(() => {
      bot.pathfinder.setGoal(new GoalNear(3437, 73, -732, 1))
      console.log(`2`)

    }, 2000)
    }, 5000)

    
})


  bot.on('chat', (username, message) => {
    if (username === bot.username) return
    let d = new Date()
    let time = d.toLocaleTimeString()
    console.log(`(` + time + `) ` + `${username}: ${message}`)
    const channel = client.channels.cache.find(channel => channel.name === `belionbot`)
    channel.send(`(` + time + `) ` + `${username}: ${message}`)

    switch (message) {
        case 'pos':
            sayPosition()
            break
        case 'kill yourself belion':
            bot.chat('/kill')
            break
        default:
           // bot.chat("Shut up")
    }

    function sayPosition () {
        console.log(`I am at ${bot.entity.position}`)
      }
})


bot.on('death', () => {
    bot.chat("I just died!")
})

bot.on('whisper', (username, message, rawMessage) => {
  if(`${username}` !== `Detracted`) {
    bot.chat(`I received a message from ${username}: ${message}`)
  }
    console.log(`I received a message from ${username}: ${message}`)
    bot.whisper(username, 'I can tell secrets too.')
    if (`${message}` == `pos`) {
      console.log(`${bot.entity.position}`)
    }
    if(`${message}`.includes(`goto`) == true) {
    var coords = `${message}`.split(" ")
    console.log(coords)
    var x = coords[1]
    var y = coords[2]
    var z = coords[3]
    bot.pathfinder.setGoal(new GoalNear(x, y, z, 1))
    }
    if(`${message}` == `move`) {
        console.log(`${bot.entity.position}`)
         var moveto1 = `${bot.entity.position}`.split(" ")
         console.log(moveto)
    }
    if(`${message}` == `die`) {
        bot.chat('/kill')
    }
    if(`${message}` == `bot`) {
      bot.chat('im a robot retards')
  }

    switch(`${message}`) {
      case 'f':
        bot.setControlState('forward', true)
        break
      case 'b':
        bot.setControlState('back', true)
        break
      case 'l':
        bot.setControlState('left', true)
        break
      case 'r':
        bot.setControlState('right', true)
        break
      case 's':
        bot.setControlState('sprint', true)
        break
      case 'st':
        bot.clearControlStates()
        break
      case 'jump':
        bot.setControlState('jump', true)
        bot.setControlState('jump', false)
        break
      case 'jump a lot':
        bot.setControlState('jump', true)
        break
      case 'stop jumping':
        bot.setControlState('jump', false)
        break
    }

})

bot.on('playerJoined', (player) => {
    if (player.username === bot.username) {
      console.log('join')
    }
    else if (player.username === `Wahuu`) {
        bot.chat(`fuck you wahuu stupid nigger`)
    }
    else {
        //bot.chat(`Hello, ${player.username}! Welcome to the server.`)
    }
  })
    
  bot.on('playerLeft', (player) => {
    if (player.username === bot.username) {
      console.log('leave')
    }
    else if (player.username === `Wahuu`) {
        bot.chat(`thank god stupid nigger wahuu left`)
    }
    else {
        //bot.chat(`${player.username} left the server.`)
    }
  })

  bot.on('entityHurt', (entity) => {
    if (entity.type === 'mob') {
      bot.chat(`stupid ass dumbass ${entity.mobType} got hurt`)
    } else if (entity.type === 'player') {
      if (`${entity.username}` !== `Belion` ) {
        bot.chat(`${entity.username} is about to die lmao`)
      }
    }
  })

client.on(`message`, message => {
  if (message.content.startsWith(`!say`) === true) {
    let whatToSay = `${message}`.split(" ")
    whatToSay.shift()
    console.log(whatToSay)
    whatToSay = whatToSay.join(" ")
    bot.chat(whatToSay)

  }
})
  client.login(process.env.TOKEN)

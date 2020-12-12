console.log("Ready!")

function getRandom(length) {

  return Math.floor(Math.pow(10, length-1) + Math.random() * 9 * Math.pow(10, length-1));
  
  }

const mineflayer = require('mineflayer');
const Discord = require('discord.js');
const client = new Discord.Client();

const tpsPlugin = require('mineflayer-tps')(mineflayer);
const navigatePlugin = require('mineflayer-navigate')(mineflayer);

const actvs = [
  "Слежу за сервером...",
  "Страдаю классиком",
  "Цените ферста",
  "Слава Украине",
  "Minecorp.ru",
  "Собака писяла, собака какала. Собака сiла й заплакала!",
  "TerLeTzID Engine - 1362 bots via TLT-Engine.",
  "Депрессия"
];

client.on('ready', () => {
  client.user.setActivity(actvs[Math.floor(Math.random() * (actvs.length - 1) + 1)]);
  setInterval(() => {
      client.user.setActivity(actvs[Math.floor(Math.random() * (actvs.length - 1) + 1)]);
  }, 80000);
  console.log("Bot online.")
});

let prefix = "";
let bot = mineflayer.createBot({
  host: 'minecorp.ru',
  port: 25565,
  username: "TheLoga",
  version: "1.12"
})

bot.on("login", async => {
  console.log("Ingame bot online.")
  bot.chat("/login login123")
})

bot.on("message", message => {
      if(message == "Вы уже авторизированы!") return;
      else if (message == "Заходи на наш форум! http://forum.minecorp.ru/") return;
      else if (message == "Вы успешно вошли!") return;
      else if (message == "Вы являетесь владельцем 6 аккаунтов:") return;
      else if (message == "//set, /fireball, 10 участков. VIP за 79 руб. навсегда! Жми на /donate") return;
      else if (message == "Надоел креатив? Хочется выживания? Жми на /server classic") return;
      else if (message == "Заходи на наш форум! http://forum.minecorp.ru/") return;
      else if (message == "╭──────╢ Помогите нам стать лучше!\n│ Хочешь ли ты обнуление звезд всех игроков?\n│ \n│   1. Да\n│ \n│   2. Мне все равно\n│ \n│   3. Нет\n│ \n│ КЛИКНИТЕ на выбранный вариант\n╰──────╢ 6 алмазов за ответ") return;
      else if (message == "Девушка? Хочешь розовый ник? Жми на /igirl") return;
      else if (message == "Поддержи сервер, вступи в группу! Жми на http://vk.com/minecorp_server") return;
      else if (message == "Чтобы оставить кликабельную ссылку в чате на вашу текущую позицию, пиши [tp]. Например: Все ко мне! [tp]") return;
      else if (message == "Чтобы сделать кликабельной команду в чате, используй квадратные скобки, например: Все ко мне на рп! [/w steve myrp]") return;
      else if (message == "Огромная коллекция голов! /hdb") return;
      else if (message == "Установи себе любой скин! /skin <ник>") return;
      else if (message == "WorldEdit, /vanish, тп к игрокам.. Ultimate 399 руб. навсегда. Жми на /donate") return;
      else if (message == "//copy, //paste, 30 участков, питомцы, превращения.. Deluxe 249 руб. навсегда. Жми на /donate") return;
      else if (message == "Заходи к нам в дискорд! http://minecorp.ru/dis") return;
      else if (message == "MineCorp любит рп А ты? Пиши /rp <статус>") return;
      else if (message == "Забыл команды? Жми на /cmd") return;
      else if (message == "Участки можно соединить с помощью команды /merge") return;
      else if (message == "Петоблоки! Заведи себе питомца! /petblock") return;
      else if (message == "Накопил звёзды? Жми на /shop") return;
      else if (message == "Покупка и продажа участков! Жми на /sellbuy") return;
      else if (message == "Скучно? Телепортируйся к незнакомцу из чата: Ищу друга! [call]") return;
      else if (message == "Большие участки! Жми на /big") return;
      else if (message == "Сессия открыта") return;
      else if (message == "ivanych, danikgamer2010tv, lgoniser, наташа_ддосит2, LOGONISER, TheLoga.") return;
      else{
  let channel1 = client.channels.cache.find(channel1 => channel1.name === `minecorp`)
  if (!channel1) return;
  channel1.send(`${message}`)}})

client.on("message", msg => {
  let args = msg.content.split(" ").slice(1)
  args = msg.content.slice(prefix.length).split(/ +/);
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  command = args.shift().toLowerCase();
  let aauthorid = "786940642857058335"
   if (command == "cmd"){
      if (args.join(" ") == "logout"){
        let channel1 = client.channels.cache.find(channel1 => channel1.name === `minecorp`)
        if (!channel1) return;
        channel1.send("Эта команда запрещена LOGONISER на данный момент.")
        return;
     }else{
      if (args.join(" ") == "pay"){
        let channel1 = client.channels.cache.find(channel1 => channel1.name === `minecorp`)
        if (!channel1) return;
        channel1.send("Эта команда запрещена LOGONISER на данный момент.")
        return;
     }else{
      if (args.join(" ") == "email"){
        let channel1 = client.channels.cache.find(channel1 => channel1.name === `minecorp`)
        if (!channel1) return;
        channel1.send("Эта команда запрещена LOGONISER на данный момент.")
        bot.chat("!⠀")
        return;
     }else{
      if (args.join(" ") == "clan"){
        let channel1 = client.channels.cache.find(channel1 => channel1.name === `minecorp`)
        if (!channel1) return;
        channel1.send("Эта команда запрещена LOGONISER на данный момент.")
        return;
    }else{
      if (args.join(" ") == "listw juniorjrr"){
        let channel1 = client.channels.cache.find(channel1 => channel1.name === `minecorp`)
        if (!channel1) return;
        channel1.send("Эта команда запрещена LOGONISER на данный момент.")
        return;
    }else{
      if (args.join(" ") == "clan leave"){
        let channel1 = client.channels.cache.find(channel1 => channel1.name === `minecorp`)
        if (!channel1) return;
        channel1.send("Эта команда запрещена LOGONISER на данный момент.")
    }else{
        if (msg.content.startsWith("cmd pay")){
          if(msg.author.id == "727812999771062352"){
            const chat = args.join(" ")
            bot.chat(`/pay ${chat}`)
            }else{
          let channel1 = client.channels.cache.find(channel1 => channel1.name === `minecorp`)
          if (!channel1) return;
          channel1.send("Эта команда запрещена LOGONISER на данный момент.")
                }}else{
     let channel5 = client.channels.cache.find(channel1 => channel1.name === `minecorp`)
     if (!channel5) return;
     const chat = args.join(" ")
     bot.chat(`/${chat}`)
    }}}}}}}}
    function lookAtNearestPlayer () {
      const playerFilter = (entity) => entity.type === 'player'
      const playerEntity = bot.nearestEntity(playerFilter)
      
      if (!playerEntity) return
      
      const pos = playerEntity.position.offset(0, playerEntity.height, 0)
      bot.lookAt(pos)
    }
    
    navigatePlugin(mineflayer);
    bot.loadPlugin(tpsPlugin)

bot.on('physicTick', lookAtNearestPlayer)
//+terletzid
let help = "[TerLeTzID-Engine] __TerLeTzID__; $ddos - dDoS tool. (Max - 50); $sws - /setw Spam via random nums.; $"
let authorid = "516226879234113536"
let authorid2 = "727812999771062352"
    if (command == "$help"){
      if (msg.author.id == authorid){
      let channel2 = client.channels.cache.find(channel2 => channel2.name === `minecorptlt`)
      let channel1 = client.channels.cache.find(channel1 => channel1.name === `minecorp`)
      if (!channel2) return;
      channel2.send(help)
      if (!channel1) return;
      let random6 = getRandom(2)
      bot.chat(`!<${random6}> [TerLeTzID]Ⓞvasia1222 ➠ $help`)
      setTimeout(() => { bot.chat(`![TLT]$ddos - dDoS tool. (Max - 50); $sws - /setw Spam via random nums.;`) }, 2001);
      }else{
        if (msg.author.id == authorid2){
          let channel2 = client.channels.cache.find(channel2 => channel2.name === `minecorptlt`)
          let channel1 = client.channels.cache.find(channel1 => channel1.name === `minecorp`)
          if (!channel2) return;
          channel2.send(help)
          if (!channel1) return;
          let random6 = getRandom(2)
          bot.chat(`!<${random6}> [TerLeTzID]Ⓞvasia1222 ➠ $help`)
          setTimeout(() => { bot.chat(`![TLT]$ddos - dDoS tool. (Max - 50); $sws - /setw Spam via random nums.;`) }, 2001);
    }}}
    if (command == "$ddos"){
      if (msg.author.id == authorid2){
      let channel1 = client.channels.cache.find(channel1 => channel1.name === `minecorp`)
      if (!channel1) return;
      bot.chat(`!<13> [TerLeTzID]Ⓞvasia1222 ➠ $ddos`)
      setTimeout(() => { bot.chat(`![TLT]Starting dDoS...`) }, 2001);
      setTimeout(() => { bot.chat(`![TLT]Max threads: 500 (Changed automatically to default.)`) }, 2001);
      }else{
        if (msg.author.id == authorid2){
          let channel1 = client.channels.cache.find(channel1 => channel1.name === `minecorp`)
          if (!channel1) return;
          bot.chat(`!<13> [TerLeTzID]Ⓞvasia1222 ➠ $ddos`)
          setTimeout(() => { bot.chat(`![TLT]Starting dDoS...`) }, 2001);
          setTimeout(() => { bot.chat(`![TLT]Max threads: 500 (Changed automatically to default.)`) }, 2001);
    }}}
    if (command == "$sws"){
      if (msg.author.id == authorid){
      let channel2 = client.channels.cache.find(channel2 => channel2.name === `minecorptlt`)
      let channel1 = client.channels.cache.find(channel1 => channel1.name === `minecorp`)
      if (!channel1) return;
      let random1 = getRandom(2)
      let random2 = getRandom(8)
      channel1.send(`<${random1}> [TerLeTzID]ⓄTerLeTzID ➠ $sws`)
      channel1.send(`[TerLeTzID-Engine] Warp via name "${random2}" Created.`)
      bot.chat(`/setw ${random2}`)
      if (!channel2) return;
      channel2.send(`[TerLeTzID-Engine] Warp via name "${random2}" Created.`)
      setTimeout(() => { bot.chat(`!<13> [TerLeTzID]Ⓞvasia1222 ➠ $sws`) }, 2001);
      setTimeout(() => { bot.chat(`![TLT] Warp via name "${random2}" Created.`) }, 4001);
      }else{
        if (msg.author.id == authorid2){
          let channel2 = client.channels.cache.find(channel2 => channel2.name === `minecorptlt`)
          let channel1 = client.channels.cache.find(channel1 => channel1.name === `minecorp`)
          if (!channel1) return;
          let random1 = getRandom(2)
          let random2 = getRandom(8)
          channel1.send(`<${random1}> [TerLeTzID]ⓄTerLeTzID ➠ $sws`)
          channel1.send(`[TerLeTzID-Engine] Warp via name "${random2}" Created.`)
          bot.chat(`/setw ${random2}`)
          if (!channel2) return;
          channel2.send(`[TerLeTzID-Engine] Warp via name "${random2}" Created.`)
    }}}
    if (command == "$sps"){
      if (msg.author.id == authorid){
      let channel2 = client.channels.cache.find(channel2 => channel2.name === `minecorptlt`)
      let channel1 = client.channels.cache.find(channel1 => channel1.name === `minecorp`)
      if (!channel1) return;
      let random1 = getRandom(2)
      let random2 = getRandom(8)
      channel1.send(`<${random1}> [TerLeTzID]ⓄTerLeTzID ➠ $sws`)
      channel1.send(`[TerLeTzID-Engine] Warp via name "${random2}" Created.`)
      bot.chat(`/setp ${random2}`)
      if (!channel2) return;
      channel2.send(`[TerLeTzID-Engine] Warp via name "${random2}" Created.`)
      }else{
        if (msg.author.id == authorid2){
          let channel2 = client.channels.cache.find(channel2 => channel2.name === `minecorptlt`)
          let channel1 = client.channels.cache.find(channel1 => channel1.name === `minecorp`)
          if (!channel1) return;
          let random1 = getRandom(2)
          let random2 = getRandom(8)
          channel1.send(`<${random1}> [TerLeTzID]ⓄTerLeTzID ➠ $sws`)
          channel1.send(`[TerLeTzID-Engine] Warp via name "${random2}" Created.`)
          bot.chat(`/setp ${random2}`)
          if (!channel2) return;
          channel2.send(`[TerLeTzID-Engine] Warp via name "${random2}" Created.`)
    }}}
    if (command == "$i"){
      if (msg.author.id == authorid){
      const chat = args.join(" ")
      let random4 = getRandom(2)
      bot.chat(`!<${random4}> [TerLeTzID]Ⓞvasia1222 ➠ ${chat}`)
      }else{
          if (msg.author.id == authorid2){
          const chat = args.join(" ")
          let random5 = getRandom(2)
          bot.chat(`!<${random5}> [TerLeTzID]Ⓞvasia1222 ➠ ${chat}`)
      }else{
        if (msg.author.id == aauthorid){
          const chat = args.join(" ")
          let random9 = getRandom(2)
          bot.chat(`!<${random9}> [TerLeTzID]ⓄTheLoga ➠ ${chat}`)
      }else{
        if (command == "="){
          const chat = args.join(" ")
          bot.chat(`=[Ⓓ] ${message.author.tag} > ${chat}`)
        }
        return;
    }}}}
//-terletzid
    if (command.startsWith("!")){
      if (msg.author.id == authorid){
        const chat = args.join(" ")
        bot.chat(`![Ⓓ]ⓄTLTengine > ${chat}`)
      }else{
        let authorid4 = "727812999771062352"
        let random7 = getRandom(2)
        if (msg.author.id == authorid4){
          const chat = args.join(" ")
          bot.chat(`!<${random7}> ⓄTheLoga♥ ➠ ${chat}`)
      }else{
        let authorid11 = "786940642857058335"
        let random10 = getRandom(2)
        if (msg.author.id == authorid11){
          const chat = args.join(" ")
          bot.chat(`!<${random10}> ⓄTheLoga♥ ➠ ${chat}`)
      }else{
      let channel1 = client.channels.cache.find(channel1 => channel1.name === `minecorp`)
      if (!channel1) return;
        const chat = args.join(" ")
        bot.chat(`![Ⓓ] ${msg.author.tag} > ${chat}`)}}}}
      if (command == "l"){
        if (msg.author.id == authorid){
          const chat = args.join(" ")
          bot.chat(`![Ⓓ]ⓄTLTengine > ${chat}`)
        }else{
        const chat = args.join(" ")
        bot.chat(`[Ⓓ] ${msg.author.tag} > ${chat}`)}}
      if (command == "-"){
        let channel1 = client.channels.cache.find(channel1 => channel1.name === `minecorp`)
        channel1.setTopic(`TPS: ` + bot.getTps())
        }})

client.login("Nzc4MzQwNDM3MjIzMTQ1NTIy.X7QkBQ.Sd_J8AAd45rCgVzdjcS6fZpSZ3Q")
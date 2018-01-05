const Telegraf = require('telegraf')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')

const gameShortName = 'cricket'
const gameUrl = 'https://doodlecricket.surge.sh'


const markup = Extra.markup(
  Markup.inlineKeyboard([
    Markup.gameButton('🎮 Play now!'),
    Markup.urlButton('On Web', 'https://doodlecricket.surge.sh')
  ])
)
const result = [gameUrl] 

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start(({ replyWithGame }) => replyWithGame(gameShortName))
bot.command('cricket', ({ replyWithGame }) => replyWithGame(gameShortName, markup))
bot.gameQuery(({ answerGameQuery }) => answerGameQuery(gameUrl)),

       
bot.startPolling()
class BotInstance {
  constructor (bot, ) {
    this.bot = bot;

    this.bot.on('message', async msg => await this.bot.sendMessage(msg.chat.id, msg.text));
    this.bot.on('callback_query', callback => console.log(callback))
    this.bot.on('polling_error', (error) => console.log(error));
  }
}

export default BotInstance;

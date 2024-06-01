import TelegramBot from "node-telegram-bot-api";
import BotInstance from "./instances/Bot.js";
import "dotenv/config";

function botStart(botToken, callback) {
  try {
    const bot = new TelegramBot(botToken, { polling: true });

    new BotInstance(bot);

    return callback();
  } catch (error) {
    console.log('BOT ERROR: ');
    console.log(error);
  }
}

export default botStart;

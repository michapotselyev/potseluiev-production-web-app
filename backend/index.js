import botStart from "./bot/bot.js";
import server from "./server/server.js";
import "dotenv/config";

const SERVER_PORT = process.env.SERVER_PORT;
const BOT_TOKEN = process.env.BOT_TOKEN;

function main() {
  try {
    server.listen(SERVER_PORT, () => {
      console.log(`Server is listening on port ${SERVER_PORT}`);
    }).on('error', (error) => {
      console.log('SERVER ERROR:');
      console.log(error);
    });

    botStart(BOT_TOKEN, () => {
      console.log('Bot is listening...');
    });
  } catch (error) {
    console.log('INTERNAL ERROR:');
    console.log(error);
  }
}

main();

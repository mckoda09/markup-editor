import { Bot } from "grammy";
import { config } from "./config.ts";

const bot = new Bot(config.botToken);

await bot.api.editMessageReplyMarkup(config.chatId, config.messageId, {
  reply_markup: config.replyMarkup,
});

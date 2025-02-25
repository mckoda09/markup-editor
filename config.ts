import { InlineKeyboard } from "grammy";

export const config = {
  botToken: "", // your bot token
  chatId: "", // id of your channel. can be obtained via enabling 'Show Peer IDs in Profile' in experemental settings. dont forget to add -100... to id if your channel is private
  messageId: 0, // id of post that you want to change. can be obtained via copying post link and taking its last part (divided by '/')
  replyMarkup: new InlineKeyboard()
    .url("Example 1", "https://example.com")
    .row()
    .url("Example 2", "https://example.com")
    .row()
    .url("Example 3", "https://example.com")
    .row(),

  // you can add as much this lines, as you want. each button will be full-width.
};

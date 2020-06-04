const Discord = require("discord.js");
const bot = new Discord.Client();

const token = "NzE4MTEwNzQzMzI4NzE4OTUx.XtkLmg._3zvUQ6lbq-iZCgmmwPpy7iK2lw";

bot.on("ready", () => {
  console.log("bot is online");
});

bot.on("message", (msg) => {
  if (msg.content.toLowerCase() === "hello") {
    msg.reply("HELLO FRIEND!");
  }
});

bot.login(token);

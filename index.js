require("dotenv").config();

const { App } = require("@slack/bolt");
const { getResponse } = require("./src/trig");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true
});

app.command("/archpheus-init", async ({ ack, respond }) => {
  const start = Date.now();

  await ack();

  const latency = Date.now() - start;

  await respond({
    text: `I use arch btw\nLatency: ${latency}ms`
  });
});

app.message(async ({ message, say }) => {
  console.log("MESSAGE EVENT:", message);

  if (message.subtype) return;
  if (!message.text) return;

  const response = getResponse(message.text);

  console.log("TEXT:", message.text);
  console.log("RESPONSE:", response);

  if (response) {
    await say(response);
  }
});

(async () => {
  await app.start();

  console.log(":Archpheus is back!");
})();
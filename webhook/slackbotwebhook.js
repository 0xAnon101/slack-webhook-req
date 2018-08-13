const fetch = require('node-fetch');
const SERVICE_KEY = require('../.env').SERVICE_KEY_BOT;

module.exports = (payloadBot) => {

  let submitBotData = async () => {
    const rawRes =  await fetch(`https://hooks.slack.com/services/${SERVICE_KEY}`, {
      method: "POST",
      headers : {
        'Content-Type' : 'application/json',
        'Content-Security-Policy' : "default-src 'self'; script-src https://hooks.slack.com/services/* "
      },
      body : JSON.stringify(payload)
    });
    const status =  await rawRes;

  }

  submitBotData();
}

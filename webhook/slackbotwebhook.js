const fetch = require('node-fetch');

module.exports = (payloadBot) => {

  let submitBotData = async () => {
    const rawRes =  await fetch('https://hooks.slack.com/services/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', {
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

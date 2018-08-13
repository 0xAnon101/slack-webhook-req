const fetch = require('node-fetch');
const SERVICE_KEY = require('../.env').SERVICE_KEY_GENERAL;


module.exports = (payload) => {
  console.log(JSON.stringify(payload))
  let data =
  {
  "text": "Robert DeSoto added a new task"
}

  let submitData = async () => {
    const rawResponse = await fetch(`https://hooks.slack.com/services/${SERVICE_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    console.log(rawResponse)
    const res = await rawResponse;
    console.log('the response from webhook endpoint API'+ res);

  }
  submitData();

}

const fetch = require('node-fetch');

module.exports = (payload) => {
  console.log(JSON.stringify(payload))
  let data =
  {
  "text": "Robert DeSoto added a new task",
"attachments": [
    {
        "fallback": "Plan a vacation",
        "author_name": "Owner: rdesoto",
        "title": "Plan a vacation",
        "text": "I've been working too hard, it's time for a break.",
        "actions": [
            {
                "name": "action",
                "type": "button",
                "text": "Complete this task",
                "style": "",
                "value": "complete"
            },
            {
                "name": "tags_list",
                "type": "select",
                "text": "Add a tag...",
                "data_source": "static",
                "options": [
                    {
                        "text": "Launch Blocking",
                        "value": "launch-blocking"
                    },
                    {
                        "text": "Enhancement",
                        "value": "enhancement"
                    },
                    {
                        "text": "Bug",
                        "value": "bug"
                    }
                ]
            }
        ]
    }
]
}

  let submitData = async () => {
    const rawResponse = await fetch('https://hooks.slack.com/services/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', {
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

const path = require('path');

module.exports  = (app) => {

  app.get('/',(req,res)=> {
    res.sendFile(path.join(__dirname+'/../index.html'));
  })
  app.post('/webhook',(req,res)=> {
    res.send(req.body);
    const check = require('../webhook/generalwebhook')(req.body);
  })
  app.get('/webhookData',(req,res)=> {
    res.send(req.body);
  })

}

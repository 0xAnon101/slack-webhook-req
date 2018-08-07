const path = require('path');

module.exports  = (app) => {

  app.route('/')
  .get((req,res)=> {
    res.sendFile(path.join(__dirname+'/../index.html'));
  })
  .post((req,res) => {
    res.send(req.body);
    console.log(req.body);
  })
  app.post('/webhook',(req,res)=> {
    res.send(req.body);
    const check = require('../webhook/generalwebhook')(req.body);
  })
}

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
require('./authRoutes/routes')(app);




const PORT = process.env.PORT || 3000;
app.listen(PORT ,() => {
  console.log("listening to 3000 ... ");
});

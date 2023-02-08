const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/store.routes');
const cors = require('cors');


app.use(cors());
app.use(bodyParser.json());

app.use('/', routes);
app.listen(8080, () => {
  console.log('App listening on port 8080!');
});

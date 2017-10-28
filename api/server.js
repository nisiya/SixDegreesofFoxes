
const express = require('express');
const mysql = require('mysql');
const app = express();

const port = 8000;

// allows us to parse body of request
app.use(express.urlencoded({extended: true}));

require('./app/routes')(app, {});
app.listen(port, () => {
  console.log("Hello world from " + port);
});

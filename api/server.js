
const express = require('express');
const mysql_client = require('mysql');
const app = express();

const port = 8000;

// allows us to parse body of request
app.use(express.urlencoded({extended: true}));

const mysql = mysql_client.createConnection(require('./app/config/db.js'));
mysql.connect((err) => {
  if(err) { throw err; }
  console.log("Connected to the DB.");
  require('./app/routes')(app, mysql);
  app.listen(port, () => {
    console.log("Listening on " + port);
  });

});

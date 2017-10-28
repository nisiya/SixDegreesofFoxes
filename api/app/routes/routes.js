module.exports = function(app, db) {

  app.get('/', (req, res) => {
    res.send('hello world');
  });

  app.post('/register/user', (req, res) => {
    const user = req.body;
    db.query(`insert into Users
      (first_name, last_name, email, pass) values (
      '${user.fname}', '${user.lname}', '${user.email}', '${user.password}')`, (err, pointer) => {
      if(err) throw err;
      res.send('redirect here, you\'re successful');
    });
  });

};

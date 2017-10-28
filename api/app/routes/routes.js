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
      res.send(user);
    });
  });

  app.post('/register/np', (req, res) => {
    const np = req.body; // non profit
    db.query(`insert into Non_profits
      (np_name, email, pass, summary) values (
      '${np.name}', '${np.email}', '${np.password}', '${np.summary}')`, (err, pointer) => {
      if(err) throw err;
      res.send('redirect here, you\'re successful');
    });
  });

  // log in for both
  app.post('/login', (req, res) => {
    const unknown = req.body; // user or np
    db.query(`select email, pass from Users where email='${unknown.email}'`, (err, pointer) => {
      if(err) throw err;
      if(!pointer[0]) {
        // it's not a user, try nonprofit
        db.query(`select email, pass from Non_profits where email='${unknown.email}'`, (err, pointer) => {
          if(err) throw err;
          if(!pointer[0]) {
            // neither user nor user
            res.send("you're not registered with us");
          } else {
            // we have a valid non profit
            const nppass = pointer[0].pass;
            if(unknown.password == nppass) {
              return res.send("Np logged in.");
            } else {
              return res.send("bad np pass");
            }
          }
        });
      } else {
        // we have a valid user
        const userpass = pointer[0].pass;
        if(unknown.password == userpass) {
          return res.send("User logged in.");
        } else {
          return res.send("bad user pass");
        }
      }
    });
  });

  // create a challenge
  app.post('/challenge', (req, res) => {
    const challenge = req.body;
    // Challenge, challenge action, action
  });


  app.get('/nps', (req, res) => {
    db.query(`select * from Non_profits`, (err, pointer) => {
      if(err) throw err;
      res.send(pointer);
    });
  });

};

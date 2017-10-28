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
    // array of aids actions required of the challenge
    // name the name of the challenge
    // npid the non profit the challenge is for
    // uid user created it
    challenge.aids = JSON.parse(challenge.aids);
    db.query(`insert into Challenges (c_name, u_id, np_id)
    values ('${challenge.name}', '${challenge.uid}', '${challenge.npid}')`, (err, dbChallenge) => {
      if(err) throw err;
      // add the actions related to the challenge
      let qString = "";
      for(var i = 0; i < challenge.aids.length; i++) {
        qString += `insert into ChallengeActions (c_id, a_id) values (${dbChallenge.insertId}, ${challenge.aids[i]}); `;
      }
      db.query(qString, (err, results) => {
        if(err) throw err;
        // just sends the results
        res.send(dbChallenge);
      });
    });
  });

  app.get('/actions', (req, res) => {
    db.query(`select * from Actions`, (err, actions) => {
      if(err) throw err;
      res.send(actions);
    });
  });

  app.get('/nps', (req, res) => {
    db.query(`select * from Non_profits`, (err, nps) => {
      if(err) throw err;
      res.send(nps);
    });
  });
};

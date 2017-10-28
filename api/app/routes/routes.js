module.exports = function(app, db) {

  app.get('/', (req, res) => {
    res.send('hello world');
  });

  app.post('/register/user', (req, res) => {
    const user = req.query;
    db.query(`insert into Users
      set ?`, user, (err, pointer) => {
      if(err) throw err;
      res.send(`${pointer.insertId}`);
    });
  });

  app.post('/register/np', (req, res) => {
    const np = req.query; // non profit
    db.query(`insert into Non_profits set ?`, np, (err, pointer) => {
      if(err) throw err;
      res.send(`${pointer.insertId}`);
    });
  });

  // log in for both
  app.post('/login', (req, res) => {
    const unknown = req.query; // user or np
    db.query(`select email, pass, user_id from Users where email = ?`, unknown.email, (err, userPointer) => {
      if(err) throw err;
      if(!userPointer[0]) {
        // it's not a user, try nonprofit
        db.query(`select email, pass, np_id from Non_profits where email = ?`, unknown.email, (err, pointer) => {
          if(err) throw err;
          if(!pointer[0]) {
            // neither user nor user
            res.send({error: "not registered"});
          } else {
            // we have a valid non profit
            const nppass = pointer[0].pass;
            if(unknown.pass == nppass) {
              return res.send({np_id: pointer[0].np_id});
            } else {
              return res.send({error: "bad non profit password"});
            }
          }
        });
      } else {
        // we have a valid user
        const userpass = userPointer[0].pass;
        if(unknown.pass == userpass) {
          return res.send({u_id: userPointer[0].user_id});
        } else {
          return res.send({error: "bad user password"});
        }
      }
    });
  });

  // create a challenge
  app.post('/challenge', (req, res) => {
    const challenge = req.query;
    // array of aids actions required of the challenge
    // name the name of the challenge
    // npid the non profit the challenge is for
    // uid user created it
    challenge.aids = JSON.parse(challenge.aids);
    db.query(`insert into Challenges (c_name, u_id, np_id)
    values ('${challenge.c_name}', '${challenge.u_id}', '${challenge.np_id}')`, (err, dbChallenge) => {
      if(err) throw err;
      // add the actions related to the challenge
      let qString = "";
      for(var i = 0; i < challenge.aids.length; i++) {
        qString += `insert into ChallengeActions (c_id, a_id) values (${dbChallenge.insertId}, ${challenge.aids[i]}); `;
      }
      db.query(qString, (err, results) => {
        if(err) throw err;
        // just sends the results
        res.send({c_id: dbChallenge.insertId});
      });
    });
  });

  app.post('/invite/user', (req, res) => {
    // user 1 invited user 2 to the following challenge
    const info = req.query;
    db.query(`insert into UserInvites set ?`, info, (err, result) => {
      if(err) throw err;
      res.send(true);
    });
  });

  app.get('/challenge/:id', (req, res) => {
    const cid = req.params.id;
    db.query(`select * from Challenges where c_id = ?`, cid, (err, result) => {
      if(err) throw err;
      res.send(result[0]);
    });
  });

  app.get('/action/:id', (req, res) => {
    const aid = req.params.id;
    db.query(`select * from Actions where a_id = ?`, aid, (err, result) => {
      if(err) throw err;
      res.send(result[0]);
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

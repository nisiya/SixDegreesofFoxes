module.exports = function(app, db) {

  app.get('/', (req, res) => {
    res.send('hello world');
  });

  app.post('/register/user', (req, res) => {
    console.log(req.body);
    res.send('thanks for the request.');
  });

};

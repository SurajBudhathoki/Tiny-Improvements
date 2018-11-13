const db = require('../models');

module.exports = function (app) {

//getting the users
app.get('/api/users', function( req,  res) {
    db.User.find({})
    .populate('kudos')
    .then(function(data) {
        res.json(data);
    })
    .catch(function(err) {
        res.json(err);
    });

});

  //posting the users
  app.post('/api/users', function(req, res) {
    db.User.create(req.body)
    .then(function(data) {
        res.json({success : true});
    }).catch(function(err){
        res.json(err);
    });
});


//getting the kudos cards
app.get('/api/kudos', function(req,res) {
    db.kudos.find({})
    .populate('User')
    .then(function(data) {
        res.json(data);
    })
    .catch(function(err) {
        res.json(err);
    });
});


//posting the kudos cards 
app.post('/api/kudos', function(req,res) {
  
    const newEntry = {
      title: req.body.title,  
      body: req.body.body,
      from: req.body.from,
      to: req.body.to
    }

    db.kudos.create(newEntry)

    .then(function(userData) {
        res.json(userData);
    }).catch(function(err) {
        res.json(err);
    });
});

}
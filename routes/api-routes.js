const db = require('../models');

module.exports = function (app) {

//getting the users
app.get('/api/users', function( req,  res) {
    db.User.find({}).
    then(function(data) {
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
    db.Kudos.find({}).
    then(function(data) {
        res.json(data);
    })
    .catch(function(err) {
        res.json(err);
    });
});


//posting the kudos cards 
app.post('/api/kudos', function(req,res) {
    db.Kudos.create(req.body).then(function(data) {
        res.json({success : true});
    }).catch(function(err) {
        res.json(err);
    });
});

}
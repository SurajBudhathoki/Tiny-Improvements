const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;
const app = express();
const MONGODB_URI = require('./config/keys');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


mongoose.connect(MONGODB_URI || 'mongodb://localhost/kudos_db', 
{ useNewUrlParser: true });


require('./routes/api-routes')(app);


app.listen(PORT, function () {
  console.log(`App running on port ${PORT}`);
});
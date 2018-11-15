const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;
const app = express();
const MONGODB_URI =  "mongodb://localhost/kudos_db" || "mongodb://admin:pass123@ds263493.mlab.com:63493/kudos_db" ;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


mongoose.connect(MONGODB_URI, { useNewUrlParser: true });


require('./routes/api-routes')(app);


app.listen(PORT, function () {
  console.log(`App running on port ${PORT}`);
});
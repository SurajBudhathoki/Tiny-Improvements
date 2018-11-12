const mongoose = require("mongoose");
const Schema = mongoose.Schema;


var KudosSchema = new Schema({
  title: String,
  body: String
});

const Kudos = mongoose.model("kudos", KudosSchema);

module.exports = Kudos;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


var KudosSchema = new Schema({
  title: String,
  body: String,

  from: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ],
  to: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ],

});

const kudos = mongoose.model("kudos", KudosSchema);

module.exports = kudos;
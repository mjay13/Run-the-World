var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var RunSchema = new Schema({
  title: {
    type: String
  },
  date: {
    type: Date
  },
  milage: {
    type: Number
  },
  totalRunTime: {
    type: Number
  }
});

var Run = mongoose.model("Run", RunSchema);
module.exports = Run;
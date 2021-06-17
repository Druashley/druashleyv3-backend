const mongoose = require("mongoose");

const journalSchema = new mongoose.Schema({
  journalTitle: {
    type: String,
    required: true,
    minLength: 1,
  },
  journalBody: {
    type: String,
    required: true,
    minLength: 1,
  },
});

module.exports = Journal = mongoose.model("journal", journalSchema);

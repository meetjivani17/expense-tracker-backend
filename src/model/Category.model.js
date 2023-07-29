const mongoose = require("mongoose");

const Categoryschema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    lowercase: true,
  },
  creator_id: {
    type: mongoose.Schema.ObjectId,
    ref: "users",
  },
  icon: {
    type: String,
    unique: true,
    required: true,
  },
});

module.exports = mongoose.model("Categories", Categoryschema);

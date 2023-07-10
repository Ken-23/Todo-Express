const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  title: { type: String, required: true },
  status: { type: Number, required: true },
  description: { type: String },
});

module.exports = mongoose.model("todo", todoSchema);

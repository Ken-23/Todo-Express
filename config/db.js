const mongoose = require("mongoose");

const connectDB = () => {
  try {
    mongoose.connect();
    console.log("MongoDB connected!");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;

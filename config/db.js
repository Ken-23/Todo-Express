const mongoose = require("mongoose");

const connectDB = () => {
  try {
    mongoose.connect(
      "mongodb+srv://kaloniaken:GQnRAzgwhI7Ws5v1@cluster0.bnyrpeo.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("MongoDB connected!");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;

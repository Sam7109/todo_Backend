const mongoose = require("mongoose");
const connectDB = async () => {
  try {
 await mongoose.connect('mongodb+srv://samarth:samarth@todo.mok8j47.mongodb.net/');
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};
module.exports = connectDB;
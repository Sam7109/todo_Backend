const mongoose = require("mongoose");
const todoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  price: { type: Number, required: true },
  updatedAt: { type: Date, default: Date.now },
});
const  todo = mongoose.model("todoApp", todoSchema);
module.exports = todo;
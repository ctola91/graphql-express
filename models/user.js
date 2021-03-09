const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: String,
  password: {
    type: String
  },
  token: String,
  courses: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course'
  }]
});

module.exports = mongoose.model("User", userSchema);

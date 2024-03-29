const mongoose = require('mongoose');
const mongoosedelete = require("mongoose-delete");

const UserScheme = new mongoose.Schema(
  {
    name: {
      type: String
    },
    age: {
      type: Number
    },
    email: {
      type: String,
      unique: true
    },
    password: {
      type: String,
      select:false
    },
    role: {
      type: ["user", "admin"],
      default: "user",
    },
  },
  {
    timestamps: true, //TODO createdAt, updatedAt
    versionKey: false,
  }
);

UserScheme.plugin(mongoosedelete, { overrideMethods: "all" });

module.exports = mongoose.model("users", UserScheme);
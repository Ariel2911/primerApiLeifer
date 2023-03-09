const mongoose = require('mongoose');
const mongoosedelete = require("mongoose-delete");

const StorageScheme = new mongoose.Schema(
  {
    url: {
      type: String
    },
    filename: {
      type: String
    }
  },
  {
    timestamps: true, //TODO createdAt, updatedAt
    versionKey: false,
  }
);

StorageScheme.plugin(mongoosedelete, { overrideMethods: "all" });

module.exports = mongoose.model("storages", StorageScheme)
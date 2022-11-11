const mongoose = require('mongoose');

const StorageScheme = new mongoose.Schema(
  {
    name: {
      type: String
    },
    filename: {
      type: String
    },
  },
  {
    timestamps: true, //TODO createdAt, updatedAt
    versionKey: false,
  }
);

module.exports = mongoose.model("storages", StorageScheme)
const mongoose = require('mongoose');

const TracksScheme = new mongoose.Schema(
  {
    name: {
      type: String
    },
    alumn: {
      type: String
    },
    cover: {
      type: String,
      validate: {
        validator: (rep) => {
          return true
        },
        message: "ERROR_URL"
      },
    },
    artist: {
      name: {
        type: String,
      },
      nickname: {
        type: String,
      },
      nationality: {
        type: String,
      },
    },
    duration: {
      start: {
        type: Number,
      },
      end: {
        type: String,
      },
    },
    mediaId: {
      type: mongoose.Types.ObjectId
    },
  },
  {
    timestamps: true, //TODO createdAt, updatedAt
    versionKey: false,
  }
);

module.exports = mongoose.model("tracks", TracksScheme)
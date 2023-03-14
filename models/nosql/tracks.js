const mongoose = require('mongoose');
const mongoosedelete = require("mongoose-delete");

const TracksScheme = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    album: {
      type: String,
    },
    cover: {
      type: String,
      validate: {
        validator: (req) => {
          return true;
        },
        message: "ERROR_URL",
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
        type: Number,
      },
    },
    mediaId: {
      type: mongoose.Types.ObjectId,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

/**
 * Implementar metodo propio con relación a storage
 */
TracksScheme.statics.findAllData = function () {

  const joinData = this.aggregate([
    {
      $lookup: {
        from: "storages", //Modelo de destino de la relación
        localField: "mediaId", //Nombre del campo en este modelo
        foreignField: "_id", //Nombre del campo en el modelo destino
        as: "audio" //Alias
      },
    },
    {
      $unwind:"$audio"
    }
  ]);

  return joinData;
};

TracksScheme.statics.findOneData = function (id) {

  const joinData = this.aggregate([
    {
      $match: {
        _id: mongoose.Types.ObjectId(id)
      }
    },
    {
      $lookup: {
        from: "storages", //Modelo de destino de la relación
        localField: "mediaId", //Nombre del campo en este modelo
        foreignField: "_id", //Nombre del campo en el modelo destino
        as: "audio" //Alias
      },
    },
    {
      $unwind:"$audio"
    }
  ]);

  return joinData;

}

TracksScheme.plugin(mongoosedelete, { overrideMethods: "all" });

module.exports = mongoose.model("tracks", TracksScheme);

// {
//   "name": "laifer",
//   "album": "Album",
//   "cover": "http://",
//   "artist": {
//       "name": "laifer",
//       "nickname": "leifermendez",
//       "nationality": "Ve"
//   },
//   "duration": {
//       "start": 1,
//       "end": 0
//   },
//   "mediaId": "621e7499a1f699063f5114bc"
// }
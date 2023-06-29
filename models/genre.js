const mongoose = require("mongoose");

const GenreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: 100,
  },
});

GenreSchema.virtual("url", function () {
  return `/catalog/genre/${this._id}`;
});

const genreModel = mongoose.model("Genre", GenreSchema);

module.exports = genreModel;

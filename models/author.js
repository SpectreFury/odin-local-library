const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
    maxLength: 100,
  },
  family_name: {
    type: String,
    required: true,
    maxLength: 100,
  },
  date_of_birth: {
    type: String,
  },
  date_of_death: {
    type: String,
  },
});

AuthorSchema.virtual("name").get(function () {
  let fullname = "";

  if (this.first_name && this.family_name) {
    fullname = `${this.family_name}, ${this.first_name}`;
  }

  return fullname;
});

AuthorSchema.virtual("url").get(function () {
  return `/catalog/author/${this._id}`;
});

const authorModel = mongoose.model("Author", AuthorSchema);

module.exports = authorModel;

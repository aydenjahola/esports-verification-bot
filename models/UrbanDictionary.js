const mongoose = require("mongoose");

const UrbanDictionarySchema = new mongoose.Schema({
  term: { type: String, required: true, unique: true, trim: true },
  definition: { type: String, required: true },
  example: { type: String, default: "No example provided" },
  author: { type: String, default: "Unknown" },
  thumbs_up: { type: Number, default: 0 },
  thumbs_down: { type: Number, default: 0 },
});

const UrbanDictionary = mongoose.model(
  "UrbanDictionary",
  UrbanDictionarySchema
);

module.exports = UrbanDictionary;

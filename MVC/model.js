const { Int32 } = require("bson");
const mongoose = require("mongoose");
const schemaStructure = mongoose.Schema({
  country: {
    type: String,
    required: true,
    unique: [true, "This country already exists"],
  },
  name: {
    type: String,
    required: true,
    unique: [true, "This name already exists"],
  },
  rating: {
    type: String,
    required: true,
    unique: [true, "This name already exists"],
  },
});

// export the model
module.exports = mongoose.model("monies", schemaStructure);

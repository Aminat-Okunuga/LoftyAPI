const model = require("./model");

// get all data
exports.getAllEntry = async (req, res) => {
  const newData = await model.find();
  res.status(200).json({
    result: true,
    totalEntry: model.length + 1,
    data: newData,
  });
};

// create a new data
exports.createEntry = async (req, res) => {
  const newData = await model.create(req.body);
  res.status(201).json(newData);
};

// find a data
exports.getSingleEntry = async (req, res) => {
  const newData = await model.findById(req.params.id);
  res.status(200).json(newData);
};

// update a data
exports.updateSingleEntry = async (req, res) => {
  const newData = await model.findByIdAndUpdate(req.params.id, req.bdy);
  res.status(200).json({
    report: "Update successful",
    data: newData,
  });
};
// delete a data
exports.deleteSingleEntry = async (req, res) => {
  const newData = await model.findByIdAndDelete(req.params.id, req.bdy);
  res.status(200).json("Item successfully deleted!");
};

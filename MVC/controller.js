const {
  getAllEntry,
  getSingleEntry,
  createEntry,
  updateSingleEntry,
  deleteSingleEntry,
} = require("./view");

// import express
const express = require("express");
const router = express.Router();

// call to router
router.route("/").get(getAllEntry).post(createEntry);
router
  .route("/:id")
  .get(getSingleEntry)
  .patch(updateSingleEntry)
  .delete(deleteSingleEntry);

module.exports = router;

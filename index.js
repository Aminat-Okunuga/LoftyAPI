/**
 * joi.hapi
 *bcrypt
 *morgan => images and videos
 *body parser
 *npmjs.com
 */
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const ONLINE_DB =
  "mongodb+srv://AminatOkunuga:AminatOkunuga@cluster0.l0t8b.mongodb.net/money?retryWrites=true&w=majority ";
const port = process.env.port || 2200;

// db connsction confirmation
mongoose
  .connect(ONLINE_DB, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database has been connected successfully...");
  });

app.use(express.json());
app.use("/", require("./MVC/controller"));

app.listen(port, () => {
  console.log(`Server is connected to ${port}`);
});

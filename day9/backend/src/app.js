const mongoose = require("express");
require("dotenv").config();
const noteModel = require("./models/notes.models");

const app = mongoose();

//middleware
app.use(mongoose.json());

app.post("/api/user", async (req, res) => {
  const { name, email, age } = req.body;

  const note = await noteModel.create({ name, email, age });

  res.status(201).json({
    message: "user created",
    note,
  });
});

//fetch notes
app.get("/api/user", async (req, res) => {
  const note = await noteModel.find(); //always return arry of object

  res.status(200).json({
    message: "note fetched",
    note,
  });
});

//delete notes

app.delete("/api/user/:id", async (req, res) => {
  const { id } = req.params;

  await noteModel.findByIdAndDelete(id);

  res.status(200).json({
    message: "deleted",
    id,
  });
});

//update notes

app.patch("/api/user/:id", async (req, res) => {
  const id = req.params.id;
  const { age } = req.body;

  await noteModel.findByIdAndUpdate(id, { age });

  res.status(200).json({
    message: "updated age",
  });
});

module.exports = app;

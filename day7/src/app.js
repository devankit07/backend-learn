const express = require("express");
const noteModel = require("./models/notes.models");

const app = express();

//middleware
app.use(express.json());

app.post("/notes", async (req, res) => {
  const { title, content } = req.body;

  const note = await noteModel.create({
    title,
    content,
  });
  res.status(201).json({
    message: "note created",
    note,
  });
});

app.get("/notes", async (req, res) => {
  const note = await noteModel.find();

  res.status(200).json({
    message: "notes fetched",
    note,
  });
});

module.exports = app;

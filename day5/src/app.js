const express = require("express");

const app = express();

//middleware
app.use(express.json());

//home api
app.get("/", (req, res) => {
  res.send("home page");
});

//notes
const notes = [];

//notes created via user

app.post("/notes", (req, res) => {
  notes.push(req.body);
  res.status(201).json({
    message: "successfully created",
  });
});

//notes getting back to user

app.get("/notes", (req, res) => {
  res.status(200).json({
    notes: notes,
  });
});

app.delete("/notes/:mama", (req, res) => {
  delete notes[req.params.mama];
  res.status(204).json({
    message: "deleted"
  });
});

app.patch("/notes/:index",(req,res)=>{
    notes[req.params.index].content = req.body.content
    res.status(200).json({
        message:"successfully updated"
    })

})
module.exports = app;

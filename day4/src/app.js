// server ko create and config app.js mai krna

const express = require("express");

const app = express();
//middleware
app.use(express.json())

const notes = [];

app.get("/", (req, res) => {
  res.send("hello world");
});

app.post("/notes", (req, res) => {
  console.log(req.body);
  notes.push(req.body);
  console.log(notes)

  res.send("notes sended");
});

app.get("/notes",(req,res)=>{
    res.send(notes)
})


app.delete("/notes/:index",(req,res)=>{
    delete notes[req.params.index]
    res.send("notes deleted")
})


app.patch("/notes/:index",(req,res)=>{
    notes[req.params.index].content = req.body.content
    res.send("updated")
})
module.exports = app;

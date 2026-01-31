require("dotenv").config();
const express = require("express");
const noteModel = require("./models/note.model");

const app = express();

//middleware
app.use(express.json());

app.post("/notes", async (req, res) => {
  const { title, description } = req.body;

    const note = await noteModel.create({title,description});

  res.status(201).json({
    message: "note created",
    note,
  });
});


app.get("/notes",async(req,res)=>{
    const note = await noteModel.find()

    res.status(200).json({
        message:"note fetched",
        note
    })
})

app.delete("/notes/:id",async(req,res)=>{
    const {id} = req.params;

    await noteModel.findByIdAndDelete(id)
    

    res.status(200).json({
        message:"deleted",
        id
    })
})

module.exports = app;

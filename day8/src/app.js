require("dotenv").config();
const express = require("express");
const noteModel = require("./models/note.model");

const app = express();

//middleware
app.use(express.json());


//create notes

app.post("/notes", async (req, res) => {
  const { title, description } = req.body;

    const note = await noteModel.create({title,description});

  res.status(201).json({
    message: "note created",
    note,
  });
});

//fetch notes
app.get("/notes",async(req,res)=>{
    const note = await noteModel.find() //always return arry of object

    res.status(200).json({
        message:"note fetched",
        note
    })
})

//delete notes

app.delete("/notes/:id",async(req,res)=>{
    const {id} = req.params;

    await noteModel.findByIdAndDelete(id)
    

    res.status(200).json({
        message:"deleted",
        id
    })
})

//update notes

app.patch("/notes/:id", async(req,res)=>{
  const id = req.params.id
  const{description} = req.body

  await noteModel.findByIdAndUpdate(id,{description})

  res.status(200).json({
    message:"updated description"
  })

})

module.exports = app;

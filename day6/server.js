// server start krna & database se connect krna
const app = require("./src/app")
const mongoose = require("mongoose")

// function connectToDb(){
    mongoose.connect("mongodb+srv://ankitrathor272005_db_user:<db password yha pr >@cluster0.2he1nlp.mongodb.net/day6")
    .then(()=>{
        console.log("connected to db")
    })
// }

// connectToDb()


app.listen(3000,()=>{
    console.log("server is runing on port 3000")
})
// server ko start karna server.js mai 

const app = require("./src/app")

const notes = []

app.get('/',(req,res)=>{
    res.send("hello world")
})

app.post("/notes",(req,res)=>{
    res.send("notes sended")
})

app.listen(3000,()=>{
    console.log("server is runing on port 3000 ")
})
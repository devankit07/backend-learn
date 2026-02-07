require("dotenv").config()
require("./src/config/db")
const app = require("./src/app")
const connectToDB = require("./src/config/db")



app.listen(3000,()=>{
    connectToDB()
    console.log("server is listening on PORT 3000");
})
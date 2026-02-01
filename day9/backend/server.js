require("./src/config/database")
const app = require("./src/app");
const connectDB = require("./src/config/database");


const PORT = process.env.PORT || 3000;


//http://localhost:8000/api/ will my api


app.listen(PORT, ()=>{
    connectDB()
    console.log(`server running on port ${PORT}`);
})
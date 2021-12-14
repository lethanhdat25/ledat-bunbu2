const express=require("express");
const app=express();
const port=8080;
const cors=require("cors");
const route=require("./routes");
//Use CORS
app.use(cors());

route(app);

app.listen(port,()=>console.log("SERVER IS RUNNING..."));

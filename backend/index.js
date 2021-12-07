const express=require("express");
const app=express();
const port=8080;
const cors=require("cors");

//Use CORS
app.use(cors());

app.get("/",((req, res) => {
    const data={
        colors : [
            "violet", "cornflowerblue", "gold", "orange",
            "turquoise", "tomato", "greenyellow"
        ],
        symbols : [
            "circle", "star", "square", "triangleUp",
            "triangleDown", "diamond", "plus"
        ]
    }
    return res.json(data);
}))
app.listen(port,()=>console.log("SERVER IS RUNNING..."));
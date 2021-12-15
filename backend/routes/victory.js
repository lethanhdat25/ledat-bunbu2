const express=require("express");
const router=express.Router();

router.get("/",((req, res) => {
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
}));

module.exports=router;

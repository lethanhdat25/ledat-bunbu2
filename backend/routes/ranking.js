const express=require("express");
const router=express.Router();
const _=require("lodash")
router.get("/",(req,res)=>{
    setTimeout(()=>{
        return res.json([
            { x: "Day 1", y: _.random(1,20)},
            { x: "Day 2", y: _.random(1,20)},
            { x: "Day 3", y: _.random(1,20)},
            { x: "Day 4", y: _.random(1,20)},
            { x: "Day 5", y: _.random(1,20)},
            { x: "Day 6", y: _.random(1,20)},
            { x: "Day 7", y: _.random(1,20)},
        ]);
    },10000);
});
module.exports=router;

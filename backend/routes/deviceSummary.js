const express=require("express");
const router=express.Router();

router.get("/device_summary",(req, res) =>{
    res.json( {ios: 40, android: 60});
})

router.get("/",(req, res)=>{
    res.send("HELLO")
});

module.exports=router;

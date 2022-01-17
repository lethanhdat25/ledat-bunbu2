const express=require("express");
const router=express.Router();
const _=require('lodash');
router.get("/",(req,res)=>{
    const {startDate,endDate}=req.query;
    if (startDate!=='null'&&endDate!=='null'){
        setTimeout(()=>{
            res.json({ios:_.random(100,800),android:_.random(100,800)});
        },3000);
        return res.ok;
    }
    return res.error();
});
module.exports=router;

const express=require("express");
const router=express.Router();
const _=require("lodash");
const days=['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
const deviceByHour=_.map(
    days,
    (day) => ({
        day: day,
        hours: _.map(_.range(0, 24), time => ({
            time: `${time}:00`,
            value: _.random(0, 2) !== 2 ? _.random(0, 30) : _.random(0, 50),
            // x:time,
            // y:50
        }))
    })
);
router.get("/",(req,res)=>{
    setTimeout(()=>{
        res.json(deviceByHour)
    },5000)
});
module.exports= router;

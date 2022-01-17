const express=require("express");
const router=express.Router();
const _=require("lodash");
const days=['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
router.get("/",(req,res)=>{
    const {startDate,endDate}=req.query;
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
    if (startDate!=='null'&&endDate!=='null') {
        setTimeout(() => {
            res.json(deviceByHour)
        }, 7000);
        return res.ok;
    }
    return res.error();
});
module.exports= router;

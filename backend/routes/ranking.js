import express from 'express';
const router=express.Router();
import _ from 'lodash';

router.get('/',(req,res)=>{
    const {startDate,endDate}=req.query;

    if (startDate!=='null'&&endDate!=='null'){
        setTimeout(()=>{
            return res.json([
                { x: 'Day 1', y: _.random(1,20)},
                { x: 'Day 2', y: _.random(1,20)},
                { x: 'Day 3', y: _.random(1,20)},
                { x: 'Day 4', y: _.random(1,20)},
                { x: 'Day 5', y: _.random(1,20)},
                { x: 'Day 6', y: _.random(1,20)},
                { x: 'Day 7', y: _.random(1,20)},
            ]);
        },1000);
        return res.ok;
    }

    return res.error();
});

export default router;
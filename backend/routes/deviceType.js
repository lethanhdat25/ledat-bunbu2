import express from 'express';
const router=express.Router();
import _ from 'lodash';

router.get('/',(req,res)=>{
    const {startDate,endDate}=req.query;

    if (startDate!=='null'&&endDate!=='null'){
        setTimeout(()=>{
            res.json({ios:_.random(100,800),android:_.random(100,800)});
        },3000);
        return res.ok;
    }

    return res.error();
});

export default router;
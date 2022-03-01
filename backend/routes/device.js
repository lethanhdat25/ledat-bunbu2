import express from 'express';
const router=express.Router();
import _ from 'lodash';


router.get("/",(req,res)=>{
    const {startDate,endDate}=req.query;
    // const startDay=new Date(startDate).getDate();
    // const startMonth=new Date(startDate).getMonth()+1;
    // const endDay=new Date(endDate).getDate();
    // const endMonth=new Date(endDate).getMonth()+1;

    // const randomDate=()=>{
    //     const hour=_.random(1,24);
    //     const day=startDay?_.random(startDay,endDay):_.random(1,31);
    //     const month=startDay?_.random(startMonth,endMonth):new Date().getMonth()+1;
    //     return({
    //         hour,day,month
    //     });
    // };

    const hours=_.range(1,25);


    const hourData=()=>{
        return hours.map((hour)=>({x:hour,y:_.random(1,30)}));
    }

    const randomDayData=()=>{
        return _.range(1,31).map((day)=>{
            let totalOfDay=0;
            let cpHourData=[];
            hourData().forEach((value)=>{
                cpHourData.push(value);
                totalOfDay+=value.y
            });
            return {dayData:{x:day,y:totalOfDay},hourData:cpHourData};
        });
    };

    if (startDate!=='undefined'&&endDate!=='undefined'){
        return setTimeout(()=> {
            res.json([
               randomDayData(),
               randomDayData(),
            ]);
        },100);
    }
    return setTimeout(()=> {
        res.json([
            randomDayData(),
            randomDayData(),
        ]);
    },100);
});

export default router;

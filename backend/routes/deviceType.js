import express from 'express';
const router=express.Router();
import _ from 'lodash';
const initialData=[
    { x: "Android", y: _.random(10, 100) },
    { x: "Windows", y: _.random(10, 100) },
    { x: "Ios", y: _.random(10, 100) },
    { x: "Os X", y: _.random(10, 100) },
    { x: "Unknown", y: _.random(10, 100) },
    { x: "Linux", y: _.random(10, 100) }
];
router.post('/',(req,res)=>{
    const osData=req.body.os;
    if (osData.length>0){
        const osDataUserChoose=[];
        for(let i=0;i<osData.length;i++){
            const resul=_.filter(initialData,item=>item.x===osData[i]);
            osDataUserChoose.push(...resul);
        }
        setTimeout(()=>{
            res.json(osDataUserChoose);
        },3000);
        return;
    }
    setTimeout(()=>{
        res.json(initialData);
    },3000);

});

export default router;
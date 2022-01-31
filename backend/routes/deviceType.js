import express from 'express';
const router=express.Router();
import _ from 'lodash';
const initialData=[
    { x: "Android", y: _.random(0, 100) },
    { x: "Windows", y: _.random(0, 100) },
    { x: "Ios", y: _.random(0, 100) },
    { x: "Os X", y: _.random(0, 100) },
    { x: "Unknown", y: _.random(0, 100) },
    { x: "Linux", y: _.random(0, 100) }
];
router.post('/',(req,res)=>{
    console.log(req.body.os);
    if (req.body.os.length>0){
        const dataRes=_.filter(req.body.os,(value)=>{
            _.forEach(initialData,(item)=>value===item.x)
        });
        console.log(dataRes);
        setTimeout(()=>{
            res.json(initialData);
        },3000);
    }

    setTimeout(()=>{
        res.json(initialData);
    },3000);

});

export default router;
import express from 'express';
const router=express.Router();

router.get('/',(req, res) =>{
    setTimeout(()=>res.json( {ios: 40, android: 60}),10000);
})

export default router;
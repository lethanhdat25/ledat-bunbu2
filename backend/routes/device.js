const express=require("express");
const router=express.Router();
router.get("/",(req,res)=>{
    const {startDate,endDate}=req.query;
    if (startDate!=='null'&&endDate!=='null'){
        setTimeout(()=> {
            res.json([
                [
                    { x: { day: 1, month: 12, year: 2000 }, y: 11 },
                    { x: { day: 1, month: 1, year: 2001 }, y: 5 },
                    { x: { day: 1, month: 1, year: 2002 }, y: 4 },
                    { x: { day: 1, month: 1, year: 2003 }, y: 6 },
                    { x: { day: 1, month: 1, year: 2004 }, y: 5 },
                    { x: { day: 1, month: 1, year: 2005 }, y: 7 },
                    { x: { day: 1, month: 1, year: 2006 }, y: 8 },
                    { x: { day: 1, month: 1, year: 2007 }, y: 9 },
                    { x: { day: 1, month: 1, year: 2008 }, y: 15 },
                    { x: { day: 1, month: 1, year: 2009 }, y: 140 },
                    { x: { day: 1, month: 1, year: 2010 }, y: 5 },
                    { x: { day: 1, month: 1, year: 2013 }, y: 1 },
                    { x: { day: 1, month: 1, year: 2014 }, y: 2 },
                    { x: { day: 1, month: 1, year: 2015 }, y: -5 }
                ],
                [
                    { x: { day: 1, month: 1, year: 2000 }, y: 5 },
                    { x: { day: 1, month: 1, year: 2003 }, y: 6 },
                    { x: { day: 1, month: 1, year: 2004 }, y: 4 },
                    { x: { day: 1, month: 1, year: 2005 }, y: 10 },
                    { x: { day: 1, month: 1, year: 2006 }, y: 12 },
                    { x: { day: 1, month: 1, year: 2007 }, y: 48 },
                    { x: { day: 1, month: 1, year: 2008 }, y: 19 },
                    { x: { day: 1, month: 1, year: 2009 }, y: 31 },
                    { x: { day: 1, month: 1, year: 2011 }, y: 49 },
                    { x: { day: 1, month: 1, year: 2014 }, y: 40 },
                    { x: { day: 1, month: 1, year: 2015 }, y: 21 }
                ]
            ]);
        },5000);
        return res.ok;
    }
    return res.error();
});
module.exports= router;

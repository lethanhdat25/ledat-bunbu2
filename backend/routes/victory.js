import express from 'express';
const router=express.Router();

router.get('/',((req, res) => {
    const data={
        colors : [
            'violet', 'cornflowerblue', 'gold', 'orange',
            'turquoise', 'tomato', 'greenyellow'
        ],
        symbols : [
            'circle', 'star', 'square', 'triangleUp',
            'triangleDown', 'diamond', 'plus'
        ]
    }
    return res.json(data);
}));

export default router;
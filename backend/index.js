import express from 'express';
const app=express();
const port=8080;
import cors from 'cors';
import route from './routes/index.js';
//Use CORSS
app.use(cors());
route(app);
app.listen(port,()=>console.log('SERVER IS RUNNING...'));

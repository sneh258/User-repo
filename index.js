const express=require('express');
const app=express();
const port=3000;
app.use(express.json());

const userRouter=require('./src/routes/route.js');
app.use('/user',userRouter);




app.listen(port,()=>{
    console.log(`server started listening at ${port}`);
});
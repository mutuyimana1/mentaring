
import express from "express";
import mongoose  from "mongoose";
import dotenv from "dotenv";

import userRouter from "./server/routes/userRoute.js";
import bodyparser from "body-parser";


dotenv.config({path:'./.env'});

const app = express();
app.use(bodyparser.json());


app.use("/mentaring/v1/user/",userRouter);

const databaseurl = process.env.DATABASE;

mongoose.connect(databaseurl,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true,useFindAndModify:false}).then(()=>console.log("database connect successfully"));
app.listen(8080,()=>{

    console.log(databaseurl);
    console.log('server is running on port8080');
})



export default app;
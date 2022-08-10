const express =require("express");
// const detailsRouter2=require('./Route')
const detailsRouter = require('./Route/details')
const detailsRouter2 = require('./Route/bollywood')
const cors = require("cors");
const app =express();

app.use(cors());
app.use("/api",detailsRouter);
app.use("/api",detailsRouter2);

app.listen(process.env.PORT || 8000,()=>{
    console.log("app is starting");
})
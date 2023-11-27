const express =require("express");
const app =express();

app.get("/",(req,res)=>{
    res.send("This response from Service Three");
})


app.listen(8003,()=>{
    console.log("server listening on port no 8003")
})
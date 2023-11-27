const express =require("express");
const app =express();

app.get("/",(req,res)=>{
    res.send("This response from Service Two");
})


app.listen(8002,()=>{
    console.log("server listening on port no 8002")
})
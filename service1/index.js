const express =require("express");
const app =express();

app.get("/",(req,res)=>{
    res.send("This response from Service One");
})


app.listen(8001,()=>{
    console.log("server listening on port no 80001")
})
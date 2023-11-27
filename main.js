const express =require("express");
const app = express();

const proxy =require("express-http-proxy");
app.use("/customer",proxy("http://localhost:8001"))
app.use("/product",proxy("http://localhost:8002"))
app.use("/order",proxy("http://localhost:8003"))

app.get("/",(req,res)=>{
    res.send("This is main Servver")
})

app.listen(8000,()=>{
    console.log(" main server listening on 8000")
})


const express = require("express");
const app = express();
// const mongoose = require("mongoose");
// const server = require("http").createServer(app);



app.get("/api", (req,res)=>{

    res.json({"users": ["user1","user2","user3","user4"]})
})

app.listen(5000, ()=>{
    console.log("server started on port 5000")
});
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import linkRoutes from  "./routes/links.js";
// import socketManager from "./socketManager.js";
import { Server, Socket } from "socket.io";
import { v4 as uuidv4 } from 'uuid';
const roomId = uuidv4();


// import a module userRoutes from the ./routes/users.js file, which defines routes that can be used to handle HTTP POST requests to the /api URL path.
const app =express();

// app.use(express.json());
// app.use(cors());

// In the case of cors and body-parser, it is usually recommended to add body-parser before cors in your middleware chain. This is because body-parser needs to parse the incoming request body before cors can determine whether the request is allowed or not.
app.use(bodyParser.json({ extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

// In our application, the posts.js module is defining routes that can be
//  used to handle HTTP POST requests to the /posts URL path. 
//  When a POST request is received at this URL path, the server 
//  will use the appropriate route defined in the posts.js module to 
//  process the request and send a response back to the client.

app.get("/", (req,res)=> {
    res.status(201).json(roomId);
})

app.use("/api",linkRoutes);   //every route starts with /api endpoint





const CONNECTION_URL = "mongodb+srv://mahsaj:<password>@video-app.rxck7um.mongodb.net/?retryWrites=true&w=majority"

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => { 
    const server = app.listen(PORT,()=> console.log(`server running on port ${PORT}`))
    const io = new Server(server);
    // io.on("connection", socketManager);
    io.on("connection", socket => {
        socket.on("join-room",(roomId, userId)=>{
            socket.join(roomId); //we join the room from that specific roomid
            //now w eneed to tell that hey somone joined the room
            socket.to(roomId).broadcast.emit("user-connected", userId)
            
        })

    })

})
.catch((error) => console.log(error.message));


import express from "express" ;


import { getLink,createLink } from "../controllers/links.js";
const router = express.Router();



// now we can start adding our routes for link


router.get("/get-room-id/:id", getLink); //here we are passing one dynamic id (:id), whatever id we are getting from frontend we take that id and we pass through the getLink function

// this api will save the link to the redis
router.post("/save-room-id",createLink);



export default router;
import express, { json } from "express";
import WishListModal from "./models/wishListModal.js";
import mongoose from "mongoose";
import cors from "cors";
import { config } from "dotenv";
const app = express();
const port = 3000;
app.use(json());
app.use(cors());
config();
const mongodb_url  = process.env.MONGODB_URL;
mongoose.connect(`${mongodb_url}`).then(()=>{
    console.log("database connected successfully");
})


app.get("/",(res)=>{
    res.send("Api running Successfully");
})




// for sending the data by cliking on add-favourites
app.post("/fav",(req,res)=>{
    const id  = req.body.movie_id;
    const name = req.body.movie_name;
    const poster = req.body.movie_poster;
    WishListModal.create(
     {
        movie_id:id,
        movie_name: name,
        movie_poster:poster
     }
    ).then((data,err)=>{
    if(err){
       return res.status(500).json({
        message:"server error"
       })
    }
    if(data){
        return res.status(201).json({
         message:"favorite added successfully",
         movie_Info:data
        })
    }
    })
})

//for sending the data to Favourite Page
app.get("/get-fav",(req,res)=>{
    WishListModal.find().then((data,err)=>{
       if(data){
         res.send(data);
       }
    })
})


app.listen(port,()=>{
 console.log("server is running at"+port);
})
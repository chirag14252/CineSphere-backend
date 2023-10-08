import express, { json } from "express";
import WishListModal from "./models/wishListModal.js";
import userModal from "./models/UserModel.js";
import mongoose from "mongoose";
import cors from "cors";
import { config } from "dotenv";
import wishShow from "./controller/WishList_Controller/wishShow.js";
import wishAdd from "./controller/WishList_Controller/wishAdd.js";
import deleteWish from "./controller/WishList_Controller/deleteWish.js";
import Register from "./controller/WishList_Controller/Register.js";
const app = express();
const port = 3000;
app.use(json());
app.use(cors());
config();
const mongodb_url = process.env.MONGODB_URL;

mongoose.connect(`${mongodb_url}`).then(() => {
    console.log("database connected successfully");
})


app.get("/", (res) => {
    res.send("Api running Successfully");
})




// for sending the data by cliking on add-favourites
app.post("/fav", wishAdd);

//for sending the data to Favourite Page
app.get("/get-fav", wishShow);

//to delete the the data from the myFavourite Page.
app.delete("/deleteFav", deleteWish);


// for creating registeration of user
app.post("/register",Register);


//for login
// app.get("/login");
app.listen(port, () => {
    console.log("server is running at" + port);
})
import mongoose from "mongoose";


const WishListSchema = mongoose.Schema(
  { 
    movie_id:{
        type:String,
        required:true
    },
    movie_name:{
        type:String,
        required:true
    },
    movie_poster:{
        type:String,
        required:true
    }
}
)

const WishListModal = mongoose.model("Favourites",WishListSchema);

export default WishListModal;
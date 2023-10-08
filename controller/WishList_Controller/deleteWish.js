import WishListModal from "../../models/wishListModal.js";
const deleteWish = (req,res)=>{
    const movie_id = req.body.movie_id;
    WishListModal.deleteOne({"movie_id":movie_id}).then((data,err)=>{
     if(data){
        return res.status(200).json({
            message:"data deleted"
        })
     }
    })
}
export default deleteWish;
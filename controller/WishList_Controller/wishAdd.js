import WishListModal from "../../models/wishListModal.js";
const wishAdd = (req,res)=>{
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
}


export default wishAdd;

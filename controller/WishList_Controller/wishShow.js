import WishListModal from "../../models/wishListModal.js";

const wishShow = (req,res)=>{
    WishListModal.find().then((data,err)=>{
       if(data){
         res.send(data);
       }
    })
}


export default wishShow;
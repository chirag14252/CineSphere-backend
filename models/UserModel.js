

import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true, 
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    }
},{timestamps:true}
)
const userModal = mongoose.model("userDetail",UserSchema);
export default userModal;
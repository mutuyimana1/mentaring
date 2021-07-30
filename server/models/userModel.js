
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstname:String,
    secondname:String,
    email:String,
    password:String,
    phone:String,
    gender:String,
    age:String
});
const userInfo = mongoose.model('user',UserSchema);

export default userInfo;
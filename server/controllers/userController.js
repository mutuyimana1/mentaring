
import userInfo from "../models/userModel.js";

class UserController{
    static signupUser = async(req,res)=>{
        const user = await userInfo.create(req.body);
        
        if(!user){
            return res.status(400).json({
                status:400,
                message:"failed"
            })
        }
        return res.status(200).json({
            status:200,
            message:"success",
            data:user
        })
    }
    static getAllUsers = async(req,res)=>{
        const users = await userInfo.find();
        if(!users){
            return res.status(404).json({
                status:404,
                message:"failed"
            })
        }
        return res.status(200).json({
            status:200,
            message:"success",
            data:users
        })
    }
    static getOneUser = async(req,res)=>{
        const user = await userInfo.findById(req.params.id);
        if(!user){
            return res.status(404).json({
                status:404,
                message:"user not found",

            })
            

        }
        return res.status(200).json({
            status:200,
            message:"success",
            data:user
        })
    }
    static updateOneUser = async(req,res)=>{
        const user = await userInfo.findByIdAndUpdate(req.params.id,req.body);
        if(!user){
            return res.status(404).json({
                status:404,
                message:"user not found",

            })
            }
            const updateUser = await userInfo.findById(req.params.id);
        return res.status(200).json({
            status:200,
            message:"success",
            data:updateUser
        })
    }
    static deleteOneUser = async(reg,res)=>{
        const User = await userInfo.findByIdAndDelete(req.params.id);
        if(!user){
            return res.status(404).json({
                status:404,
                message:"not found",
            })
        }
        return res.status(200)({
            status:200,
            message:"success deleted",
            
        })
    }
    
}

export default UserController;


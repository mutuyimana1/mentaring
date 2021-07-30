import express from "express";
import UserController from "../controllers/userController.js";



const userRouter =express.Router();

userRouter.post("/signup",UserController.signupUser);
userRouter.get("/all",UserController.getAllUsers);
userRouter.get("/:id",UserController.getOneUser);


export default userRouter;
import express from "express";
import { user, edit } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/edit-porfile", edit);

userRouter.get("/:id",user);


export default userRouter;
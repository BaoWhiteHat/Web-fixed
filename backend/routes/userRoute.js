import express from 'express';
import { loginUser, registerUser } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post("/register", registerUser);   // POST /api/users/register
userRouter.post("/login", loginUser);   // POST /api/users/login

export default userRouter;
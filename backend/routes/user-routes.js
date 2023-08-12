import express from "express"
import { addUser, getAllUsers, updateUser } from "../controllers/user-controller"

const userRouter = express.Router()

userRouter.get("/", getAllUsers)
userRouter.post("/signup", addUser)
userRouter.put("/:id", updateUser)

export default userRouter
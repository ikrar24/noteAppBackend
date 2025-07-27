import express  from "express";
import upload from "../../Cloudinary/Multer.js"
import UserSignUp from "./User.SignUp.js";
import UpdateUserImg from "./User.Update.js";

const UserRoute = express.Router();

UserRoute.post("/", upload.single("profileImage"), UserSignUp )
UserRoute.put("/:id", upload.single("profileImage") ,  UpdateUserImg )



 
export default UserRoute;
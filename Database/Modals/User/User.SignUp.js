import bcrypt from "bcryptjs"
import UseSchema from "../../Schema/User.Schema.js"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config();




const UserSignUp = async( req , res )=>{
   
try {
    const { fullName , email , password } = req.body;

    if (!fullName||!email||!password) {
        res.status(401).json({messsage:"All Fields Are Required"})
        return
    }


    const userAlredy = await UseSchema.findOne({email})

    if (userAlredy) {
        return res.status(400).json({ message: "User already exists with this email" });
    }



    const passwordHashed = await bcrypt.hash(password , 10);

const profileImageURL = [{
image:req.file?.path||"",
imageName:req.file?.filename || ""
}];

console.log(req.file);

const createUser = new UseSchema({fullName , email , password:passwordHashed , profileImage:profileImageURL})

await createUser.save();


const token = jwt.sign({email}, process.env.TOKEN_SECRETE,{
    expiresIn:"30d"
})



res.setHeader("authToken", token); 


res.status(201).json({
  message: "Sign Up Successfully",
  user: createUser,
  token
});


} catch (error) {
    res.status(401).json({messsage:"Server Error" , error})
    console.log("singUp Error", error);


}
    




}



export default UserSignUp
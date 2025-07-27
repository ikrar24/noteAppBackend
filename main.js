import express from "express"
import connectDB from "./Database/Connetion/mongoDbConnetion.js"
import cors from "cors"
import UserRoute from "./Database/Modals/User/UserRoutes.js"
import UserLogin from "./Database/Modals/User/User.Login.js"
import NoteRoutes from "./Database/Modals/Notes/noteRoutes.js"
import cookieParser from "cookie-parser";




// Mongo DB Connection 
connectDB()


const app = express()
const PORT = process.env.PORT || 8000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); 
app.use(cookieParser());


app.get("/" ,(req, res )=>{
    res.send("Hello World")
})


// CRUD of User 
app.use("/api/user" , UserRoute)

// user Login hare 
app.post("/api/login" , UserLogin)


// Create notes 
app.use("/api/notes", NoteRoutes)




app.listen(PORT,()=>{
    console.log("server is Running at PORT" , PORT);
})
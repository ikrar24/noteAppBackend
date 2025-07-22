import {v2 as cloudinary} from "cloudinary"
import dotenv from "dotenv"



// this is env file config
dotenv.config();



cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUDI_API_KEY,
    api_secret: process.env.CLOUDI_API_KEY_SECRET,
});

export default cloudinary;



import cloudinary from "./CloudinaryConfig.js"


const deleteImg = async(filename)=>{
    try {
await cloudinary.uploader.destroy(filename);
console.log("Image Deleted successfully ");
    } catch (error) {
        console.log("Error From Deleting Image" , error);
    }


}


export default deleteImg;
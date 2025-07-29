
import cloudinary from "./CloudinaryConfig.js"


const deleteImg = async(filename,updatedData )=>{
    try {

        console.log( "Delete Files", filename);
        console.log( "update", updatedData);
        



await cloudinary.uploader.destroy(filename);
console.log("Image Deleted successfully ");
    } catch (error) {
        console.log("Error From Deleting Image" , error);
    }


}


export default deleteImg;
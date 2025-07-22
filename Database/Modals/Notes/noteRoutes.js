import  Express  from "express";
import uploadNotes from "../../Cloudinary/Note.Config.Cloudinary.js";
import CreateNote from "./Create.Note.js";

const NoteRoutes = Express.Router();

NoteRoutes.post("/" , uploadNotes.array("noteImage", 5) , CreateNote )


export default NoteRoutes;
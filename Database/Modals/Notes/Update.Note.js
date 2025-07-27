import deleteImg from "../../Cloudinary/DeleteImg";
import NoteSchema from "../../Schema/Notes.Schema.js"

const UpdateNote = async (req, res) => {
  try {
    const { title, filename , allDecriptions } = req.body;
    const image = req.file?.path;


    if (filename) {
      await deleteImg(filename);
    }

    const updatedData = {};
    if (title) updatedData.title = title;
    if (title) updatedData.allDecriptions = allDecriptions;
    if (image) updatedData.image = image;

    const updatedUser = await NoteSchema.findByIdAndUpdate(
      req.params.id,
      updatedData,
      { new: true }
    );

    if (!updatedData) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ message: "Profile updated", user: updatedUser });
  } catch (error) {
    console.error("found error", error);
    res.status(500).json({ message: "Something went wrong", error });
  }
};

export default UpdateNote;

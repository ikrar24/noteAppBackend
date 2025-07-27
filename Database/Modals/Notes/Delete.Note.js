import NoteSchema from "../../Schema/Notes.Schema.js";

const DeleteNote = async (req, res) => {
    try {
        const id = req.params.id; // ✅ Corrected here

        if (!id) {
            return res.status(400).json({ message: "Note ID is required" });
        }

        const deletedNote = await NoteSchema.findByIdAndDelete(id);

        if (!deletedNote) {
            return res.status(404).json({ message: "Note not found" });
        }

        res.status(200).json({ message: "Note deleted successfully", note: deletedNote });

    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error });
    }
};

export default DeleteNote;

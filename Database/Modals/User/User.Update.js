import deleteImg from "../../Cloudinary/DeleteImg.js";
import UseSchema from "../../Schema/User.Schema.js";

const UpdateUserImg = async (req, res) => {
  try {
    const { fullName, filename } = req.body;
    const profileImage = req.file?.path;


    if (filename) {
      await deleteImg(filename);
    }

    const updatedData = {};
    if (fullName) updatedData.fullName = fullName;
    if (profileImage) updatedData.profileImage = profileImage;

    const updatedUser = await UseSchema.findByIdAndUpdate(
      req.params.id,
      updatedData,
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ message: "Profile updated", user: updatedUser });
  } catch (error) {
    console.error("found error", error);
    res.status(500).json({ message: "Something went wrong", error });
  }
};

export default UpdateUserImg;

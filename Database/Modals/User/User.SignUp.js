import bcrypt from "bcryptjs";
import UseSchema from "../../Schema/User.Schema.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const UserSignUp = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const userAlready = await UseSchema.findOne({ email });

    if (userAlready) {
      return res.status(409).json({ message: "User already exists with this email" });
    }

    const passwordHashed = await bcrypt.hash(password, 10);

    // ✅ Use default if image not uploaded
    const profileImageURL = [{
      Image: req.file?.path || "https://res.cloudinary.com/dq2hmndgb/image/upload/v1753708806/userImage_lru2g2.png",
      imageName: req.file?.filename || "userImage_lru2g2"
    }];

    const createUser = new UseSchema({
      fullName,
      email,
      password: passwordHashed,
      profileImage: profileImageURL
    });

    await createUser.save();

    // ✅ Correct env variable name (check your .env file too)
    const token = jwt.sign({ email }, process.env.TOKEN_SECRETE, {
      expiresIn: "30d"
    });

  

  } catch (error) {
    console.error("SignUp Error:", error);
    res.status(500).json({ message: "Server Error", error });
  }
};

export default UserSignUp;

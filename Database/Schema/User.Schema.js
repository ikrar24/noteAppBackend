import mongoose from "mongoose";

const User = mongoose.Schema(
  {
    fullName: {
      type: String,
      require: true,
      trim: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      require: true,
    },
    profileImage:[{
      image: String,
      imageName: String
    }],
    token:{
  type:String,
  require:true
    },
    postId:{
      type: mongoose.Schema.Types.ObjectId,
      ref:"notes"
    }
  },
  { timestamps: true }
);



const UseSchema = mongoose.model("userData", User);
export default UseSchema;

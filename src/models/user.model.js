import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  branch: String,
  collegeName: String,
  role: { type: String, enum: ["in-college", "out-college"], required: true },
  rating: { type: Number, default: 0 },
  completedTasks: { type: Number, default: 0 },
}, { timestamps: true });

export default mongoose.model("User", userSchema);

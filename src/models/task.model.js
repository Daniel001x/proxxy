import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  category: String,
  price: { type: Number, default: 0 },
  deadline: Date,
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  acceptedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  status: { type: String, enum: ["open", "accepted", "completed", "expired"], default: "open" },
}, { timestamps: true });

export default mongoose.model("Task", taskSchema);

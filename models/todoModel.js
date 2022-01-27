import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: [true, "Your todo item cannot be empty!"],
  },

  isComplete: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.models.Todo || mongoose.model("Todo", todoSchema);

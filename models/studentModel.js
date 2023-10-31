import mongoose from "mongoose";

// Create collections shemce

const studentSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  age: {
    type: Number,
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  location: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    default: null,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

export default mongoose.model("studentModel", studentSchema);

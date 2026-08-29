import mongoose from "mongoose";

const urlSchema = new mongoose.Schema(
  {
    longUrl: {
      type: String,
      required: true,
      trim: true,
    },
    shortCode: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      index: true
    },
  },
  { timestamps: true },
);

const urlModel = mongoose.models.url || mongoose.model('url', urlSchema);

export default urlModel;
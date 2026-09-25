import mongoose from "mongoose";
import env from "./env.js";

const connectDB = async () : Promise<void> => {
  try {
    if (
      mongoose.connection.on("connected", () => {
        console.log("Database Connected Successfully.");
      })
    )
      if (
        mongoose.connection.on("error", () => {
          console.log("Database Connection Failed.");
        })
      )
        await mongoose.connect(env.MONGODB_URI);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;

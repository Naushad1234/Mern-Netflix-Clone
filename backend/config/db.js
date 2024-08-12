import mongoose from "mongoose";
import { ENV_VARS } from "./enVars.js";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(ENV_VARS.MONGO_URI);
    console.log("MongoDB connected: " + conn.connection.host);
  } catch (error) {
    process.exit(1); //this means there is an error....
    console.error("Error Connecting to MongoDB" + error.message);
  }
};

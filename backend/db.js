import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MANGO_URI); //connect to MongoDB
    // Node.js 18 and up prefer IPv6 addresses
    // 127.0.0.1 instead localhost
    console.log(`connect to ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1); // stop the server or terminate the process
  }
};

export default connectDB;

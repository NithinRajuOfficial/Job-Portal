import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(`${process.env.DbCredentials}`);
    console.info("MongoDb Successfully Connected");
  } catch (error) {
    console.error("MongoDb connection error:", error);
  }
};

export default connectDb;

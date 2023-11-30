import mongoose from "mongoose";

const connection = {};

export const connectToDB = async () => {
  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(
      "mongodb+srv://mehranehs:mehranehs@cluster0.haysj7p.mongodb.net/dashboard?retryWrites=true&w=majority"
    );
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

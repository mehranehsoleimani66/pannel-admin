import mongoose from "mongoose";

const connection = {};

export const connectToDB = async () => {
  if (connection.isConnected) return;
  const db = await mongoose.connect(process.env.MONGO);
  connection.isConnected = db.connections[0].readyState;
};

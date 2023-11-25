import mongoose from "mongoose";

export const connectToDB = async () => {
  const connection = {};
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

// try {
//     await mongoose.connect('mongodb://127.0.0.1:27017/test');
//   } catch (error) {
//     handleError(error);
//   }

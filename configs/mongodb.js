import mongoose from "mongoose";
import colors from "colors";

/////////////// Mongo Db Connection
export const mongodbConnection = async () => {
  try {
    const connections = await mongoose.connect(process.env.Mongodb_Connection);
    console.log(`Mongodb Connections Done`.bgBlue.black);
  } catch (error) {
    console.log(`Connections faile the error is ${error.message}`.bgRed.black);
  }
};

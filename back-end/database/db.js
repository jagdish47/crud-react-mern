import mongoose from "mongoose";

const Connection = async (username, password) => {
  const URL = `mongodb+srv://${username}:${password}@crud-application.nzlkyfq.mongodb.net/`;

  try {
    await mongoose.connect(URL);
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("Error while connectiong to Database : ", error);
  }
};

export default Connection;

import mongoose from "mongoose";

export const ConnectDB = async () => {
  
    await mongoose.connect('mongodb+srv://sandunii798:Mydb%40047@cluster0.j1ovvwc.mongodb.net/todo-app'); 
       
    console.log("DB connected");
  
};

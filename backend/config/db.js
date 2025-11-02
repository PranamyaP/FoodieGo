import mongoose from "mongoose";

export const connectDB =async()=>{
    await mongoose.connect('mongodb+srv://your_mongodb_link').then(()=>console.log("DB Connected"));
}
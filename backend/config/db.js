import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://lequocbao2222005:MpvpWn2YnaTVLOmu@cluster0.gmmk2cb.mongodb.net/food-del').then(()=>console.log("DB Connected"))
}
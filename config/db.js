const mongoose=require('mongoose');

const connectDB=async ()=>{
 try {
    const conn=await mongoose.connect(process.env.MONGO_DB);
    console.log(`MongoDB connected ${conn.connection.host}`);
 } catch (error) {
    console.log(`Error: ${error.message}`);
 }
}
module.exports=connectDB;
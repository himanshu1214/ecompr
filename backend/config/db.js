import mongoose from "mongoose";

const connectDb = async() => {
    
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    console.log(`Mongo DB connected: ${conn.connection.host}`.bgCyan.underline);
} catch (error) {
    console.error(`Error : ${error.message}`.bgRed.bold);
    process.exit(1);
}
}


export default connectDb;
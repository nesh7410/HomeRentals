import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const conn = () => {
    mongoose.connect(process.env.MONGO,{
        useNewUrlParser : true,
        useUnifiedTopology : true
    })
    .then(() => {
        console.log("Database Connection established")
    })
    .catch((err) => {
        
        console.log("Connection Issues with Database");
        console.error(err);
        process.exit(1);
    })
}

export default conn;
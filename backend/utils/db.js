import { config } from "dotenv";
import mongoose from "mongoose";

config()// module type import


const URI= process.env.MONGODB_URI

const dbconnect= async ()=>{


    try {
 await mongoose.connect(URI)
console.log(`mongodb connected successfully: ${URI}`)

    } catch (error) {
        console.log('error in db connection in db.js',error)
        
    }

}

export default dbconnect
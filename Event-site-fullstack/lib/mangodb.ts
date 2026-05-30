// Import necessary modules from Mongoose and Next.js
import mongoose from 'mongoose';

//define the connection cache type
type MongooseCache = {
    conn: typeof mongoose | null ;
    promise: Promise<typeof mongoose>  | null
}
//extend the global object to include our mongoose cache
declare global {
    var mongoose: MongooseCache | undefined
}
const MONGODB_URI = process.env.MONGODB_URI
//validate MOngoDB URI exists
if (!MONGODB_URI) {
    throw new Error ("please define the MONGODB_URI environment variable inside .env.local")
}

let cached : MongooseCache = global.mongoose || {conn: null,promise:null}

if (!global.mongoose) {
    global.mongoose = cached
}
 async function connectDB(): Promise<typeof mongoose> {

     // return existing connection if available
    if (cached.conn) {
         return cached.conn
    }
    if (!cached.promise) {
        if (!MONGODB_URI) {
            throw new Error ("please define the MONGODB_URI environment variable inside .env.local")
        }
        
        const options = {
            bufferCommands: false ,//disable mongose buffering
        }
        cached.promise = mongoose.connect(MONGODB_URI!, options).then((mongoose) => {
            return mongoose
        }) 
    }
    try {
        cached.conn = await cached.promise
    } catch (error) {
        cached.promise = null ;
        throw error
    }
    return cached.conn
    
    }
export default connectDB


   


/*
*establish a connection to mongoDB
*caches the connection to prevent multiple connection
*return promis resolving
*/

//------------------------------------------------------------





// // Define the shape of our cached connection object
// interface CachedConnection {
//   conn: Mongoose | null;
//   promise: Promise<Mongoose> | null;
// }

// // Ensure environment variables are available
// // You should have MONGO_URL defined in your .env.local or environment variables
// const MONGODB_URL = process.env.MONGODB_URL as string;

// // Initialize the cache object with null values
// const cached: CachedConnection = {
//   conn: null,
//   promise: null,
// };

// /**
//  * Establishes and caches a Mongoose connection to MongoDB.
//  *
//  * This function ensures that a single MongoDB connection is established and reused
//  * across the application, particularly beneficial in Next.js development environments
//  * where serverless functions might spin up and down rapidly.
//  *
//  * @returns {Promise<Mongoose>} A Promise that resolves with the Mongoose connection instance.
//  */
// async function connectToDatabase(): Promise<Mongoose> {
//   // If the connection is already cached, return it immediately
//   if (cached.conn) {
//     console.log('=> using cached database connection');
//     return cached.conn;
//   }

//   // If a connection promise is already in progress, wait for it to resolve
//   if (cached.promise) {
//     console.log('=> waiting for database connection promise to resolve');
//     return cached.promise;
//   }

//   // If no connection or promise exists, create a new one
//   console.log('=> creating a new database connection');
//   cached.promise = mongoose.connect("mongodb://localhost:27017/bookStore", {
//     // Options for the connection:
//     // useNewUrlParser: true, // Deprecated but good to know for older versions
//     // useUnifiedTopology: true, // Deprecated but good to know for older versions
//     // bufferCommands: false, // Prevents Mongoose from buffering commands if not connected
//     // autoIndex: process.env.NODE_ENV !== 'production', // Create indexes only in development
//   })
//     .then((mongoose) => {
//       console.log('=> database connection established successfully');
//       return mongoose;
//     })
//     .catch((error) => {
//       console.error('=> error connecting to database:', error);
//       // In a real-world scenario, you might want to implement retry logic here
//       // or throw the error to be handled by a higher-level error handler.
//       throw error; // Re-throw the error to indicate connection failure
//     });

//   // Store the promise in the cache
//   cached.conn = await cached.promise;
//   return cached.conn;
// }

// export default connectToDatabase;

// // Example of how you might use this in an API route:
// /*
// import type { NextApiRequest, NextApiResponse } from 'next';
// import connectToDatabase from '../lib/dbConnect'; // Assuming dbConnect.ts is in lib/
// import { Schema, model, models } from 'mongoose';

// // Define your schema and model (example)
// const userSchema = new Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
// });

// // Use 'models' object to prevent OverwriteModelError
// const User = models.User || model('User', userSchema);

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   try {
//     // Establish the database connection
//     const db = await connectToDatabase();
//     console.log('Database connected:', db.connection.db.databaseName);

//     // Example: Fetching users
//     if (req.method === 'GET') {
//       const users = await User.find({});
//       res.status(200).json(users);
//     } else if (req.method === 'POST') {
//       const newUser = new User(req.body);
//       await newUser.save();
//       res.status(201).json(newUser);
//     } else {
//       res.setHeader('Allow', ['GET', 'POST']);
//       res.status(405).end(`Method ${req.method} Not Allowed`);
//     }

//   } catch (error) {
//     console.error('API route error:', error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// }
// */

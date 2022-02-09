import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI);
await mongoClient.connect();
const db = mongoClient.db("vapor-store");
const userCollection = db.collection("users")
const tokensCollection = db.collection("tokens")

export { userCollection, tokensCollection} 

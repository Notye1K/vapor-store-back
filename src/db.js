import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI);

let userCollection, tokensCollection;
mongoClient.connect().then(() => {
  const db = mongoClient.db("vapor-store");
  userCollection = db.collection("users")
  tokensCollection = db.collection("tokens")
});

export { userCollection, tokensCollection } 

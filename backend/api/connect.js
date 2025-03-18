import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();
const URI = `${process.env.MONGO_DB_KEY}`;

const client = new MongoClient(URI);

export const db = client.db('spotifyClone');

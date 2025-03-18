import { MongoClient } from 'mongodb';

const URI = 'mongodb+srv://Miyata:12062708@spotify-clone.ipy3d.mongodb.net/?retryWrites=true&w=majority&appName=spotify-clone';

const client = new MongoClient(URI);

export const db = client.db('spotifyClone');

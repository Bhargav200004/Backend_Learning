import dotEnv from 'dotenv';
import connectDB from './db/dbConnect.js';

dotEnv.config({
  path: './env',
});


connectDB();

import dotEnv from 'dotenv';
import connectDB from './db/dbConnect.js';
import { app } from './app.js';

dotEnv.config({
  path: './env',
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8080, () => {
      console.log(`Server running on PORT ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log('MONGODB Connection failed: ', err);
  });

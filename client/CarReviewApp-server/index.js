import express from 'express';
 import bodyParser from 'body-parser'; 
 import mongoose from 'mongoose';
 import cors from 'cors';
 import dotenv from 'dotenv'; 


 import postRoutes from './routes/posts.js';
 import CarRoutes from './routes/Cars.js';

const app = express(); 
dotenv.config();

// try{
   
//     const result = dotenv.config(); 
//     console.log('.env file read and parsed....', result.parsed);
// } catch (error){
//     console.log('Error while reading .env file.....', error);
// }

 app.use(bodyParser.json({ limit: "30mb", extended:true })); 

 app.use(bodyParser.urlencoded({ limit: "30mb", extended:true })); 
  app.use(cors()); 

 app.use('/posts', postRoutes); 
 app.use('/Cars', CarRoutes); 





 const MONGO_URL = process.env.MONGO_URL;



const PORT = process.env.PORT|| 3000;
app.listen(PORT, () => console.log(`Server listening on port: ${PORT} `))
// console.log('PORT..............', PORT);
// console.log('type of PORT..............', typeof PORT);


mongoose.connect(MONGO_URL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB successfully!');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  })
  app.get('/', (req, res) => {
    res.send('Hello World!');
  });
  






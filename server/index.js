import express from 'express';
import 'dotenv/config.js';
import cors from 'cors';
import connectToMongo from './db.js';
import router from './routes/movie.js';

const app = express();

// middleware
app.use(express.json());
app.use(cors());

// Database Connection
connectToMongo();

// routes
app.use('/api', router);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('Server running on port 5000!');
});
import express from 'express';
import colors from "colors";
import connectDb from './config/db.js';
import dotenv from 'dotenv';
import productRoutes from './routes/productRoutes.js';

const app = express();

dotenv.config();

connectDb();

app.get('/', (req, res) => {
    res.send('API is running ...');
} )

app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`App is running in ${process.env.NODE_ENV} on port ${PORT}`.bgGreen));
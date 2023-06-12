import express from 'express';
import connectDb from './config/db.js';
import dotenv from 'dotenv';
import products from './data/products.js';
import colors from "colors";

const app = express();

dotenv.config();

connectDb();

app.get('/', (req, res) => {
    res.send('API is running ...');
} )

app.get('/api/products', (req, res) => {
    res.json(products);
})

app.get('/api/products/:id', (req, res) => {
    const product = products.find((p) => p._id == req.params.id);
    console.log('product found: ' + JSON.stringify(product));
    res.json(product);
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`App is running in ${process.env.NODE_ENV} on port ${PORT}`.bgGreen));
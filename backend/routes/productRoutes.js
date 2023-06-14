import express from 'express';
import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';


const router = express.Router();

// @desc Fetch all products
// route GET /api/product
// @access  Fetch all products 
// Public
router.get('/', asyncHandler( async (req, res) => {
    const products = await Product.find({}) // returns a promise
    res.json(products);
}));


// @desc Fetch product based on product_id
// route GET /api/product/:id
// @access  Fetch product based on product_id
// Public 
router.get('/:id', asyncHandler( async (req,res) => {
    console.log(req.params.id);
    const product = await Product.findById(req.params.id);
    if (product){
        res.json(product);
    } else {
        res.status(404).json( { message: 'product not found' })
    }
}));

export default router;
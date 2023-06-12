import mongoose from "mongoose";
import dotenv from 'dotenv';
import colors from 'colors';
import users from "./data/users.js";
import products from "./data/products.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";
import connectDb from "./config/db.js";


dotenv.config();

connectDb();


console.log('we reached here');

const importData = async () => {
        try {
            await Order.deleteMany();
            await Product.deleteMany();
            await User.deleteMany();
            
            console.log('we reached here');
            const createdUsers = await User.insertMany(users);
            const adminUser = createdUsers[0]._id;

            const sampleProducts = products.map(product => {
                return { ...product, user: adminUser }
            });

            await Product.insertMany(sampleProducts);

            console.log('Data imported !!! '.green.inverse);
        } catch(error) {
            console.log(`Got error ${error}!!! `.red.inverse);

        }

}

const destroyData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        console.log('Data destroyed !!! '.green.inverse);
    } catch(error) {
        console.log(`Got error : ${error}!!!`.red.inverse);

    }

}

if (process.argv[2] == '-d'){
    destroyData();
} else {
    importData();
}

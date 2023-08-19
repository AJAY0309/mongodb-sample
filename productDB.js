const connectDB = require('./db/connect');
const Product = require("./models/product");

const ProductJson = require("./products.json");

const start = async() => {
    try {
        await connectDB("mongodb+srv://ajaygunti786:ajay12345@cluster0.1kc9g4n.mongodb.net/ajaygunti786?retryWrites=true&w=majority");
        await Product.create(ProductJson);
        console.log("success");
    } catch (error) {
        console.log(error);
    }
}

start();
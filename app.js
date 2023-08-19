// require("dotenv").config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

const connectDB = require("./db/connect");
const path = require('path');

// Serve static files from the "public" folder
app.use(express.static('images'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'images')));

// Route for serving the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const products_routes = require("./routes/product");

// app.get('/', (req, res) => {
//     res.send("This is a sample page");
// })

//middleware
app.use("/api/products", products_routes);

const start = async() => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`${PORT} Connected`);
        });
    } catch (error) {
        console.log(error);
    }
}

start();
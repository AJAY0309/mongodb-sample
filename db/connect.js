const mongoose = require('mongoose');


uri = "mongodb+srv://ajaygunti786:ajaygunti786@cluster0.1kc9g4n.mongodb.net/ajaygunti786?retryWrites=true&w=majority";

const connectDB = () => {
    console.log("connected to db")
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

module.exports = connectDB;
const mongoose = require("mongoose");

module.exports = () => {
    try {
        mongoose.connect("mongodb+srv://vimalsri318:Vimalsri318@cluster0.cyesmgm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("Connected to database successfully");
    } catch (error) {
        console.error("Error connecting to database:", error);
    }
};
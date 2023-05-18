require("dotenv").config()

const mongoose = require('mongoose');
const connectToDB = async () => { 
    mongoose.connect(process.env.MONGO_URI)
    .then((conn) => {
console.log(`DB Connected`);
    })
    .catch((err) => {         
        console.log(err); 
     })
 }

module.exports = connectToDB;

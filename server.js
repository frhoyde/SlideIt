require('dotenv').config({ path: "./config.env"});

const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');
const connectDB = require('./config/db');


// connect to database
connectDB();


const app = express();
const port = process.env.PORT || 5500;

app.use(cors());
app.use(express.json());
app.use('/api/auth', require('./routes/auth'));

const uri = process.env.ATLAS_URI;


const server = app.listen(port, () => {console.log(`Server is running on port ${port}`);});

process.on("unhandledRejection", (err, promise) => {
    console.log(`Logged error: ${err}`);
    server.close(() => process.exit(1));
})

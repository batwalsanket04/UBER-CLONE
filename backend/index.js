const dotenv=require('dotenv')
const express = require('express');
const app = express();
dotenv.config();

const cors=require('cors');
const { configDotenv } = require('dotenv');


app.use(cors());


app.get('/', (req, res) => {
    res.send("API Working");
});

app.listen(3000, () => {
    console.log("Running on http://localhost:3000");
});

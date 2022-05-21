const express = require('express');
require('dotenv').config();
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('SKS Inc. Server is Running');
});

app.listen(port, () => {
    console.log('SKS Inc. Server is Listening fron port: ', port);
})
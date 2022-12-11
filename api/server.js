const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const colors = require('colors')

dotenv.config({path: './config.env'});
const app = express();
const port = process.env.PORT || 7000;
const saltRounds = 12;


const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'shsid107001',
    database: "GxDesk"
});

app.use(cors());
app.use(express.json());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));



// **************** SETUP TEST ROUTE *****************************
app.get('/apple/pie', (req, res) => {
    console.log(`Yummy Pie`);
    res.send({express: "Have a slice!"})
})
// **************** SETUP TEST ROUTE *****************************







app.listen(port, () => console.log(`Server is UP and Running on port ${port}`.green.bold))
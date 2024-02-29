const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const port = 3000;

const corsOptions = {
    origin: ['http://localhost:5173'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
}

app.use(cors(corsOptions));
app.use(bodyParser.json());

// app.use('/api', require('./routes/api'));

app.get('/', (req, res) => {

    //Connect to mysql database
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'thanhtung0709',
        database: 'LIBRARY',
    });

    connection.execute(
        'SELECT * FROM Member',
        function (err, results, fields) {
            console.log(results); // results contains rows returned by server
            console.log(fields); // fields contains extra meta data about results, if available
            res.status(200).json(results);
        });


});



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
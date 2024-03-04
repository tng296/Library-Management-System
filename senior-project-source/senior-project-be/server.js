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

            res.status(200).json(results);
        });


});

app.post('/adduser', (req, res) => {
    const { fName, lName, age, sex, DOB, email, status, hold } = req.body.data;

    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'thanhtung0709',
        database: 'LIBRARY',
    });

    connection.execute(
        'INSERT INTO Member (fName, lName, age, sex, DOB, email, status, hold) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [fName, lName, age, sex, DOB, email, status, hold],
        function (err, results, fields) {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Failed to add new user' });
            } else {
                console.log('New user added successfully');
                res.status(200).json({ success: true });
            }
        }
    );
});
app.put('/edituser', (req, res) => {
    const { fName, lName, email, status, memberID } = req.body.data;
    const id = req.body.data.memberID;
    console.log(">>>check: ", id);
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'thanhtung0709',
        database: 'LIBRARY',
    });

    connection.execute(
        'UPDATE Member SET fName = ?, lName = ?, email = ?, status =? WHERE MemberID = ?', [fName, lName, email, status, memberID],
        function (err, results, fields) {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Failed to edit new user' });
            } else {
                console.log('Edit user added successfully');
                res.status(200).json({ success: true });
            }
        }
    );
});



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
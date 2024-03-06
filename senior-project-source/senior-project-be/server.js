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

app.delete('/deleteuser', (req, res) => {
    const id = req.body.memberID;
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'thanhtung0709',
        database: 'LIBRARY',
    });
    connection.execute(
        'DELETE FROM Member WHERE MemberID = ?', [id],
        function (err, results, fields) {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Failed to delete user' });
            } else {
                console.log('Delete user successfully');
                res.status(200).json({ success: true });
            }
        }
    )
});

app.get('/fetchBooks', (req, res) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'thanhtung0709',
        database: 'LIBRARY',
    });

    connection.execute(
        'SELECT * FROM Book',
        function (err, results, fields) {

            res.status(200).json(results);
        });
});

app.post('/addbook', (req, res) => {
    const { ISBN, genre, title, location, status, publishedBy, writtenBy, language, shelf } = req.body.data;

    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'thanhtung0709',
        database: 'LIBRARY',
    });

    connection.execute(
        'INSERT INTO Book (ISBN, genre, title, location, status, publishedBy, writtenBy, language, shelf) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [ISBN, genre, title, location, status, publishedBy, writtenBy, language, shelf],
        function (err, results, fields) {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Failed to add new book' });
            } else {
                console.log('New book added successfully');
                res.status(200).json({ success: true });
            }
        }
    );
});

app.put('/editbook', (req, res) => {
    const { ISBN, genre, title, location, status, publishedBy, writtenBy, language, shelf } = req.body.data;
    const id = req.body.data.ISBN;
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'thanhtung0709',
        database: 'LIBRARY',
    });

    connection.execute(
        'UPDATE Book SET genre=?, title=?, location=?, status=?, publishedBy=?, writtenBy=?, language=?, shelf=? WHERE ISBN=? ', [genre, title, location, status, publishedBy, writtenBy, language, shelf, ISBN],
        function (err, results, fields) {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Failed to edit new book' });
            } else {
                console.log('Edit book successfully');
                res.status(200).json({ success: true });
            }
        }
    );
});

app.delete('/deletebook', (req, res) => {
    const id = req.body.ISBN;
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'thanhtung0709',
        database: 'LIBRARY',
    });
    connection.execute(
        'DELETE FROM Book WHERE ISBN = ?', [id],
        function (err, results, fields) {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Failed to delete book' });
            } else {
                console.log('Delete book successfully');
                res.status(200).json({ success: true });
            }
        }
    )
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
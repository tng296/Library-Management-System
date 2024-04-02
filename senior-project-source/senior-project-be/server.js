const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const port = 3000;
const bcrypt = require('bcryptjs');
const { CreateToken, VerifyToken } = require('./middleware/JWTcontroller.js');

const salt = bcrypt.genSaltSync(10);

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
    const { fName, lName, email, status, password, memberID } = req.body.data;
    const passwordHash = bcrypt.hashSync(password, salt);
    const id = req.body.data.memberID;
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'thanhtung0709',
        database: 'LIBRARY',
    });

    connection.execute(
        'UPDATE Member SET fName = ?, lName = ?, email = ?, status =?, password=? WHERE MemberID = ?', [fName, lName, email, status, passwordHash, memberID],
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

app.post('/login', (req, res) => {
    const { email, password } = req.body.data;
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'thanhtung0709',
        database: 'LIBRARY'
    });

    connection.execute(
        'SELECT roleID, password FROM Member WHERE email = ?', [email],
        function (err, results, fields) {
            let checkPass = bcrypt.compareSync(password, results[0].password);
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Failed to login' });
            }
            else if (checkPass) {
                let token = CreateToken({ roleID: results[0].roleID, email: email });
                res.status(200).json({ roleID: results[0].roleID, token: token, email: email });
            } else {
                res.status(500).json({ error: 'Failed to login' });
            }
        })
});

app.get('/fetchStudyRoom', (req, res) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'thanhtung0709',
        database: 'LIBRARY'
    });

    connection.execute(
        'SELECT * FROM StudyRoom',
        function (err, results, fields) {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Failed to fetch study room' });
            }
            else {
                console.log('Fetch study room successfully');
                res.status(200).json(results);
            }
        }
    )
});

app.put('/checkoutbook', (req, res) => {
    const { rentedBy, ISBN } = req.body.data;
    console.log(">>rentedBy in server: ", rentedBy);
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'thanhtung0709',
        database: 'LIBRARY'
    });

    connection.execute(
        'UPDATE Book SET rentedBy = ? WHERE ISBN = ?', [rentedBy, ISBN],
        function (err, results, fields) {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Failed to checkout book' });
            } else {
                console.log('Checkout book successfully');
                res.status(200).json({ success: true });
            }
        }
    )
});

app.put('/checkinbook', (req, res) => {
    const { ISBN } = req.body.data;
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'thanhtung0709',
        database: 'LIBRARY'
    });

    connection.execute(
        'UPDATE Book SET rentedBy = ? WHERE ISBN = ?', [`None`, ISBN],
        function (err, results, fields) {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Failed to checkIN book' });
            } else {
                console.log('Checkout book successfully');
                res.status(200).json({ success: true });
            }
        }
    )
});

app.post('/verifyToken', async (req, res) => {
    const { token } = req.body.data;
    console.log(">>>check token in server :", token);
    try {
        let decodedToken = await VerifyToken(token);
        console.log(">>>check decoded token: ", decodedToken);
        res.status(200).json(decodedToken);
    }
    catch {
        console.log(err);
        res.status(500).json({ error: 'Failed to verify token' });
    }
});

app.post('/personal', (req, res) => {
    const { getEmail } = req.body.data;
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'thanhtung0709',
        database: 'LIBRARY'
    });
    connection.execute(
        'SELECT * FROM Member WHERE email = ?', [getEmail],
        function (err, results, fields) {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Failed to retrieve personal info' });
            } else {
                console.log('Retrieve personal info successfully');
                res.status(200).json({ results });
            }
        }
    )

});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
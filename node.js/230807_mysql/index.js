const express = require('express');
const app = express();
const PORT = 8000;
const mysql = require('mysql');

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//mysql 연결 
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'yumin',
    password: '9982',
    database: 'kdt9',
    port: 3306,

});

conn.connect((err) => {
    if (err) {
        console.log(err)
        return;
    }
    console.log('connect');
});

// const indexRouter = require('./routes');
// app.use('/', indexRouter);

// app.get('/', (req, res) => {
//     res.render('index');
// });

// GET / visitor 방명록 전체 보이기
app.get('/', (req, res) => {
    res.render('index')
});


//방명록 하나 조회
app.get('/visitor', (req, res) => {
    const query = 'SELECT * FROM visitor'
    conn.query(query, (err, rows) => {
        console.log(rows);
        res.render('visitor', { data: rows })
    })

})

// POST /visitor/write 방명록 하나 생성
app.post('/visitor/write', (req, res) => {
    const query = `INSERT INTO visitor (name, comment) VALUES ('${req.body.name}', '${req.body.comment}')`
    conn.query(query, (err, rows) => {
        console.log('rows', rows);
        res.send({id: rows.insertId, name: req.body.name, comment: req.body.comment})

        //res.send({ id: name: comment });
    });
});

// PATCH /visitor/edit 방명록 하나 수정
app.patch('/visitor/edit', (req, res) => {
    res.send('방명록 하나 수정')
});

// DELETE /visitor/delete 방명록 하나 삭제 

app.delete('/visitor/delete', (req, res) => {
    res.send('방명록 하나 삭제');
});

app.use('*', (req, res) => {
    res.render('404');
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
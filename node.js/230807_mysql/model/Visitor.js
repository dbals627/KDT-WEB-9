exports.getVisitors = () => {
    return [
        { id: 1, name: '홍길동', comment: '내가 왔다' },
        { id: 2, name: '이찬혁', comment: '으라차차' },
    ];
};

// const mysql = require('mysql');

// const conn = mysql.createConnection ({
//     host: 'localhost', 
//     user: 'user',
//     password: '1234',
//     database: 'yumin',
// });

// exports.getVisitors = (cb) => {
// conn.query(`SELECT * FROM visior`, (err, rows) => {
//     if (err) {
//         throw err;
//     }

//     console.log('Visitor.js: ', rows);
//     cb(rows);
// });
// };

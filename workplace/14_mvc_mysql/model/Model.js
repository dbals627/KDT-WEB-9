const mysql = require('mysql');

//mysql연결
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'yumin',
    password: '9982',
    database: 'kdt9',
    port: 3306,
});

//회원가입 정보 데이터베이스 저장
const db_signup = (data, cb) => {
    const query = `INSERT INTO users (userid, pw, name) VALUES ('${data.userid}','${data.pw}','${data.name}')`;
    conn.query(query, (err, rows) => {
        if(err) {
            console.log(err);
            return;
        }
        console.log('db_signup', rows)
        cb();
    });
    
};

//로그인 
const db_signin = (data) => {
    const query = `SELECT * FROM users WHERE userid = '${data.userid}' AND pw ='${data.pw}'`
    conn.query(query, (err, rows) => {
        if(err) {
            console.log(err);
            return;
        }
        console.log('db_signin', rows);
        //select문의 쿼리문은 배열로 반환
        cb(rows);
    });

};

module.exports = {
    db_signup,
    db_signin,
};
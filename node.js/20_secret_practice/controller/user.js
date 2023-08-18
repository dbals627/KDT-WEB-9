const { User } = require('../models');

exports.index = (req, res) => {
    res.render('index');
};

//회원가입
exports.register = (req, res) => {
    const { userid, pw, name } = req.body;
    const hashPw = bcryptPassword(pw);
    User.create({
        userid,
        name,
        pw: hashPw,
    }).then((res) => {
        console.log(res);
        res.json({ result: true })
    });
};


const bcrypt = require('bcrypt')
//bcrypt 단방향
const bcryptPassword = (password) => {
    return bcrypt.hashSync(password, 10);
};
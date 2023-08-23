const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use(cookieParser())

//cookie 옵션 객체
const cookieConfig = {
    httpOnly: true,
    maxAge: 60 * 1000, //1min
};

app.get('/', (req, res) => {
    console.log(req.cookies)
    res.render('index', { popup: req.cookies.modal }); //객체접근, 이값을 프론트로 보내야함 
});

app.post('/setCookie', (req, res) => {
    //쿠키생성
    res.cookie('modal', 'hide', cookieConfig);
    res.send({ result: true, msg: '쿠키 생성 완료' });
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
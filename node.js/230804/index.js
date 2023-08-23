const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const router = require('./routes')
//routes 폴더에서 기본적으로 index는 생략가능함. 저절로 인식
app.use('/', router);
//example
//const userRouter = require('./routes/user');
//app.use('/user', userRouter)


//* 맨마지막 선언
app.use('*', (req, res) => {
    res.render('404');
});

//모든 오류에 대한건 use 사용 

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
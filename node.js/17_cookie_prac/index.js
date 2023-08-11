const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use(cookieParser("asdfzxcv")) 

//cookie 옵션 객체
const cookieConfig = {
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24), 
    signed: true,
};

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/cookie', (req, res) => {
    res.render('cookie');
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
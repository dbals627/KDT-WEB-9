const express = require('express');
const app = express();
const PORT = 8020;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('practice_2');
});

app.post('/resultPost', (req, res) => {
    const id = 'yumin';
    const pw = '1234';
    if (id === req.body.username && pw === req.body.password) {
        res.send({ result: true, userInfo: req.body });
    } else {
        res.send({ result: false, userInfo: null });
    }

});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
const express = require('express')
const app = express();
const PORT = 8080;

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

//view engine
app.set('view engine', 'ejs');
app.set('views', './views');


//router
app.get('/', (req, res) => {
    res.render('practice_1');
});

app.get('/getForm', (req, res) => {
    console.log(req.query);
    res.render('prac_result', {
        userInfo: req.query
    })
});

app.post('/postForm', (req, res) => {
    console.log(req.body);
    res.render('prac_result', {
        userInfo: req.body
    })
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
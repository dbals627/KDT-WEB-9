const express = require('express');
const app = express();
const PORT = 8000;

//body-parser 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//view engine 
app.set('view engine', 'ejs');
app.set('views', './views');


//router


app.get('/axiosGet', (req, res) => {
    res.render('practice_1');
});

app.get('/resultGet', (req, res) => {
    res.send({ result: true, data : req. query })
})


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
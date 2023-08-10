const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('veiws', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//임시 데이터 
const comments = [
    {
        id: 1,
        userID: 'helloworld',
        date: '2023-08-01',
        comment: '안녕하세요'
    },
    {
        id: 2,
        userID: 'happy',
        date: '2023-08-02',
        comment: '반갑습니다'
    },
    {
        id: 3,
        userID: 'lucky',
        date: '2023-08-03',
        comment: '행복하세요'
    },
    {
        id: 4,
        userID: 'good',
        date: '2023-08-04',
        comment: '좋은저녁되세요'
    },
]

app.get('/', (req, res) => {
    res.render('index');
});

//GET /comments
app.get('/comments', (req, res) => {
    res.render('comments', { commentInfos: comments })
});

//* 맨마지막 선언 
app.get('*', (req,res) => {
    res.render('404');
})

//GET /comment/:id
app.get('/comment/:id', (req,res) => {
    // console.log(req.params);
    // console.log(req.params.id);
    const commentId = req.params.id;
    console.log(comments[commentId -1]);
    res.render('comment', {commentInfo: comments[commentId -1]});
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
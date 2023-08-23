const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
//body-parser
//app.use(express.urlencoded({ extended: true }));
//app.use(express.json());
app.use('/uploads', express.static(__dirname + '/uploads'));

//multer 설정
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname) //원본이름의 확장자를 추출함 
        const newName = path.basename(file.originalname, ext) + Date.now() + ext;
        cb(null, newName);

    },
});

// const limits = {
//     fileSize: 5 * 1024 * 1024 //5mb
// }

const upload = multer({ storage });


//router
app.get('/', (req, res) => {
    res.render('index');
});

//동적(비동기) multer 업로드
app.post('/upload', upload.array('files'), (req, res) => {
    res.send(req.files) //프엔으로 파일정보 전송 
});


//server open
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

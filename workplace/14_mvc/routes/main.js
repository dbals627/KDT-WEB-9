const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');


router.get('/', controller.main); //컨트롤러에게 실행시킴 

// (req, res) => {
//     res.render('index');
// }); 잘라서 컨트롤러로 넣기

//전체목록보기 
router.get('/comments', controller.comm);  //module.exports의 이름 (내보낼 이름)comm

//상세보기(하나씩 보기)
router.get('/comment/:name', controller.comment);

//controller가 main,comm,comment실행하라고 시킴

module.exports = router;

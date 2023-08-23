const express = require('express');
const router = express.Router();
const controller = require('../controller/CComment')


router.get('/', controller.main);
//CComment 에 main 

//GET /comments
router.get('/comments', controller.comments)
//GET /comment/:id
router.get('/comment/:id', controller.comment);

module.exports = router;
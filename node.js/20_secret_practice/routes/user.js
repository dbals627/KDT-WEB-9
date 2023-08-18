const express = require('express');
const router = express.Router();
const controller = require('../controller/user');
const { User } = require('../models');

router.get('/', controller.index);
router.post('/login', controller.login);
router.get('/signup', controller.signup);

//로그인



//회원가입

module.exports = router;

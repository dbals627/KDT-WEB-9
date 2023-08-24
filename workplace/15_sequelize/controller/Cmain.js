//const model = require('../model/Model');
const { User } = require('../models');
const bcrypt = require('bcrypt');
//models.index에서 index는 생략 

////////////////////////////////
//GET
//메인페이지
const main = (req, res) => {
    res.render('index');
};
//회원가입페이지
const signup = (req, res) => {
    res.render('signup');
};
//로그인페이지
const signin = (req, res) => {
    res.render('signin');
};
//회원정보 조회 페이지
const profile = (req, res) => {
    // console.log(req.params);
    // console.log(req.query);
    // model.db_profile(req.params, (result) => {
    //     res.render('profile', { data: result[0] });
    // });
    //findeOne : 데이터베이스에서 하나의 정보를 찾을 때 사용, 객체반환
    //where: 객체형태로 찾을 정보를 입력 
    User.findOne({
        where: { id: req.params.number }  //Model.js
    }).then((result) => {
        res.render('profile', { data: result }); //findone은 하나만 받기때문에
    });
};


///////////////////////////////
//POST
//회원가입
const post_signup = async (req, res) => {
    // model.db_signup(req.body, () => {
    //     res.json({ result: true });
    // });
    const { userid, name, pw } = req.body;
    //create 데이터 생성 
    //실습과제 - 비밀번호 암호화하여 저장 
    const hash = await bcryptPassword(pw)
    User.create({ userid, name, pw }).then(() => {
        res.json({ result: true });
    });
};

//로그인
const post_signin = async (req, res) => {
    model.db_signin(req.body, (result) => {
        if (result.length > 0) {
            res.json({ result: true, data: result[0] });
        } else {
            res.json({ result: false });
        }
    });
    //실습과제 - 로그인 
    //step1 아이디를 찾아서 사용자 존재유무 체크
    const { userid, pw } = req.body;
    const user = await User.findOne({
        where: { userid },
    });

    if (user) {
        //step2 입력된 비밀번호 암호화하여 기존 데이터와 비교
        //사용자가 존재함
        const result = await compareFunc(pw, user.pw);
        console.log('result', result);
        if (result) {
            res.json({ result: true, data: result })
        } else {
            res.json({ result: false, message: '비밀번호가 틀렸습니다' })
        }

    } else {
        //사용자가 존재하지않음
        res.json({ result: false, message: '존재하는 사용자가 없습니다' })
        console.log('user', user);

    }

};
/////////////////////////////////////////
//PATCH
const edit_profile = (req, res) => {
    // model.db_profile_edit(req.body, () => {
    //     res.json({ result: true });
    // });
    //update(수정될 정보를 객체형태로 입력, 수정될 곳 객체 입력)
    const { name, pw, id } = req.body
    User.upadate({ name, pw }, { where: { id } }).then(() => {
        res.json({ result: true });
    });
};

///////////////////////////////
//DELETE
//회원탈퇴 destroy()

const destroy = (req, res) => {
    // User.delete_profile(req.body.id, () => {
    //     res.send({ result: true });
    // });
    const { id } = req.body;
    User.destroy({
        where: { id },
    }).then(() => {
        res.json({ result: true });
    });
};

module.exports = {
    main,
    signup,
    signin,
    profile,
    post_signup,
    post_signin,
    edit_profile,
    destroy,
};


///function
//암호화
const bcryptPassword = (password) => bcrypt.hash(password, 11);
//비교
const compareFunc = (password, dbpass) => bcrypt.compare(password, dbpass)

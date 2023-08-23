const model = require('../model/Model');

///////////get//////// 
const main = (req, res) => {   //메인페이지
    res.render('index');
};

const signup = (req, res) => {  //회원가입페이지
    res.render('signup');
};

const signin = (req, res) => {  //로그인페이지
    res.render('signin');
};


///////post/////////
//회원가입

const post_signup = (req, res) => {
    model.db_signup(req.body, () => {
        res.json({ result: true });
    })  //model 실행
};

//로그인
const post_signin = (req, res) => {
    model.db_signin(req.body, (result) => {
        if(result.length >0 ) {
            res.json({result:true, data: result[0]})
            
        } else {
            res.json({result: false });
        }
    })
};


module.exports = {
    main,
    signup,
    signin,
    post_signup,
    post_signin,
};

